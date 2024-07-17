import { schemaRegistry } from "./Registry";
import { ServiceATransformer } from "./transformers/ServiceATransformer";
import { ServiceBTransformer } from "./transformers/ServiceBTransformer";
import { CommonSchema, ServicePayload } from "./types";

// Register transformers
schemaRegistry.register('serviceA', new ServiceATransformer());
schemaRegistry.register('serviceB', new ServiceBTransformer());

export function transformPayload(serviceName: string, payload: ServicePayload): CommonSchema | null {
    const transformer = schemaRegistry.getTransformer(serviceName);
    if (transformer) {
        return transformer.transform(payload);
    }
    console.error(`No transformer registered for service: ${serviceName}`);
    return null;
}

const serviceAPayload: ServicePayload = { serviceAField1: 'value1', serviceAField2: 'value2' };
console.log(transformPayload('serviceA', serviceAPayload));