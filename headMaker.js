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
    //function(callback)에 의한 return
  };
  //function headMaker()에 대한 return
}

