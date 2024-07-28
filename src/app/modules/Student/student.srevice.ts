import { Student } from "@prisma/client";
import prisma from "../../utils/prisma";
import { TStudentData } from "./student.interface";
import APIError from "../../errors/APIError";
import httpStatus from "http-status";

const createStudent = async (data: TStudentData) => {
  const { studentData, parentData } = data;

  const result = await prisma.$transaction(async (tx) => {
    const parent = await tx.parent.create({
      data: parentData,
    });

    if (!parent) {
      throw new APIError(httpStatus.NOT_ACCEPTABLE, "Parent not created!");
    }
    const student = await tx.student.create({
      data: {
        ...studentData,
        parentId: parent.id,
      },
      include: { class: true, parent: true },
    });
    return student;
  });
  return result;
};

const getAllStudents = async () => {
  const result = await prisma.student.findMany({
    where: { isDeleted: false },
    include: { parent: true, class: true },
  });
  return result;
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
