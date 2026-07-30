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
  - title: OpenAI Compatible
    details: Fully compliant with OpenAI standard API format. Drop-in replacement for existing software and SDKs.
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