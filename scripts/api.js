'use strict';
const api= (function(){
    const baseUrl='https://thinkful-list-api.herokuapp.com/hc/bookmarks'
    const listApiFetch = function(...args) {
        // setup var in scope outside of promise chain
        let error;
        return fetch(...args)
          .then(res => {
            if (!res.ok) {
              // if response is not 2xx, start building error object
              error = { code: res.status };
    
              // if response is not JSON type, place Status Text in error object and
              // immediately reject promise
              if (!res.headers.get('content-type').includes('json')) {
                error.message = res.statusText;
                return Promise.reject(error);
              }
            }
            return res.json();
      })
      .then(data => {
        // if error exists, place the JSON message into the error object and 
        // reject the Promise with your error object so it lands in the next 
        // catch.  IMPORTANT: Check how the API sends errors -- not all APIs
        // will respond with a JSON object containing message key
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }

        // otherwise, return the json as normal resolved Promise
        return data;
      });
  };
    function getlist(){
        return listApiFetch(baseUrl);
    }
    function createNew(urlobj){
        const upload=JSON.stringify(urlobj);
        return fetch(baseUrl,{
            method:"POST",
            headers: {'content-type': 'application/json'} ,
            body:upload
        });
    };
    function upDate(id,newData){
        let upload=JSON.stringify(newData)
        return fetch(baseUrl+'/'+id,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body:upload
        });
    };


    return {
        createNew,
        getlist,
        upDate
    }

}());