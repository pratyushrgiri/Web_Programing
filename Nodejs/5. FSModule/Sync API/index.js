// in sinc type fo api for fs module we just make the same things as above like mkdir()
import * as fs from 'fs'

fs.mkdirSync("5. FSModule/Sync API/testfolder" ,{recursive:true});
console.log("directory made");