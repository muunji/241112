const fs = require('fs')

/** 
 * @param {string} [fileName='index'] 
 * @param {string} [extender='html'] 
 * @description
 * fileName(파일명)과 extender(확장자)를 리턴해준다.
 */
function fileNameMaker(fileName='index', extender='html') {
  let result = fileName + "." + extender
  return result
}

/**
 * 
 * @param {string} titleName 
 * @param {string} rootId 
 * @param {string} text 
 * @returns {string} html 문서
 * @description
 * html doc의 제목과 rootID를 id로 갖는 div태그와 text가 들어간 p태그 만드는 함수입니다.
 */
function HTMLMaker(titleName,rootId,text) {
  let result = ""

  function headMaker (titleName) {
    let result = 
    `<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${titleName}</title>
    </head>`
    return result
  }

  function bodyMaker (rootId,text) {
    function divMaker (rootId,text){
      function pMaker(text){
        let result = `<p>${text}</p>`;
        return result;
      }
      let result=`<div id=${rootId}>${pMaker(text)}</div>`
      return result
    }
      let result = `
      <body>
      ${divMaker(rootId,text)}
      </body>
      `
      return result
    }
    result = 
    `<!DOCTYPE html>
    <html lang="en">
      ${headMaker(titleName)}
      ${bodyMaker(rootId,text)}
    </html>`

    return result
  }

const fileName = fileNameMaker()
const html = HTMLMaker("HTMLMaker","wrap","나는 p태그")

/** 
 * @description
 * 파일 생성 
 */
fs.writeFile(fileName , html, 'utf-8', (err) => {
  if(err) console.log(err)
})