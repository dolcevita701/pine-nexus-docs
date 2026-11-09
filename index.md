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

PineNexus is an OpenAI-compatible API gateway for overseas developers who want Chinese models without a separate account at each provider. DeepSeek, Qwen, Kimi, GLM, and Doubao are exposed as model IDs on one endpoint. We use official and backup upstreams with failover, and stay compatible with the OpenAI SDK so existing tools keep working. You only pass a model ID — not a channel or upstream name.

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

Model IDs below are the ones published on the [PineNexus model square](https://apinexusdev.com/pricing). Pass the string exactly as shown, including capitalization (`qwen-Image`, `Doubao-pro-32k`). Rates and availability can change; the model square is the source of truth.

Chat, reasoning, code, and vision models use `POST /v1/chat/completions`. Image models (`z-image-turbo`, `qwen-Image`) use `POST /v1/images/generations`. Embeddings (`bge-m3`) use `POST /v1/embeddings`. Rerank (`bge-reranker-v2-m3`) uses `POST /v1/rerank`.

### What to pick

- **Reasoning:** `deepseek-r1` or `deepseek-v4-pro`
- **Long-context code:** `kimi-k2.7-code` (262K context on the product homepage)
- **Image generation:** `z-image-turbo` or `qwen-Image`
- **Vision:** `glm-4.5v`
- **Embeddings and rerank:** `bge-m3` and `bge-reranker-v2-m3`

### DeepSeek

| Model ID | Category | Notes |
| :--- | :--- | :--- |
| `deepseek-v4-flash` | Text / code | Fast, lower-cost DeepSeek chat for everyday use. |
| `deepseek-v4-pro` | Reasoning / code | Higher-quality DeepSeek chat for complex production work. |
| `deepseek-r1` | Reasoning | Strong reasoning model for hard problems and step-by-step tasks. |

### Qwen

| Model ID | Category | Notes |
| :--- | :--- | :--- |
| `qwen3.8-max` | Text | Top-tier Qwen chat for hard tasks. |
| `qwen2.5-72b` | Text / code | Large Qwen chat for higher quality. |
| `qwen2.5-32b` | Text / code | Mid-size Qwen chat, balance of quality and price. |
| `qwen2.5-7b` | Text | Compact Qwen chat, low cost. |
| `qwen-Image` | Image | Qwen image generation model. |

### Kimi

| Model ID | Category | Notes |
| :--- | :--- | :--- |
| `kimi-k3` | Text | General Kimi chat with long-context strength. |
| `kimi-k3.1-pro` | Text | Higher-tier Kimi for complex chat and analysis. |
| `kimi-k2.7-code` | Code | Kimi model oriented to coding tasks. The product homepage lists a 262K context window. |

### GLM

| Model ID | Category | Notes |
| :--- | :--- | :--- |
| `glm-4.5` | Text | General-purpose GLM chat model. |
| `glm-4.5-air` | Text | Lighter, cheaper GLM 4.5 for high-volume calls. |
| `glm-4.5v` | Vision | GLM multimodal model for image + text. |
| `glm-4.6` | Text | Balanced GLM chat for daily apps. |
| `glm-4.7` | Text | Newer GLM chat with stronger overall quality. |
| `glm-5` | Text | Flagship GLM chat for demanding tasks. |
| `glm-5-turbo` | Text | Faster GLM-5 variant for lower latency. |
| `glm-5.1` | Text | Updated GLM-5 line for general chat. |
| `glm-5.2` | Text | Next GLM-5 iteration for general production use. |
| `glm-5.3` | Text | Latest mainline GLM chat model. |
| `glm-5.3-flash` | Text | Speed-optimized GLM 5.3. |
| `glm-5.3-flashx` | Text | Extra-fast GLM 5.3 for high throughput. |
| `glm-5.3-flashx-legal` | Text | GLM 5.3 flash variant tuned for legal/document work. |

### Doubao

| Model ID | Category | Notes |
| :--- | :--- | :--- |
| `Doubao-lite-32k` | Text | Lightweight Doubao chat with 32k context. |
| `Doubao-pro-32k` | Text | Higher-capability Doubao chat with 32k context. |
| `doubao-seed-1-6-250615` | Text | Doubao Seed series general chat model. |

### Image and retrieval

| Model ID | Category | Notes |
| :--- | :--- | :--- |
| `z-image-turbo` | Image | Fast image generation model. |
| `bge-m3` | Embeddings | Multilingual embedding model for search and retrieval. |
| `bge-reranker-v2-m3` | Rerank | Reranks search results for higher relevance. |

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
