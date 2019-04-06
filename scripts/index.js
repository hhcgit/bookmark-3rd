'use strict';
/*global bookmark api render*/
$(document).ready(function(){
    bookmark.bindEventListeners();
    api.getlist()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
    })
    .catch(err => console.log(err.message))
    bookmark.render();
})