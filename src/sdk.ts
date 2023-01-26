import { S3, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

const accessKeyId = process.env.ACCESS_KEY || "";
const secretAccessKey = process.env.SECRET_ACCESS_KEY || "";
const region = process.env.REGION || "";
const bucketName = process.env.BUCKET_NAME || "";

const main = async (): Promise<void> => {
  await performCommands();
};

const performCommands = async (): Promise<void> => {
  await finalize(bucketName);
};

export const finalize = async (bucket: string): Promise<void> => {
  const credentials = {
    accessKeyId,
    secretAccessKey,
  };

  const s3 = new S3({ credentials, region });

  let counter = 0;
  while (true) {
    counter++;
    console.log("START");
    await pushToS3(s3, bucket, Buffer.from("", "utf-8"), "test/2");
    console.log(`DONE: ${counter}`);
  }
};

const pushToS3 = async (
  s3: S3,
  bucket: string,
  data: Buffer,
  toFile: string
): Promise<void> => {
  try {
    let contentType = "application/octet-stream";
    await s3.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: toFile,
        Body: data,
        CacheControl: undefined,
        ContentType: contentType ?? undefined,
      })
    );
  } catch (e) {
    console.log(e);
  }
};

main()
  .then(() => {
    console.log("Build done");
  })
  .catch((e) => {
    console.error(e);
  });
