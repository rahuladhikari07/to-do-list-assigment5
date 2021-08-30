const container = document.querySelector('.container');
var inp = document.querySelector('.input');
const add = document.querySelector('.add');





add.addEventListener('click',()=>{
    const todoText = inp.value;
    var itemBox = document.createElement('div');
    itemBox.classList.add('item');

    var input = document.createElement('input');
    input.type = "text";
    input.disabled = true;
    input.value = todoText;
    input.classList.add('item_input');



    var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "EDIT";
    	edit.addEventListener('click', () =>{
            if(input.disabled == true){
                input.disabled = !input.disabled;
             }
           else{
                 input.disabled = !input.disabled;
                
               
             }
        });


        var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "REMOVE";
    	remove.addEventListener('click', () => {
            itemBox.remove();
        });
    container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);


        inp.value = "";



})






