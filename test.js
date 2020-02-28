const winston = require('winston')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      //
    //   new winston.transports.File({ filename: 'error.log', level: 'error' }),
    //   new winston.transports.File({ filename: 'combined.log' })
    ]
  });


// logger.log({level:'info', message: 'a'})


logger.add(new winston.transports.File({
    filename: 'rolling',
    maxsize: '1k',
    maxFiles: 2,
    // tailable: true
}))
  
  for(var i=0; i< 2048; i++){
    logger.error('h')

  }
 
  