// callback api in fs module is just use call back to do stuff

import * as fs from "fs";

// all  the fuctions of the fs is same with some callback taste

fs.mkdir("5. FSModule/Call API/Testfolder",{recursive:true},(error)=>{
    if(error) throw error;
    console.log("dir created");
});