import logger from "pino";
import dayjs from "dayjs";

// Logger != console.log
const log = logger({
  base: {
    pid: false,
  },
  timestamp: () => `, "time":"${dayjs().format("YYYY-MM-DD HH:mm:ss")}"`,
});

export default log;
