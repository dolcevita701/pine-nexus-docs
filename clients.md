# Client setup

PineNexus speaks the OpenAI chat API. Create an API key in the [dashboard](https://apinexusdev.com), then point the client at PineNexus and choose a [supported model ID](/#supported-models).

| Client | What to set | Value |
| :--- | :--- | :--- |
| OpenAI SDK, Cursor, most API clients | Base URL | `https://apinexusdev.com/v1` |
| Cherry Studio | API host | `https://apinexusdev.com` |
| Any client | API key | Bearer key from the dashboard |
| Any client | Model | A model ID from the catalog, such as `deepseek-v4-pro` |

## Cherry Studio

1. Install [Cherry Studio](https://cherry-ai.com).
2. Open **Settings → Model Provider** and add an OpenAI-compatible provider.
3. Use these values:
   - **Provider name:** `PineNexus`
   - **API host:** `https://apinexusdev.com`
   - **API key:** the key from the PineNexus dashboard
4. Check the connection, fetch models, and pick an ID such as `deepseek-v4-flash`, `qwen3.8-max`, `kimi-k3`, or `glm-4.5`.

Leave `/v1` off the Cherry Studio host. Cherry Studio appends the chat path itself. If a build asks you to type the full request URL, use `https://apinexusdev.com/v1/chat/completions`.

## Cursor

1. Open **Cursor Settings → Models**.
2. Paste your PineNexus API key into the OpenAI API key field.
3. Enable **Override OpenAI Base URL** and set it to `https://apinexusdev.com/v1`.
4. Add the model ID you want to call, for example `deepseek-v4-pro` or `kimi-k2.7-code`.

Cursor will send chat requests to PineNexus with that key. The model name must be one of the IDs on the [supported models](/#supported-models) list.

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
