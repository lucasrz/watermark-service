## Watermark Service

Serverless/Cloud-Native Assessment for DerSalvador.
This is a cloud-native microservice based on MEAN Stack with gRPC and GraphQL
For a local environment is nescessary Docker, for staging and production its used google cloud.

## Installation

Use the package manager [npm] (Download | Node.js) to install independencies.

```bash
npm i
```

## Commands

Run development mode
```
npm run live
```

Run production mode
```
npm start
```

Run tests
```npm run test``` or ```./runWatermarkTests.sh```

Run tests with coverage
```
npm run test:coverage
```

## Usage
Access ```http://localhost:3000/graphql``` to start querying watermarks

## Install on knative environment

Use kubectl to manage and deploy the service on the kubernetes (https://kubernetes.io/docs/tasks/tools/install-kubectl/)

kubectl apply --filename service.yaml          


## References 

https://knative.dev/docs

https://codelabs.developers.google.com/codelabs/knative-intro/index.html?index=..%2F..index#0

https://kubernetes.io/docs/reference/kubectl/cheatsheet
