---
layout: home

hero:
  name: "PineNexus"
  text: "Chinese AI models for overseas developers"
  tagline: "One OpenAI-compatible API for DeepSeek, Qwen, Kimi, and GLM. Stripe top-up. One API key."
  actions:
    - theme: brand
      text: Quick start
      link: "#quick-start"
    - theme: alt
      text: Supported models
      link: "#supported-models"
    - theme: alt
      text: Open dashboard
      link: https://apinexusdev.com

features:
  - title: Chinese models, one key
    details: Call DeepSeek, Qwen, Kimi, GLM, and Doubao with model IDs. The same key works across the catalog.
  - title: Stripe top-up
    details: Add balance with Stripe. Pay only for the tokens you use. There is no monthly fee.
  - title: OpenAI-compatible /v1
    details: Base URL https://apinexusdev.com/v1. Authenticate with a Bearer API key from the dashboard.
---

PineNexus is an OpenAI-compatible API service for overseas developers who want Chinese models without setting up a separate account for each model family. DeepSeek, Qwen, Kimi, GLM, and Doubao are exposed as model IDs on one endpoint. It stays compatible with the OpenAI SDK so existing tools keep working. You only pass a model ID.

## Quick start {#quick-start}

### 1. Sign in, top up, and create a key

1. Sign in at the [dashboard](https://apinexusdev.com). Public self-serve registration is currently closed, so you need an existing PineNexus account.
2. Add balance with Stripe in the dashboard.
3. Open **Tokens** and create an API key.
4. Send that key as a Bearer token on every request. Do not put the key in client-side code that ships to a browser.

Per-model rates live on the [model square](https://apinexusdev.com/pricing) and can change. Check that page instead of copying a price from these docs.

### 2. Base URL

OpenAI SDKs, Cursor, and any client that asks for an OpenAI base URL:

`https://apinexusdev.com/v1`

Cherry Studio asks for an API host and appends the path itself. Use `https://apinexusdev.com` there — do not include `/v1` in the Cherry Studio host. Full Cherry Studio steps are on the [client setup](/clients) page.

### 3. Authentication

```http
Authorization: Bearer YOUR_API_KEY
```

Chat, reasoning, code, and vision requests go to `POST https://apinexusdev.com/v1/chat/completions`. Image generation, embeddings, and rerank use the matching OpenAI-compatible paths on the [API examples](/api-examples) page.

Client walkthroughs: [Cherry Studio, Cursor, and the OpenAI SDK](/clients). Copy-paste calls: [API examples](/api-examples). Billing overview: [Billing](/billing).

## Supported models {#supported-models}

PineNexus offers Chinese models through one OpenAI-compatible API. Pass a model ID on `https://apinexusdev.com/v1`. The full live catalog and current prices are on the [model square](https://apinexusdev.com/pricing).

The IDs below are examples. Chat, reasoning, code, and vision models use `POST /v1/chat/completions`. Image models use `POST /v1/images/generations`. Embeddings use `POST /v1/embeddings`. Rerank uses `POST /v1/rerank`.

### What to pick

- **Reasoning:** `deepseek-r1` or `deepseek-v4-pro`
- **Long-context code:** `kimi-k2.7-code` (256K context, 262,144 tokens)
- **Image generation:** `z-image-turbo` or `qwen-Image`
- **Vision:** `glm-4.5v`
- **Embeddings and rerank:** `bge-m3` and `bge-reranker-v2-m3`

| Model ID | Use |
| :--- | :--- |
| `deepseek-r1` | Reasoning |
| `deepseek-v4-pro` | Reasoning |
| `kimi-k2.7-code` | Long-context code |
| `z-image-turbo` | Image generation |
| `qwen-Image` | Image generation |
| `glm-4.5v` | Vision |
| `bge-m3` | Embeddings |
| `bge-reranker-v2-m3` | Rerank |

## Code example {#code-examples}

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://apinexusdev.com/v1",
    api_key="sk-your-api-key",
)

response = client.chat.completions.create(
    model="deepseek-v4-pro",  # or deepseek-v4-flash, qwen3.8-max, kimi-k3, glm-4.5, ...
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"},
    ],
)

print(response.choices[0].message.content)
```

JavaScript, curl, streaming, vision, image generation, embeddings, and rerank samples are on the [API examples](/api-examples) page.

## Billing

Top up in the [dashboard](https://apinexusdev.com) with Stripe. Usage is deducted from that balance. Per-model rates are listed on the [model square](https://apinexusdev.com/pricing). See [Billing](/billing) for a short overview.
