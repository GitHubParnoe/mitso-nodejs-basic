import {promises as fs} from 'fs';
const create = async () => {
   const filePath = './files/fresh.txt';
   const fileContent = 'I am fresh and young'

   try{

    await fs.access(filePath);

    console.error('File already exists');
   }
   catch{
       try{

        await fs.writeFile(filePath,fileContent);
        console.log('File created successfully');
       }catch(error){
           console.error('Error creating file:',error);
       }
   }
};

await create();