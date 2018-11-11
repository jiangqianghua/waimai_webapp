 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const srcRoot = path.resolve(__dirname,'src');
 const devPath = path.resolve(__dirname,'dev');
 const pageDir = path.resolve(srcRoot,'page');
 const mainFile = 'index.js'
const fs = require('fs');

function getHtmlArray(entryMap){
    let htmlArray = [];

    Object.keys(entryMap).forEach((key)=>{
        let fullPathName = path.resolve(pageDir,key);
        let fileName = path.resolve(fullPathName, key+'.html');
        console.log("htmlArray:" + fileName);
        if(fs.existsSync(fileName)){
            htmlArray.push(new HtmlWebpackPlugin({
                filename:key+'.html',
                template:fileName,
                chunks:[key]  //引入js文件
            }));
        }
    });
    return htmlArray ;
}

function getEntry(){
    let entryMap = {};

    fs.readdirSync(pageDir).forEach((pathname)=>{
        let fullPathName = path.resolve(pageDir, pathname);
       // console.log("fullPathName="+fullPathName);
        let stat = fs.statSync(fullPathName);
        let fileName = path.resolve(fullPathName, mainFile);
        console.log("getEntry:"+fileName);
        if (stat.isDirectory() && fs.existsSync(fileName)) {
            entryMap[pathname] = fileName;
        }
    });

    return entryMap;

}

const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);
 module.exports={
 	mode:'development',
 	entry:entryMap,
 	output:{
 		path: devPath,
 		filename: '[name].min.js'
 	},
 	module:{
 		rules:[
            { test: /\.(js|jsx)$/, use: [{loader:'babel-loader'}] , include:srcRoot},
 			{ test: /\.css$/ , use:['style-loader' , 'css-loader'] , include:srcRoot },
 			{ test: /\.scss$/ , use:['style-loader' , 'css-loader','sass-loader'] , include:srcRoot},
 			{ test: /\.(png|jpg|jpeg)$/, use:'url-loader?limit=8192', include:srcRoot}
 		]
 	},
    plugins:[
        
    ].concat(htmlArray)
 }