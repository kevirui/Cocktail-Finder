import { streamText } from "ai";
import { openrouter } from "../lib/ai";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openrouter("meta-llama/llama-4-maverick:free"),
      prompt: prompt,
      system:
        "Eres un bartender y experto en bebidas, que está atendiendo a personas muy curiosas en tragos y atención al cliente",
    });
    return result.textStream;
  },
};
