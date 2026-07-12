import { createReadStream } from "node:fs";

// const Stream= createReadStream('./12. Streams/data.txt',{highWaterMark:800});
const Stream= createReadStream('./12. Streams/data.txt',{encoding:"utf-8"});

Stream.on('data',(data)=>{
    console.log(data);
})
