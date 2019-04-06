'use strict';
const item = (function(){
    function validateurl(url){
        if (!url.slice(0,7)==="http://"||!url.slice(0,8)==="https://"){
            throw new TypeError('Name must start with http:// or https://');
        }
    }; 
    function checkexist(urlin){
        store.pages.filter(function(x){
            x.url.includes(urlin)? true:false});
    }

    return {
        validateurl,
        checkexist
    };
}());

