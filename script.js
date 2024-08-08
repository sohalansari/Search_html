const searchForm =document.getElementById('search-form');
const searchinput = document.getElementById('search-input');
const searchResult = document.getElementById('search-result');

searchForm.addEventListener('submit',function(e){
    e.preventDefault();
    const query =searchinput.vailue;
    displaysearchResult(query);
});
