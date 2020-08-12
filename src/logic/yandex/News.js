export default class News {
    
    static getTopNewsItem(){
        let request = new XMLHttpRequest();
        request.open('GET','https://news.yandex.ru/ru/world5.utf8.js');
        request.responseType = 'text';
        request.send();
        
        let requestJson =JSON.parse(request.responseText);
        return requestJsonp[0].url;        
    }
}