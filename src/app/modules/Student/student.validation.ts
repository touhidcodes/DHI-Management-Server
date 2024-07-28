import { z } from "zod";

const createStudentSchema = z.object({
  body: z.object({
    firstName: z.string({ required_error: "First name is required" }),
    lastName: z.string({ required_error: "Last name is required" }),
    gender: z.string({ required_error: "Gender is required" }),
    dateOfBirth: z.string({ required_error: "DOB is required" }),
    address: z.string({ required_error: "Address is required" }),
    phone: z
      .string({ required_error: "Phone number is required" })
      .min(11, { message: "Phone number must be at least 11 characters long" })
      .optional(),
    email: z.string().optional(),
    status: z.string({ required_error: "Student status required" }),
  }),
});

const updateStudentSchema = z.object({
  body: z.object({
    firstName: z
      .string({ required_error: "First name is required" })
      .optional(),
    lastName: z.string({ required_error: "Last name is required" }).optional(),
    gender: z.string({ required_error: "Gender is required" }).optional(),
    dateOfBirth: z.string({ required_error: "DOB is required" }).optional(),
    address: z.string({ required_error: "Address is required" }).optional(),
    phone: z
      .string({ required_error: "Phone number is required" })
      .min(11, { message: "Phone number must be at least 11 characters long" })
      .optional(),
    email: z.string().optional(),
    status: z.string({ required_error: "Student status required" }).optional(),
  }),
});

export const studentValidationSchema = {
  createStudentSchema,
  updateStudentSchema,
};
