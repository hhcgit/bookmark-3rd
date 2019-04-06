'use strict';
const bookmark=(function(){
  function bookmarkBuilder(page){
        if (page.isEdit){
            return `<li class="saved-bookmark">
            <form class="js-edit">
                <input class="title-input" type="text" value="${page.title}">
            </form>
            <form id="rating">
              <label for="rating">Rate Your WebPage</label>
              <input type="number" placeholder="${page.rating}" class="rating-input">
              <button type="submit" class="submit-rating">Submit</button>
            </form>
            <form class="js-edit-desc">
                <input class="desc-input" type="text" value="${page.desc}">
            </form>
            <a href="${page.url}" target='_blank'><button type="submit" id="visit">Visit Page</button></a>
            <button type="submit" id="edit">Edit</button>
            <button type="submit" id="delete">Delete</button>
          </li>`;
        }
        return `<li class="saved-bookmark">
        <h2>${page.title}</h2>
        <form id="rating">
          <label for="rating">Rate Your WebPage</label>
          <input type="number" placeholder="${page.rating}" class="rating-input">
          <button type="submit" class="submit-rating">Submit</button>
        </form>
        <p id="description">
          ${page.desc}
        </p>
        <a href="${page.url}" target='_blank'><button type="submit" id="visit">Visit Page</button></a>
        <button type="submit" id="edit">Edit</button>
        <button type="submit" id="delete">Delete</button>
      </li>`
    };
    function newobj(urlin){
      let title=urlin.slice(10,30);
        if (urlin.slice(0,8)==="https://"){
          title=urlin.slice(11,31);
        }
        return {title:title, url:urlin};
    }
    function urlsubmit(){
        $('#url-form').submit((event)=>{
            event.preventDefault();
            const urlInput=$('.url-input').val();
            $('.url-input').val('');
            // if(item.checkexist(urlInput)){
            // }
            let urlobj=newobj(urlInput);
            api.createNew(urlobj);
            store.addItem(store.createobj(urlInput));  
        })
    };
    function generatehtml(obj){
      const pagecombine=obj.map(p=>bookmarkBuilder(p));
      return pagecombine.join('');
    }
    function render(){
      console.log(store.pages);
      let pages=[...store.pages];
      console.log(pages);
      
    };
    function bindEventListeners(){
        urlsubmit();
    };
    return {
        bindEventListeners:bindEventListeners,
        render:render
    };
}());