import express from 'express'
import path from 'node:path'
import fs from 'node:fs'
const app = express();
app.use(express.static(path.resolve()+'/static'))
const basePath = path.join(path.resolve(),'views');
app.get('*',(req,res)=>{
    const url = req.url;
    if(url=='/')return res.sendFile(path.resolve(basePath+'/index.html'));
    const file = url.split('/')[1];
    if(fs.existsSync(path.resolve(basePath+'/'+file)))
        res.sendFile(path.resolve(basePath+'/'+file)); 
    else res.send("404");
})
app.listen(3000)