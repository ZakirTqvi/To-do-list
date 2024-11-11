const inputFld = document.getElementById('inputFiled')
const addBtn = document.getElementById('addButton')

addBtn.addEventListener('click', ()=>{
    const inputValue = inputFld.value.trim()
    console.log(inputValue)
})

