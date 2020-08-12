const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class News {
    
  static getTopNewsItem(){
        let request = new XMLHttpRequest();
        request.open('GET','https://news.yandex.ru/ru/world5.utf8.js');
        request.responseType = 'text';
        request.send();
        
        let requestJson =JSON.parse(this.separationNewsRequest(request.responseText));
        return requestJson[0].url;        
    }

    static separationNewsRequest(text){
        let tmp = text.substr(14);
        let tailIndex=text.indexOf('; var')+1;
        return this.truncate(text,a);
    }
    static truncate(str, maxlength) {
        return (str.length > maxlength) ?
          str.slice(0, maxlength - 1) + '' : str;
      }



    }
    module.exports = News;