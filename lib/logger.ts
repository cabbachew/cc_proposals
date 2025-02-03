type LogLevel = "debug" | "info" | "warn" | "error";

interface LoggerConfig {
  level: LogLevel;
  enabled: boolean;
}

const config: LoggerConfig = {
  level: (process.env.LOG_LEVEL as LogLevel) || "error",
  enabled: process.env.NODE_ENV === "development",
};

export const logger = {
  error: (message: string, meta?: object) => {
    if (config.enabled) {
      console.error(message, meta);
    }
  },
  warn: (message: string, meta?: object) => {
    if (config.enabled && ["debug", "info", "warn"].includes(config.level)) {
      console.warn(message, meta);
    }
  },
  info: (message: string, meta?: object) => {
    if (config.enabled && ["debug", "info"].includes(config.level)) {
      console.info(message, meta);
    }
  },
  debug: (message: string, meta?: object) => {
    if (config.enabled && config.level === "debug") {
      console.debug(message, meta);
    }
  },
};
