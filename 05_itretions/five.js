//for each

const coding = ['js','ruby','java','html','c++','python']
// coding.forEach( function(item) {
//     console.log(item);
    
// })

coding.forEach ( (val)=>{
   // console.log(val);
})

function printMe (item){
    //console.log(item);
    
}
coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    //console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )