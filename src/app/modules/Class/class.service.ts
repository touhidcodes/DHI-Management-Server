import { Class } from "@prisma/client";
import prisma from "../../utils/prisma";

const createClass = async (classData: Class) => {
  const result = await prisma.class.create({
    data: classData,
  });

  return result;
};

const getAllClasses = async () => {
  const result = await prisma.class.findMany({
    where: {
      isDeleted: false,
    },
  });

  return result;
};

const updateClass = async (classId: string, updateData: Partial<Class>) => {
  const result = await prisma.class.update({
    where: {
      id: classId,
    },
    data: updateData,
  });

  return result;
};

const deleteClass = async (classId: string) => {
  const result = await prisma.class.update({
    where: {
      id: classId,
    },
    data: {
      isDeleted: true,
    },
  });

  return result;
};

export const classServices = {
  createClass,
  getAllClasses,
  updateClass,
  deleteClass,
};
