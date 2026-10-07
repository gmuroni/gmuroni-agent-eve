import { defineTool } from "eve/tools";
import { z } from "zod";
import { getProductDetails } from "../../lib/api.js";

export default defineTool({
  description:
    "Get full details for a single product from the Vercel Swag Store catalog, by product ID or slug.",
  inputSchema: z.object({
    idOrSlug: z.string().min(1).describe("Product ID or slug"),
  }),
  async execute({ idOrSlug }) {
    return getProductDetails(idOrSlug);
  },
});
