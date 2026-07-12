import fs from "node:fs";
for (let i = 0; i < 100000; i++) {

    fs.writeFileSync("./12. Streams/data.txt",`${i}\n`,{flag:"a"});
    
}