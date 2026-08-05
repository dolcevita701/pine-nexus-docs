---
layout: home

hero:
  name: "API Documentation"
  text: "High-Performance AI API Infrastructure"
  tagline: Enterprise-grade access to global top-tier AI models with high concurrency and reliability.
  actions:
    - theme: brand
      text: Get Started Guide
      link: "#quick-start"
    - theme: alt
      text: API Reference
      link: "#code-examples"

features:
  - title: OpenAI Standard Compatible
    details: Fully compliant with OpenAI API standards. Seamlessly integrates diverse mainstream models as a drop-in replacement for existing software and SDKs.
  - title: Ultra-Low Latency
    details: Optimally routed proxy network designed for stable response times and high availability.
  - title: Transparent Pricing
    details: Pay-as-you-go billing with real-time balance tracking and granular API Key token controls.
---

## Quick Start {#quick-start}

### 1. Base URL
Set your API client's Base URL to:

`https://apinexusdev.com/v1`

> **Note:** Always ensure your endpoint includes the `/v1` suffix when configuring clients.

### 2. Authentication
All API requests require a Bearer Token. Generate your API key from your Dashboard, then include it in your HTTP Request Header:

`Authorization: Bearer YOUR_API_KEY`

---

## Desktop Client Integration (Cherry Studio)

We recommend using **Cherry Studio** for a seamless desktop experience with full text, code, image, and vision model support.

### 1. Manual Configuration
Download and install [Cherry Studio](https://cherry-ai.com) on your device.
1. Download and install Cherry Studio.
2. Open Settings $\rightarrow$ Model Provider $\rightarrow$ Click Choose
  * **Provider Name**: `PineNexus`
  * **API Host**: `https://apinexusdev.com`
  * **API Key**: `YOUR_API_KEY`
4. Check to load models and start using them immediately.

## Supported Models
| Model Name | Category | Primary Use Cases |
| :--- | :--- | :--- |
| `deepseek-v4-flash` | Text / Code | Ultra-fast responses |
| `deepseek-v4-pro` | Reasoning | Complex logic, long-context |
| `qwen-vl-plus` | Vision | Multimodal image understanding |
| `Tongyi-MAI/Z-Image-Turbo` | Image Generation | Fast text-to-image |
| `Llama-3.3-70B-Instruct-Turbo` | General AI | Open-source ecosystem tasks |

## Code Examples {#code-examples}

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://apinexusdev.com/v1",
    api_key="sk-your-api-key"
)

response = client.chat.completions.create(
    model="deepseek-v4-pro",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)
```
```javascript
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://apinexusdev.com/v1",
  apiKey: "sk-your-api-key",
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Hello!" }],
    model: "deepseek-v4-pro",
  });

  console.log(completion.choices[0].message.content);
}

main();
```
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
