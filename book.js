'use strict';

// book
function book(_title,_author,_idbn){
    this.title=_title;
    this.author=_author;
    this.idbn=_idbn;
}


// ui list

function ui(){
}

const tbody = document.querySelector('tbody');
ui.prototype.addBookList=function(values){
    const tr = document.createElement('tr');
    tr.className="body-tr";
    tr.innerHTML=`<td>${values.title}</td>
                  <td>${values.author}</td>
                  <td>${values.idbn}</td>
                  <td class="delt">${'&cross;'}</td>`

    tbody.appendChild(tr);
}
// empty
ui.prototype.empty=function(){
    document.getElementById('title-id').value="";
    document.getElementById('author-id').value="";
    document.getElementById('IDBN-id').value="";
}


// remvoing the ui list items (tr);
tbody.addEventListener('click',dlt) ;
function dlt(e){
    
    if(e.target.className == 'delt'){
        document.querySelector('.body-tr').remove();
    }
    e.preventDefault()
}


// eventlister
const form = document.getElementById('book-form');
form.addEventListener('submit',oneClick);

function oneClick(e){
    const title = document.getElementById('title-id').value;
    const author = document.getElementById('author-id').value;
    const idbn = document.getElementById('IDBN-id').value;
    
    const BookList = new book(title,author,idbn);
    
    const ulList = new ui();
    ulList.empty()

    let btn = document.querySelector(".btn");
    if(title===""||author===""|| idbn===""){
        btn.value='please fill the all the requre infromation';
        btn.classList.add('error')
        setTimeout(()=>{
            btn.value='submit';
            btn.classList.remove('error')
        },2000);
        let count = 1;
        if(count > 1){
            count++;
            document.querySelector('.body-tr').remove();
        }else{
            document.querySelector('.body-tr')
        }
    }else{
        btn.value='valid subition';
        btn.classList.add('approval');
        setTimeout(()=>{
            btn.value='submit';
            btn.classList.remove('approval')
        },2000);
        ulList.addBookList(BookList);
    }
    
    e.preventDefault()
}