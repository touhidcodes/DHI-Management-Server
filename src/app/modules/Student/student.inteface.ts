import { Parent, Student } from "@prisma/client";

export type TStudentData = {
  student: Student;
  parent: Parent;
};
