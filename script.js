const inputFld = document.getElementById('inputFiled')
const addBtn = document.getElementById('addButton')
const taskList = document.getElementById('taskList')

addBtn.addEventListener('click', ()=>{
    const inputValue = inputFld.value.trim()
    console.log(inputValue)
   
    if(inputValue.trim() != "") {

        // create a new list item
        const listItem = document.createElement('li')
        listItem.textContent = inputValue

        // create a 'Mark complete' button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', ()=> {
            listItem.style.textDecoration = 'line-through'
        });

        // crate a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', ()=> {
            taskList.removeChild(listItem);
        })

        listItem.appendChild(completeBtn)
        listItem.appendChild(deleteBtn)

        taskList.appendChild(listItem)
        inputFld.value = '';
    } else {
        alert("Please enter a task")
    }
    
})

