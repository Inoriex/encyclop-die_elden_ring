import mongoose from "mongoose";
import config from "config";
import logger from "../utils/logger"

async function connect() {
  const DBURI = config.get<string>("mongodburi");
  try {
    await mongoose.connect(DBURI)
    logger.info('Connected to mongoDB')
  }
  catch(error:any) {
    logger.info(" Could not connect to mongoDB");
    process.exit(-1)
  }
}

export default connect;