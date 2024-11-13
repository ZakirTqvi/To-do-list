const inputFld = document.getElementById('inputFiled')
const addBtn = document.getElementById('addButton')
const taskList = document.getElementById('taskList')

addBtn.addEventListener('click', ()=>{
    const inputValue = inputFld.value.trim()
   
    if(inputValue.trim() != "") {

        // create a new list item
        const listItem = document.createElement('li')
        listItem.textContent = inputValue

        // create a 'Mark complete' button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.classList.add('complete-btn')
        completeBtn.addEventListener('click', ()=> {
            listItem.style.textDecoration = 'line-through'
        });

        // crate a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete'
        deleteBtn.classList.add('delete-btn')
        deleteBtn.addEventListener('click', ()=> {
            taskList.removeChild(listItem);
        })

        // create edit button
        const editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        editBtn.classList.add('edit-btn')
        editBtn.addEventListener('click', ()=> {
            const currrentText = listItem.firstChild.textContent;
            console.log(currrentText)
            const newText = prompt('Edit your to-do item:', currrentText)
            if(newText) {
                listItem.firstChild.textContent = newText;
            }
        })

        listItem.appendChild(completeBtn)
        listItem.appendChild(deleteBtn)
        listItem.appendChild(editBtn)

        taskList.appendChild(listItem)
        inputFld.value = '';
    } else {
        alert("Please enter a task")
    }
    
})

