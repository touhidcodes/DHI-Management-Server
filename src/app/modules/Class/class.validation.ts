import { z } from "zod";

const createClassSchema = z.object({
  body: z.object({
    className: z.string({ required_error: "Class name is required" }),
    classroom: z.string({ required_error: "Classroom is required" }),
    capacity: z.string({ required_error: "Capacity is required" }),
    academicYear: z.string({ required_error: "Academic year required" }),
  }),
});

const updateClassSchema = z.object({
  body: z.object({
    className: z
      .string({ required_error: "Class name is required" })
      .optional(),
    classroom: z.string({ required_error: "Classroom is required" }).optional(),
    capacity: z.string({ required_error: "Capacity is required" }).optional(),
    academicYear: z
      .string({ required_error: "Academic year required" })
      .optional(),
  }),
});

export const classValidationSchema = {
  createClassSchema,
  updateClassSchema,
};
