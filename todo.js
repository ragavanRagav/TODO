var item = document.querySelector("#submit");
var remove = document.querySelector("#Remove");
var removeall = document.querySelector("#RemoveAll");
var list = document.querySelector("div");
var todo = localStorage.getItem('todo')?JSON.parse(localStorage.getItem('todo')) : [];
localStorage.setItem('todo',JSON.stringify(todo));
var storage = JSON.parse(localStorage.getItem('todo'));
item.addEventListener("submit",function(e){
    e.preventDefault();
    var val = document.querySelector("input");
    todo.push(val.value);
    localStorage.setItem('todo',JSON.stringify(todo));
    maker(val.value);
        val.value="";
});
var maker = function(text){
    var chil = document.createElement("p");
    chil.textContent = text;
    list.appendChild(chil);
};
for(var i=0;i<storage.length;i++){
    maker(storage[i]);
}
remove.addEventListener('click',function(){
    if(list !=""){
        list.removeChild(list.lastChild);
    }
});
removeall.addEventListener("click",function(){
    localStorage.clear();
    while(list!=""){
        list.removeChild(list.lastChild);
    }
});
