
// Module 1
var logger = require('./logger');
console.log(__filename);
console.log(__dirname);
logger.log('Welcome Aryan');

// To get the path detail 
// Path module
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);  


//OS  Module 

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// Printing tech. 1 using concatenation operator (+)
console.log('Total Memory: '+ totalMemory);
console.log('Free Memory: '+ freeMemory);

// Printing tech. 2 using template string
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

// File System Module
const fs=require('fs');
const files=fs.readdirSync('./');
console.log(files);

const files2 = fs.readdir('./',function(err, files){
   if(err) console.log('Error: ',err);
   else console.log('Results: ',files);
}); 

// Events Module
const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.on('Message Logged',function(){
    console.log('Message Received');
});

emitter.emit('Message Logged'); 

