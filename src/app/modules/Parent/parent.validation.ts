import { z } from "zod";

const createParentSchema = z.object({
  body: z.object({
    fathersName: z.string({ required_error: "Fathers name is required" }),
    mothersName: z.string({ required_error: "Mothers name is required" }),
    phoneNumber: z
      .string({ required_error: "Phone number is required" })
      .min(11, { message: "Phone number must be at least 11 characters long" }),
    email: z.string().optional(),
    address: z.string({ required_error: "Address required" }),
    alternativePhone: z.string().optional(),
    guardianName: z.string({ required_error: "Guardian name is required" }),
    relationship: z.string({ required_error: "Relationship  is required" }),
  }),
});

const updateParentSchema = z.object({
  body: z.object({
    fathersName: z
      .string({ required_error: "Fathers name is required" })
      .optional(),
    mothersName: z
      .string({ required_error: "Mothers name is required" })
      .optional(),
    phoneNumber: z
      .string({ required_error: "Phone number is required" })
      .min(11, { message: "Phone number must be at least 11 characters long" })
      .optional(),
    email: z.string().optional(),
    address: z.string({ required_error: "Address required" }).optional(),
    alternativePhone: z.string().optional(),
    guardianName: z
      .string({ required_error: "Guardian name is required" })
      .optional(),
    relationship: z
      .string({ required_error: "Relationship  is required" })
      .optional(),
  }),
});

export const parentValidationSchema = {
  createParentSchema,
  updateParentSchema,
};
