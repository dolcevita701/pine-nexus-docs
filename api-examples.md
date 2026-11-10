# API examples

Base URL: `https://apinexusdev.com/v1`

Header: `Authorization: Bearer YOUR_API_KEY`

Replace `sk-your-api-key` with a key from **Tokens** in the [dashboard](https://apinexusdev.com). Replace the model string with any ID from the [supported models](/#supported-models) list. The chat samples below use `deepseek-v4-pro`. The same chat call works with `deepseek-v4-flash`, `qwen3.8-max`, `kimi-k3`, `kimi-k3.1-pro`, `glm-4.5`, and the other published chat IDs.

The routes below were checked against the live endpoint. A missing or invalid key returns `401` on a real path. Unknown paths return `404` (`Invalid URL`). A successful keyed response was not exercised here.

## List models

```bash
curl https://apinexusdev.com/v1/models \
  -H "Authorization: Bearer sk-your-api-key"
```

`GET /v1/models` requires a Bearer key. Use it to confirm the IDs available to your account.

## Chat

### Python

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://apinexusdev.com/v1",
    api_key="sk-your-api-key",
)

response = client.chat.completions.create(
    model="deepseek-v4-pro",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"},
    ],
)

print(response.choices[0].message.content)
```

### JavaScript

```javascript
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://apinexusdev.com/v1",
  apiKey: "sk-your-api-key",
});

const completion = await openai.chat.completions.create({
  model: "deepseek-v4-pro",
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(completion.choices[0].message.content);
```

### curl

```bash
curl https://apinexusdev.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-your-api-key" \
  -d '{
    "model": "deepseek-v4-pro",
    "messages": [
      {
        "role": "user",
        "content": "Hello!"
      }
    ]
  }'
```

## Streaming

Set `stream` to `true` on `POST /v1/chat/completions`. The endpoint returns server-sent events in the usual OpenAI chunk format.

```bash
curl https://apinexusdev.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-your-api-key" \
  -N \
  -d '{
    "model": "deepseek-v4-flash",
    "stream": true,
    "messages": [
      {
        "role": "user",
        "content": "Hello!"
      }
    ]
  }'
```

```python
stream = client.chat.completions.create(
    model="deepseek-v4-flash",
    messages=[{"role": "user", "content": "Hello!"}],
    stream=True,
)

for chunk in stream:
    delta = chunk.choices[0].delta.content
    if delta:
        print(delta, end="", flush=True)
```

## Vision

`glm-4.5v` is the vision model on the model square. Send it through the same chat endpoint with an OpenAI-style image content block.

```python
response = client.chat.completions.create(
    model="glm-4.5v",
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "Describe this image."},
                {
                    "type": "image_url",
                    "image_url": {"url": "https://example.com/image.png"},
                },
            ],
        }
    ],
)

print(response.choices[0].message.content)
```

## Image generation

Image IDs on the model square are `z-image-turbo` and `qwen-Image`. Live probing confirmed `POST /v1/images/generations` (invalid or missing key returns `401`; a made-up path returns `404`). Pass the model ID exactly, including the capital `I` in `qwen-Image`.

```bash
curl https://apinexusdev.com/v1/images/generations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-your-api-key" \
  -d '{
    "model": "z-image-turbo",
    "prompt": "A quiet harbor at dusk, watercolor style"
  }'
```

```python
image = client.images.generate(
    model="z-image-turbo",
    prompt="A quiet harbor at dusk, watercolor style",
)

first = image.data[0]
print(getattr(first, "url", None) or getattr(first, "b64_json", None))
```

The same path accepts `qwen-Image` as the `model` value. The OpenAI-style response includes image URLs or base64 data in `data[]`.

## Embeddings

`bge-m3` is the multilingual embedding model. Live probing confirmed `POST /v1/embeddings`.

```bash
curl https://apinexusdev.com/v1/embeddings \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-your-api-key" \
  -d '{
    "model": "bge-m3",
    "input": "PineNexus is an OpenAI-compatible API service."
  }'
```

```python
embedding = client.embeddings.create(
    model="bge-m3",
    input="PineNexus is an OpenAI-compatible API service.",
)

print(len(embedding.data[0].embedding))
```

## Rerank

`bge-reranker-v2-m3` reranks search results. Live probing confirmed `POST /v1/rerank`. Nearby names such as `/v1/reranker` and `/v1/rerankings` return `404`. The body below follows the common OpenAI-compatible rerank shape (`model`, `query`, `documents`).

```bash
curl https://apinexusdev.com/v1/rerank \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-your-api-key" \
  -d '{
    "model": "bge-reranker-v2-m3",
    "query": "How do I call Chinese models from overseas?",
    "documents": [
      "PineNexus is an OpenAI-compatible API service for Chinese models.",
      "A recipe for sourdough bread."
    ]
  }'
```

```python
import requests

response = requests.post(
    "https://apinexusdev.com/v1/rerank",
    headers={
        "Authorization": "Bearer sk-your-api-key",
        "Content-Type": "application/json",
    },
    json={
        "model": "bge-reranker-v2-m3",
        "query": "How do I call Chinese models from overseas?",
        "documents": [
            "PineNexus is an OpenAI-compatible API service for Chinese models.",
            "A recipe for sourdough bread.",
        ],
    },
)

print(response.json())
```

## Common mistakes

- **Missing `/v1`.** SDK and Cursor base URLs must be `https://apinexusdev.com/v1`, not `https://apinexusdev.com`.
- **Cherry Studio host includes `/v1`.** Cherry Studio appends the API path itself. Set the API host to `https://apinexusdev.com` with no `/v1` suffix. Details are on the [client setup](/clients) page.
- **Model ID case.** IDs are case-sensitive. Use `qwen-Image`, `Doubao-lite-32k`, and `Doubao-pro-32k` exactly as listed.
- **Insufficient balance.** Requests fail if the account has no remaining balance. Top up with Stripe in the dashboard before you call the API.
