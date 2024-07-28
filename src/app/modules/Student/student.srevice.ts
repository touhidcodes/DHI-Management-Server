import { Student } from "@prisma/client";
import prisma from "../../utils/prisma";
import { TStudentData } from "./student.inteface";

const createStudent = async (studentData: TStudentData) => {
  const { student, parent } = studentData;

  const result = await prisma.$transaction(async (tx) => {
    const parentData = await tx.parent.create({
      data: parent,
    });

    if (parentData) {
      await tx.student.create({
        data: {
          ...student,
          parentId: parentData.id,
        },
      });
    }
  });

  return result;
};

const getAllStudents = async () => {
  return await prisma.student.findMany({
    where: { isDeleted: false },
    include: { parent: true, class: true },
  });
};

const updateStudent = async (
  studentId: string,
  studentData: Partial<Student>
) => {
  return await prisma.student.update({
    where: { id: studentId },
    data: studentData,
  });
};

const getStudentById = async (studentId: string) => {
  return await prisma.student.findUnique({
    where: { id: studentId },
    include: { parent: true, class: true },
  });
};

const deleteStudent = async (studentId: string) => {
  const result = await prisma.$transaction(async (tx) => {
    const student = await tx.student.update({
      where: { id: studentId },
      data: { isDeleted: true },
    });

    if (student) {
      await tx.parent.update({
        where: { id: student.parentId },
        data: { isDeleted: true },
      });
    }
  });

  return result;
};

export const studentServices = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
