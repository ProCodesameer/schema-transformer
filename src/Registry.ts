// src/SchemaRegistry.ts
import { SchemaTransformer } from './types';

class SchemaRegistry {
    private transformers: Map<string, SchemaTransformer> = new Map();

    register(serviceName: string, transformer: SchemaTransformer): void {
        this.transformers.set(serviceName, transformer);
    }

    getTransformer(serviceName: string): SchemaTransformer | undefined {
        return this.transformers.get(serviceName);
    }
}

export const schemaRegistry = new SchemaRegistry();
