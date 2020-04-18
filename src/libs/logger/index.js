const winston = require('winston')
const { combine, timestamp, splat, printf, colorize } = winston.format

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    colorize(),
    timestamp(),
    splat(),
    printf(info => {
      return `${info.timestamp} ${info.level} - ${info.message} ${info.meta ? JSON.stringify(info.meta) : ''}`
    })
  ),
  defaultMeta: {},
  transports: [new winston.transports.Console({})]
})

module.exports = logger
