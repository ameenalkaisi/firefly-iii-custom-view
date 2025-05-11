## RE: Firefly API

The URL to the schema is https://api-docs.firefly-iii.org/firefly-iii-6.2.10-v1.yaml

## Mocking

It doesn't work well, but make sure the .env's NEXT_PUBLIC_FIREFLY_API_URL matches the "--base-url" used in the mock generation

```bash
yarn run firefly:api:mock -- --base-url=http://localhost:8081/api/v1
```
