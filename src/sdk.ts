import { S3, PutObjectCommand } from "@aws-sdk/client-s3";
import { config } from "dotenv";

config();

const accessKeyId = process.env.ACCESS_KEY || "";
const secretAccessKey = process.env.SECRET_ACCESS_KEY || "";
const region = process.env.REGION || "";
const bucketName = process.env.BUCKET_NAME || "";

const main = async (): Promise<void> => {
  const credentials = { accessKeyId, secretAccessKey };
  const client = new S3({ credentials, region });

  let counter = 0;
  while (true) {
    counter++;
    console.log("START");
    await client.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: "test",
        Body: Buffer.from("", "utf-8"),
        ContentType: "application/octet-stream",
      })
    );
    console.log(`DONE: ${counter}`);
  }
};

main()
  .then(() => {
    console.log("Build done");
  })
  .catch((e) => {
    console.error(e);
  });
