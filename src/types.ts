// src/types.ts
export interface ServicePayload {
    // Define the structure of the service payload
    [key: string]: any;
}

export interface CommonSchema {
    // Define the structure of the common schema
    [key: string]: any;
}

export interface SchemaTransformer {
    transform(payload: ServicePayload): CommonSchema;
}
