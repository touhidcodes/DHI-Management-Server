import { z } from "zod";

const parentSchema = z.object({
  fathersName: z.string({ required_error: "Father's name is required" }),
  mothersName: z.string({ required_error: "Mother's name is required" }),
  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .min(11, { message: "Phone number must be at least 11 characters long" }),
  email: z.string().optional(),
  address: z.string({ required_error: "Address is required" }),
  alternativePhone: z.string().optional(),
  guardianName: z.string({ required_error: "Guardian name is required" }),
  relationship: z.string({ required_error: "Relationship is required" }),
});

const studentSchema = z.object({
  studentId: z.string({ required_error: "Student ID is required" }),
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
  classId: z.string({ required_error: "Class ID is required" }),
});

const createStudentSchema = z.object({
  body: z.object({
    studentData: studentSchema,
    parentData: parentSchema,
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
