import { Skill, SkillCategory } from "@prisma/client";

export type TGroupedSkills = {
  [key: string]: (Skill & { skillCategory: SkillCategory })[];
};
