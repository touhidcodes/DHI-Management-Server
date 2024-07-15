import * as bcrypt from "bcrypt";
import prisma from "./prisma";
import config from "../config/config";
import { UserRole } from "@prisma/client";

export const seedSuperAdmin = async () => {
  try {
    const isExistAdmin = await prisma.user.findFirst({
      where: {
        username: config.superAdmin.username,
      },
    });

    if (isExistAdmin) {
      console.log("admin is live now!");
      return;
    }

    const hashedPassword = await bcrypt.hash(
      config.superAdmin.username as string,
      12
    );

    const adminData = {
      email: config.superAdmin.email as string,
      password: hashedPassword,
      username: config.superAdmin.password as string,
      role: UserRole.SUPERADMIN,
    };

    if (!isExistAdmin) {
      const result = await prisma.$transaction(async (tx) => {
        const admin = await tx.user.create({
          data: adminData,
          select: {
            id: true,
            username: true,
            email: true,
            createdAt: true,
            updatedAt: true,
          },
        });

        const userId = admin.id;

        await tx.userProfile.create({
          data: {
            userId: userId,
          },
        });

        console.log("admin data created successfully!");
        return admin;
      });

      return result;
    }
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
};
