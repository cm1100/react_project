

import fs from 'node:fs'

const readPJson = async ()=>{
    const pJson = new URL('./package.json',import.meta.url).pathname;
    console.log(pJson);
    
}

readPJson()