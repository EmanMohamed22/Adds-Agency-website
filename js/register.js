let form =document.getElementById('form')
let nameInput =document.getElementById('name');
let phoneInput =document.getElementById('phone');
let cityInput =document.getElementById('city');
let workInput =document.getElementById('work-title');
let passwordInput =document.getElementById('password');
let nameError =document.getElementById('name-error');

 form.addEventListener('submit',(e)=>{
    e.preventDefault()
     console.log(nameInput.value);
     if (nameInput.value) {
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
        nameError.innerText=''

     } else {
        nameInput.classList.remove('is-valid');
        nameInput.classList.add('is-invalid'); 
        nameError.innerHTML='<p class="error">gggg</p>' 
     }
 })

// function validate(){
//   return console.log('ki');
// }