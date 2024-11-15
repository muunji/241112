const fs = require('fs');

const titleName = "241112";
let root = "wrap";
const liTag = "<li>who</li>";

let head = `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${titleName}</title>
</head>
`;
let body = `
<body>
  <div id="${root}">
    ${liTag}
  </div>
</body>
`;
const htmlTemplate =`
<!DOCTYPE html>
<html lang="en">
${head}
${body}
</html>
`;


//1112.html > 함수로 표현
// function decisionFilename() {
//   return "1112.html"
// }
// fs.writeFile(decisionFilename(),htmlTemplate,"utf-8",function(error){
//   // 매개변수를 전달
//   if(error===true){
//     return console.error("고장났어");
//   }
// })

// function decisionFilename(fileName, extender) {
//   //extender 확장자
//   return fileName+"."+extender;
// }
// fs.writeFile(decisionFilename("1112-1","html"),htmlTemplate,"utf-8",function(error){
//   // 매개변수를 전달
//   if(error===true){
//     return console.error("고장났어");
//   }
// })




// fs.writeFile((function(){
//   // 즉시 실행하는 함수 > function()은 선언만 할 수 있기 때문에 (function())
//   return "1112-2.html"
// })(),htmlTemplate,"utf-8",function(error){
//   if(error===true){
//     return console.error("고장났어");
//   }
// 
// function decisionFilename(fileName, extender){
//   if(typeof(fileName) ==="string"){
//     // fileName의 타입은 문자열일 때
//     if(extender === "html"){
//       let result = fileName+"."+extender;
//       return result;
//     }
//     // 중첩
//     // if를 연달아 2번쓰면 break를 써줘야한다 -> 중첩으로
//   } else {
//     console.log("매개변수 틀렸어");
//   }

// }
// 의미가 있는 함수


//me
// function decisionFilename(fileName, extender){
//   const extenderStrings = ["html","txt","css","js"];

//   for(let i=0; i<extenderStrings.length; i++){
//     if(typeof(fileName) ==="string"){
//       if(extender === extenderStrings[i]){
//         let result = fileName+"."+extender;
//         return result;
//       }
//     }
//   else {
//     console.log("매개변수 틀렸어");
//   }
//   }
// }


function decisionFilename(fileName, extender){
  const extenderStrings = ["html","txt","css","js"];

  if(typeof(fileName) ==="string"){
    for(let i=0; i<extenderStrings.length; i++){
      if(extender === extenderStrings[i]){
        let result = fileName+"."+extender;
        return result;
      }else {
        console.log("배열에 없어");
      }
    }
  }else {
    console.log("매개변수 틀렸어");
  }
}
// 유효한가를 본것

fs.writeFile(decisionFilename("1112-2","111"),htmlTemplate,"utf-8",function(error){
    if(error===true){
      return console.error("고장났어");
    }
  })