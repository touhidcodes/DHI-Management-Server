import { Parent } from "@prisma/client";
import prisma from "../../utils/prisma";

const createParent = async (parentData: Parent) => {
  const result = await prisma.parent.create({
    data: parentData,
  });

  return result;
};

const getAllParents = async () => {
  const result = await prisma.parent.findMany({
    where: {
      isDeleted: false,
    },
  });

  return result;
};

const updateParent = async (parentId: string, updateData: Partial<Parent>) => {
  const result = await prisma.parent.update({
    where: {
      id: parentId,
    },
    data: updateData,
  });

  return result;
};

const deleteParent = async (parentId: string) => {
  const result = await prisma.parent.update({
    where: {
      id: parentId,
    },
    data: {
      isDeleted: true,
    },
  });

  return result;
};

export const parentServices = {
  createParent,
  getAllParents,
  updateParent,
  deleteParent,
};
