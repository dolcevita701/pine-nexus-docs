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

PineNexus is an OpenAI-compatible API gateway for overseas developers who want Chinese models without a separate account at each provider. DeepSeek, Qwen, Kimi, GLM, and Doubao are exposed as model IDs on one endpoint. Requests are served from the enabled upstreams (DeepSeek, SiliconFlow, Aliyun Qwen, Volcano Ark, Moonshot, and Zhipu). You send a model ID, not a channel name.

## Quick start {#quick-start}

### 1. API key and balance

Sign in at [apinexusdev.com](https://apinexusdev.com). Top up with Stripe in the dashboard, then create an API key. Send that key as a Bearer token. Do not put the key in client-side code that ships to a browser.

### 2. Base URL

OpenAI SDKs, Cursor, and any client that asks for an OpenAI base URL:

`https://apinexusdev.com/v1`

Cherry Studio asks for an API host and adds the API path itself. Use:

`https://apinexusdev.com`

### 3. Authentication

```http
Authorization: Bearer YOUR_API_KEY
```

Chat requests go to `POST https://apinexusdev.com/v1/chat/completions`.

Client walkthroughs: [Cherry Studio, Cursor, and the OpenAI SDK](/clients). Copy-paste calls: [API examples](/api-examples).

## Client setup

### Cherry Studio

1. Install [Cherry Studio](https://cherry-ai.com).
2. Open **Settings → Model Provider** and add an OpenAI-compatible provider.
3. Fill in:
   - **Provider name:** `PineNexus`
   - **API host:** `https://apinexusdev.com`
   - **API key:** the key from the PineNexus dashboard
4. Check the connection, fetch the model list, and start a chat with a model ID from the table below (for example `deepseek-v4-pro` or `kimi-k3`).

Cursor and SDK settings are on the [client setup](/clients) page.

## Supported models {#supported-models}

Model IDs below are the ones published on the [PineNexus model square](https://apinexusdev.com/pricing). Pass the string exactly as shown, including capitalization (`qwen-Image`, `Doubao-pro-32k`). Rates and availability can change; the model square is the source of truth.

Chat, reasoning, code, and vision models use `POST /v1/chat/completions`. Image IDs (`z-image-turbo`, `qwen-Image`) and retrieval IDs (`bge-m3`, `bge-reranker-v2-m3`) are enabled on the same account and base URL.

### DeepSeek

| Model ID | Category | Notes |
| :--- | :--- | :--- |
| `deepseek-v4-flash` | Text / code | DeepSeek V4, faster option |
| `deepseek-v4-pro` | Reasoning / code | DeepSeek V4 for harder reasoning and longer tasks |
| `deepseek-r1` | Reasoning | DeepSeek reasoning model |

### Qwen (Alibaba)

| Model ID | Category | Notes |
| :--- | :--- | :--- |
| `qwen3.8-max` | Text | Qwen3.8 Max |
| `qwen2.5-72b` | Text / code | Qwen2.5 72B |
| `qwen2.5-32b` | Text / code | Qwen2.5 32B |
| `qwen2.5-7b` | Text | Qwen2.5 7B |
| `qwen-Image` | Image | Text-to-image. The ID is case-sensitive |

### Kimi (Moonshot)

| Model ID | Category | Notes |
| :--- | :--- | :--- |
| `kimi-k3` | Text | Kimi K3 |
| `kimi-k3.1-pro` | Text | Kimi K3.1 Pro |
| `kimi-k2.7-code` | Code | Long-context code model (262K on the product homepage) |

### Zhipu GLM

| Model ID | Category | Notes |
| :--- | :--- | :--- |
| `glm-4.5` | Text | GLM-4.5 chat |
| `glm-4.5-air` | Text | GLM-4.5 Air |
| `glm-4.5v` | Vision | Multimodal image understanding |
| `glm-4.6` | Text | GLM-4.6 chat |
| `glm-4.7` | Text | GLM-4.7 chat |
| `glm-5` | Text | GLM-5 chat |
| `glm-5-turbo` | Text | GLM-5 Turbo |
| `glm-5.1` | Text | GLM-5.1 chat |
| `glm-5.2` | Text | GLM-5.2 chat |
| `glm-5.3` | Text | GLM-5.3 chat |
| `glm-5.3-flash` | Text | GLM-5.3 Flash |
| `glm-5.3-flashx` | Text | GLM-5.3 FlashX |
| `glm-5.3-flashx-legal` | Text | GLM-5.3 FlashX legal variant |

### Doubao (Volcano Ark)

| Model ID | Category | Notes |
| :--- | :--- | :--- |
| `Doubao-lite-32k` | Text | Doubao lite. The ID is case-sensitive |
| `Doubao-pro-32k` | Text | Doubao pro. The ID is case-sensitive |
| `doubao-seed-1-6-250615` | Text | Doubao Seed |

### Image and retrieval

| Model ID | Category | Notes |
| :--- | :--- | :--- |
| `z-image-turbo` | Image | Fast text-to-image |
| `bge-m3` | Embeddings | Embedding model |
| `bge-reranker-v2-m3` | Rerank | Reranking model |

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

JavaScript, curl, and a `glm-4.5v` vision call are on the [API examples](/api-examples) page.

## Billing

Top up in the [dashboard](https://apinexusdev.com) with Stripe. Usage is deducted from that balance. Per-model rates are listed on the [model square](https://apinexusdev.com/pricing).
