import fs from 'fs'

const studentsData = './build/Filter/data.json'

//reading students from data.json 
function getStudents(callback){
    fs.readFile(studentsData,'utf8',(err,data) => {
        if(err){
            callback(err,null)
        }
        callback(null,JSON.parse(data));
    })
}
//a few filter functions
var livesInDresden = (student) =>{
    return student.residence === 'Dresden'
}

getStudents((err,data) =>{
   console.log(data.students.filter(livesInDresden))
})

