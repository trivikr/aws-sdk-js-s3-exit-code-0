# aws-sdk-js-s3-exit-code-0

Attempts to reproduce S3 PutObject returning with exiting with code 0

- GitHub Issue: https://github.com/aws/aws-sdk-js-v3/issues/4332
- Reference: https://github.com/marco-ippolito/snippet-aws-bug

## Prerequisites

- Install **Node.js** by following these steps:
  1. Install [nvm](https://github.com/nvm-sh/nvm#installation-and-update).
  1. Use node v18.x.x by running `nvm use` or `nvm use 18` in a terminal window.
  1. Verify that node is installed by running `node -v` in a terminal window and confirm that it shows Node.js >=18, such as `v18.13.0`).
  1. Enable corepack by running `corepack enable` in a terminal window.
- Install dependencies by running `yarn`.
- Popuate `.env` file with your AWS credentials, config and bucket name. You can refer `.env.example` for the format.

## Setup

1. Run `yarn start:sdk` It will exit after some iteration (I've notice the slower the internet speed the sooner it will crash)
2. Run `yarn start:native` It will never exit.
