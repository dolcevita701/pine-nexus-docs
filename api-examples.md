# API examples

Endpoint: `POST https://apinexusdev.com/v1/chat/completions`

Header: `Authorization: Bearer YOUR_API_KEY`

Replace `sk-your-api-key` with a key from the [dashboard](https://apinexusdev.com). Replace the model string with any ID from the [supported models](/#supported-models) list. The samples below use `deepseek-v4-pro`. The same call works with `deepseek-v4-flash`, `qwen3.8-max`, `kimi-k3`, `kimi-k3.1-pro`, `glm-4.5`, and the other published IDs.

## Python

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

## JavaScript

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

## curl

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

Image generation IDs currently on the model square are `z-image-turbo` and `qwen-Image`. Embedding and rerank IDs are `bge-m3` and `bge-reranker-v2-m3`.
