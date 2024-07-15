import { Server } from "http";
import app from "./app";
import config from "./app/config/config";
import { seedSuperAdmin } from "./app/utils/seed";

async function main() {
  try {
    await seedSuperAdmin();
    const server: Server = app.listen(config.port, () => {
      console.log("Sever is running on port", config.port);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
