function headMaker() {
  let result = ``;
    
  function addMetaTag(charset, content) {
    result += `<meta charset="${charset}" content="${content}">`;
  }
    
  function addTitle(title) {
    result += `<title>${title}</title>`;
  }
    
  function addStylesheet(href) {
    result += `<link rel="stylesheet" href="${href}">`;
  }
    
  return function(callback) {
    callback({
      addMetaTag: addMetaTag,
      addTitle: addTitle,
      addStylesheet: addStylesheet
    });
      
    return result;
  };
}

function bodyMaker() {
  let result = ``;
    
  function addDiv(id, content) {
    result += `<div id="${id}">${content}</div>`;
  }
    
  function addParagraph(text) {
    result += `<p>${text}</p>`;
  }
    
  function addList(items) {
    result += '<ul>';
    items.forEach(item => {
      result += `<li>${item}</li>`;
    });
    result += '</ul>';
  }
    
  return function(callback) {
    callback({
      addDiv: addDiv,
      addParagraph: addParagraph,
      addList: addList
    });
      
    return result;
  };
}

function HTMLMaker() {
  let head = headMaker();
  let body = bodyMaker();

  return `
  <!DOCTYPE html>
  <html>
    <head>
      ${head(head => {
        head.addMetaTag('UTF-8', 'width=device-width, initial-scale=1.0');
        head.addTitle('김민지');
        head.addStylesheet('styles.css');
      })}
    </head>
    <body>
      ${body(body => {
        body.addDiv('root', '동적으로 만들기');
        body.addParagraph('이렇게 문장도');
        body.addList(["공욱재", "서민석", "김민지"]);
      })}
    </body>
  </html>
  `;
}

console.log('HTML 생성 결과:');
console.log(HTMLMaker());