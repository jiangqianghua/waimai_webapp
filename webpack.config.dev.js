 const path = require('path');
 const srcRoot = path.resolve(__dirname,'src');
 const devPath = path.resolve(__dirname,'dev');
 const pageDir = path.resolve(srcRoot,'page');
 const mainFile = 'index.js'
const fs = require('fs');

function getEntry(){
    let entryMap = {};

    fs.readdirSync(pageDir).forEach((pathname)=>{
        let fullPathName = path.resolve(pageDir, pathname);
        console.log("fullPathName="+fullPathName);
        let stat = fs.statSync(fullPathName);
        let fileName = path.resolve(fullPathName, mainFile);
        console.log("fileName="+fileName);
        if (stat.isDirectory() && fs.existsSync(fileName)) {
            entryMap[pathname] = fileName;
        }
    });

    return entryMap;

}

const entryMap = getEntry();
 module.exports={
 	mode:'development',
 	entry:entryMap,
 	output:{
 		path: devPath,
 		filename: '[name].min.js'
 	},
 	module:{
 		rules:[
 			{ test: /\.css$/ , use:['style-loader' , 'css-loader'] , include:srcRoot },
 			{ test: /\.scss$/ , use:['style-loader' , 'css-loader','sass-loader'] , include:srcRoot},
 			{ test: /\.(png|jpg|jpeg)$/, use:'url-loader?limit=8192', include:srcRoot}
 		]
 	}
 }