const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class News {
    
    constructor(){
        this.separationNewsRequest = this.separationNewsRequest.bind(this);
        this.truncate = this.truncate.bind(this);
        this.getTopNewsItem = this.getTopNewsItem.bind(this);
    }

  static getTopNewsItem(){
        let request = new XMLHttpRequest();
        request.open('GET','https://news.yandex.ru/ru/world5.utf8.js');
        request.responseType = 'text';
        request.send();
        
        // let requestJson =JSON.parse(this.separationNewsRequest(request.responseText));
        // return requestJson[0].url;        
        return this.separationNewsRequest(request.responseText);
    }

    static separationNewsRequest(text){
        let tmp = text.substr(14);
        let tailIndex=tmp.indexOf('; var')+1;
        return this.truncate(tmp,tailIndex);
    }
    static truncate(str, maxlength) {
        return (str.length > maxlength) ?
          str.slice(0, maxlength - 1) + '' : str;
      }



    }
    module.exports = News;