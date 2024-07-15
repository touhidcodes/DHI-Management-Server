import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config({ path: path.join(process.cwd(), ".env") });

if (!process.env.SUPER_ADMIN_EMAIL) {
  throw new Error(
    "SUPER_ADMIN_EMAIL is not defined in the environment variables"
  );
}

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  jwt: {
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    access_token_expires_in: process.env.ACCESS_TOKEN_EXPIRES_IN,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,
    reset_pass_secret: process.env.RESET_PASS_TOKEN,
    reset_pass_token_expires_in: process.env.RESET_PASS_TOKEN_EXPIRES_IN,
  },
  superAdmin: {
    username: process.env.SUPER_ADMIN_USERNAME,
    email: process.env.SUPER_ADMIN_EMAIL,
    password: process.env.SUPER_ADMIN_PASSWORD,
  },
  //Here add your other environment variables
};
