import { Parent, Student } from "@prisma/client";

export type TStudentData = {
  studentData: Student;
  parentData: Parent;
};
