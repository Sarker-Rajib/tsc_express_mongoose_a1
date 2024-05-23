import { z } from "zod";

const productValidationSchema = z.object({
  name: z.string().min(5),
  description: z.string().min(10),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(
    z.object({
      type: z.string(),
      value: z.string(),
    })
  ),
  inventory: z.object({
    quantity: z.number(),
    inStock: z.boolean(),
  }),
});

export default productValidationSchema;
