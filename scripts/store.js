'use strict';
const store=(function(){
    
    function findName(urlin){
        return this.pages.map(page=>page.url===urlin);
    }
    function addItem(urlobj) {
        store.pages.push(urlobj);
      };
    function searchTerm(search){
        return false;
    }
    return {
        pages:[],
        addItem,
        findName,
        searchTerm
    }
}());