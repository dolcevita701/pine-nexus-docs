# Client setup

PineNexus is an OpenAI-compatible API service. The same dashboard API key works for chat, reasoning, code, vision, image generation, embeddings, and rerank — not chat alone. Sign in, top up with Stripe, create a key in **Tokens**, then point your client at PineNexus and choose a [supported model ID](/#supported-models).

| Client | What to set | Value |
| :--- | :--- | :--- |
| OpenAI SDK, Cursor, most API clients | Base URL | `https://apinexusdev.com/v1` |
| Cherry Studio | API host | `https://apinexusdev.com` |
| Any client | API key | Bearer key from **Tokens** in the dashboard |
| Any client | Model | A model ID from the catalog, such as `deepseek-v4-pro` |

Copy-paste HTTP samples, including image, embeddings, rerank, and streaming, are on the [API examples](/api-examples) page.

## Cherry Studio

1. Install [Cherry Studio](https://cherry-ai.com).
2. Open **Settings → Model Provider** and add an OpenAI-compatible provider.
3. Use these values:
   - **Name:** `PineNexus`
   - **API host:** `https://apinexusdev.com`
   - **API key:** the key from the PineNexus dashboard
4. Check the connection, fetch models, and pick an ID such as `deepseek-v4-flash`, `qwen3.8-max`, `kimi-k3`, or `glm-4.5`.

Leave `/v1` off the Cherry Studio host. Cherry Studio appends the chat path itself. If a build asks you to type the full request URL, use `https://apinexusdev.com/v1/chat/completions`.

## Cursor

These steps match the current Cursor **Settings → Models → API Keys** fields used to point chat at an OpenAI-compatible base URL.

1. Open Cursor Settings (`Cmd+Shift+J` on macOS, `Ctrl+Shift+J` on Windows/Linux), go to **Models**, and expand **API Keys**.
2. Paste your PineNexus API key into the **OpenAI API Key** field and enable **Use OpenAI API Key**.
3. Enable **Override OpenAI Base URL** and set it to `https://apinexusdev.com/v1`. Include `/v1`, and do not append `/chat/completions`.
4. Use **Add or search model** to add the exact PineNexus model ID, for example `deepseek-v4-pro` or `kimi-k2.7-code`. Enable the model and select it in the chat model picker.

The override applies to OpenAI-format Chat and Agent requests. Cursor Tab, Auto, and cloud or background agents stay on Cursor's own backend and do not use this base URL. The model name Cursor sends must be one of the IDs on the [supported models](/#supported-models) list.

## OpenAI SDK

Install the official SDK (`openai` on PyPI or npm) and change `base_url` / `baseURL` and `api_key`. No other client settings are required. Full samples are on the [API examples](/api-examples) page.

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://apinexusdev.com/v1",
    api_key="sk-your-api-key",
)
```

```javascript
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://apinexusdev.com/v1",
  apiKey: "sk-your-api-key",
});
```

## Other OpenAI-compatible tools

LangChain, NextChat, and similar clients need the same three settings: base URL `https://apinexusdev.com/v1`, the dashboard API key, and a PineNexus model ID. In LangChain's OpenAI integration, set the base URL (`base_url` or `openai_api_base`, depending on the package version) to `https://apinexusdev.com/v1`.
