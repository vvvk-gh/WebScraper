const http = require('http')
const fs =require('fs')
const uuidv1 =require('uuid/v1')
const path = require('path')

const downloadPage = (url='http://nodeprogram.com') =>{

	console.log('dowloading',url)
const fetchpage = (urlF , callback) =>{

	http.get(urlF,(response)=>{
		let buff =''
		response.on('data',(chunk)=>{
			buff+=chunk
		})
		response.on('end' ,()=>{
			callback(null,buff)
		})
	}).on('error',(error)=>{
		console.error(`error:${error.message}`)
		callback(error)
	})
}
	const folderName = uuidv1()

	fs.mkdirSync(folderName)

	fetchpage(url,(error,data)=>{
		if(error) return console.log(error)
			fs.writeFileSync(path.join(__dirname,folderName,'url.txt'),url)
			fs.writeFileSync(path.join(__dirname,folderName,'file.txt'),data)
			console.log('downloading is done in the folder',folderName)
	})
}

downloadPage(process.argv[2])
















