import * as fs from 'fs/promises';

// creating a directory or folder

try {
    // // to createa a folder we can use the mkdir method of fs module
    // await fs.mkdir("C:/Users/acer/Desktop/Web_Programing/Nodejs/5. FSModule/Promise API/TestFolder/Cources/nodejs",{recursive:true});
    // console.log("folder is created!");


    //---------------------------------------------------------------------------------

    // //to read a files from the directory we can use the readdir method of fs module
    // const files= await fs.readdir("C:/Users/acer/Desktop/Web_Programing/Nodejs/5. FSModule/Promise API/TestFolder/Cources");
    // for (const file of files) {
    //     console.log(file);
    // }

    //---------------------------------------------------------------------------------

    // //to delete a folder we can use the rmdir method of fs module
    // await fs.rmdir("C:/Users/acer/Desktop/Web_Programing/Nodejs/5. FSModule/Promise API/TestFolder/Cources/nodejs");
    // console.log("folder is deleted!");

    // // we are going to create a file and write some data to it by using the writeFile method of fs module
    // await fs.writeFile("C:/Users/acer/Desktop/Web_Programing/Nodejs/5. FSModule/Promise API/TestFolder/Cources/test.txt","Hello World!");
    // console.log("file is created and data is written to it!");

    //---------------------------------------------------------------------------------

    // // to read a file we can use the readFile method of fs module
    // const data= await fs.readFile("C:/Users/acer/Desktop/Web_Programing/Nodejs/5. FSModule/Promise API/TestFolder/Cources/test.txt","utf-8");
    // console.log(data);

    //---------------------------------------------------------------------------------

    // //to append the file in the node js we use the appendfile()
    // fs.appendFile("C:/Users/acer/Desktop/Web_Programing/Nodejs/5. FSModule/Promise API/TestFolder/Cources/test.txt" ,"\nmau mau biralo");
    // console.log("data appended");

    // --------------------------------------------------------------------------------

    // // to copy a file to another we use copyFile()
    // fs.copyFile("C:/Users/acer/Desktop/Web_Programing/Nodejs/5. FSModule/Promise API/TestFolder/Cources/test.txt","C:/Users/acer/Desktop/Web_Programing/Nodejs/5. FSModule/Promise API/TestFolder/Cources/testcpy.txt");
    // console.log("file copy sucessfull!");


    //----------------------------------------------------------------------------------

    // // to get the info about the file and directory we use stat()
    // const info= await fs.stat("C:/Users/acer/Desktop/Web_Programing/Nodejs/5. FSModule/Promise API/TestFolder/Cources/test.txt");
    // console.log(info);
    // // to find out if it is a directory or not we can do this
    // console.log(info.isDirectory());
    // // to findout if it is a file 
    // console.log(info.isFile());
}
catch(error){
    console.log(error);
}