var winston = require('winston');
require('winston-daily-rotate-file');

var transport = new (winston.transports.DailyRotateFile)({
  level: 'info',
  filename: 'logs/application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  maxSize: '4k',
  maxFiles: 2
});

transport.on('rotate', function(oldFilename, newFilename) {
  // do something fun
});

var logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.printf(info => {
      return `[]\t ${info.timestamp}\t: ${info.message}`;
    })
  ),
  transports: [
    transport
  ]
});


let data = new Array(2048).fill('a').join('')
for(var i=0; i<4; i++){
    logger.info(data);
}
