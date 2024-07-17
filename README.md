# Schema Transformer - Tata AIG

`schema-transformer-tataaig` is a middleware package that allows various services to transform their payload schemas into a common schema. This simplifies handling multiple different payloads by transforming them into a single known schema that your main service can identify and work with.

## Features

- Register different transformers for different services.
- Transform any service payload into a common schema.
- Easy to extend with new transformers.

## Installation

Install the package using npm:

```bash
npm install schema-transformer-tataaig


// example.ts
import { transformPayload } from 'schema-transformer-tataaig';
import { ServicePayload } from 'schema-transformer-tataaig/dist/types';

const serviceAPayload: ServicePayload = { serviceAField1: 'value1', serviceAField2: 'value2' };
const transformedPayloadA = transformPayload('serviceA', serviceAPayload);
console.log(transformedPayloadA);

const serviceBPayload: ServicePayload = { serviceBField1: 'value3', serviceBField2: 'value4' };
const transformedPayloadB = transformPayload('serviceB', serviceBPayload);
console.log(transformedPayloadB);
