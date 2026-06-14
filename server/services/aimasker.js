import { GoogleGenAI } from "@google/genai";

export async function aimasker(text) {
    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `You are a data masking engine.
                    Rules:
                    1. Replace person names with [PERSON]
                    2. Replace organizations with [ORGANIZATION]
                    3. Replace locations with [LOCATION]
                    4. Replace street addresses with [ADDRESS]
                    5. Preserve all other text exactly.
                    6. Do not explain anything.
                    7. Return only the masked text.
                    Text:
                    ${text}`
    });
  return response.text;
}
