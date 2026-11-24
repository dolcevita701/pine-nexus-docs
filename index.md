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
    details: Call DeepSeek, Qwen, Kimi, and GLM with model IDs. The same key works across the catalog.
  - title: Stripe top-up
    details: Add balance with Stripe. Pay only for the tokens you use. There is no monthly fee.
  - title: OpenAI-compatible /v1
    details: Base URL https://apinexusdev.com/v1. Authenticate with a Bearer API key from the dashboard.
---

PineNexus is an OpenAI-compatible API service for overseas developers who want Chinese models without setting up a separate account for each model family. DeepSeek, Qwen, Kimi, and GLM are exposed as model IDs on one endpoint. It stays compatible with the OpenAI SDK so existing tools keep working. You only pass a model ID.

## Quick start {#quick-start}

### 1. Sign in, create a key, and try a call

1. Sign in at the [dashboard](https://apinexusdev.com) with Google or GitHub.
2. New accounts automatically receive $1 in trial credit.
3. Open **Tokens** and create an API key.
4. Send that key as a Bearer token on every request to make a test call. Do not put the key in client-side code that ships to a browser.
5. When you want more balance, add funds with Stripe in the dashboard.

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

These model IDs are the ones currently offered. Chat, reasoning, code, and vision models use `POST /v1/chat/completions`. Image models use `POST /v1/images/generations`. Embeddings use `POST /v1/embeddings`. Rerank uses `POST /v1/rerank`.

### What to pick

- **Reasoning:** `deepseek-r1` or `deepseek-v4-pro`
- **Chat:** `kimi-k3` or `kimi-k3.1-pro`
- **Image generation:** `z-image-turbo` or `qwen-Image`
- **Embeddings and rerank:** `bge-m3` and `bge-reranker-v2-m3`

| Model ID | Use |
| :--- | :--- |
| `bge-m3` | Embeddings |
| `bge-reranker-v2-m3` | Rerank |
| `deepseek-r1` | Reasoning |
| `deepseek-v4-flash` | Chat |
| `deepseek-v4-pro` | Reasoning |
| `glm-5.3` | Chat |
| `glm-5.3-flash` | Chat |
| `kimi-k3` | Chat |
| `kimi-k3.1-pro` | Chat |
| `qwen-Image` | Image generation |
| `qwen2.5-72b` | Chat |
| `qwen2.5-7b` | Chat |
| `qwen3.8-flash` | Chat |
| `qwen3.8-max` | Chat |
| `z-image-turbo` | Image generation |

## Code example {#code-examples}

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://apinexusdev.com/v1",
    api_key="sk-your-api-key",
)

response = client.chat.completions.create(
    model="deepseek-v4-pro",  # or deepseek-v4-flash, qwen3.8-max, kimi-k3, glm-5.3, ...
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"},
    ],
)

print(response.choices[0].message.content)
```

JavaScript, curl, streaming, image generation, embeddings, and rerank samples are on the [API examples](/api-examples) page.

## Billing

Top up in the [dashboard](https://apinexusdev.com) with Stripe. Usage is deducted from that balance. Per-model rates are listed on the [model square](https://apinexusdev.com/pricing). See [Billing](/billing) for a short overview.
