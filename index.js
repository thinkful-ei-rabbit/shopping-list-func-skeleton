let STORE = [
    {name: "apples", completed:false},
    {name: "oranges", completed:true},
    {name: "milk", completed:true},
    {name: "bread", completed:false}
];

function generateHTML(){
    let html = [];
    for(let i=0; i < STORE.length;i++){
        const checkedClass = STORE[i].completed ? 'shopping-item__checked' : '';
        html.push(`
        <li>
        <span class="shopping-item ${checkedClass}">${STORE[i].name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>        
        `);

    }
    return html;

}


function renderList(){
    let html = generateHTML();
    console.log(html);
    $("ul.shopping-list").html(html);
}


function main(){
    renderList();
    $("#js-shopping-list-form").submit(function(evt){
        evt.preventDefault();
        let item = $("#shopping-list-entry").val();
        STORE.push({name:item, completed:false});
        renderList();

    })
}

function deleteItem(){
    console.log($(this).parent());
    alert("delete");
    renderList();
}

function completeItem(){
     console.log($(this).parent());
    alert("completed");
    renderList();
}


$("ul.shopping-list").on("click",".shopping-item-delete",deleteItem);


$("ul.shopping-list").on("click",".shopping-item-toggle", completeItem)




$(main);