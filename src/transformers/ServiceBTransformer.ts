import { CommonSchema, SchemaTransformer, ServicePayload } from "../types";

export class ServiceBTransformer implements SchemaTransformer {
    transform(payload: ServicePayload): CommonSchema {
        // Transform Service B payload to Common Schema
        return {
            commonField1: payload.serviceBField1,
            commonField2: payload.serviceBField2,
        };
    }
}