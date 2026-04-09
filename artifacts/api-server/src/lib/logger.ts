export const logger = {
  info: (message: string) => {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  },
  error: (error: any) => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${error}`);
  },
  warn: (message: string) => {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
  },
  debug: (message: string) => {
    console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`);
  },
};
