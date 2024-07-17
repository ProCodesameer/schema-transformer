import { CommonSchema, SchemaTransformer, ServicePayload } from "../types";

export class ServiceATransformer implements SchemaTransformer {
    transform(payload: ServicePayload): CommonSchema {
        // Transform Service A payload to Common Schema
        return {
            commonField1: payload.serviceAField1,
            commonField2: payload.serviceAField2,
        };
    }
}