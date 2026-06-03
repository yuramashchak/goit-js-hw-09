const STORAGE_KEY = 'feedback-form-state';

const formData = {
    email: "", 
    message: ""
}

const fullForm = document.querySelector('.feedback-form');

const typeForm = fullForm.addEventListener('input', ()=>{
    formData.email = fullForm.elements.email.value;
    formData.message = fullForm.elements.message.value;

    saveToLs(STORAGE_KEY, formData);

})

        

document.addEventListener('DOMContentLoaded', ()=>{
    const savedData = loadFromLs(STORAGE_KEY);
    fullForm.elements.email.value = savedData?.email || '';
    fullForm.elements.message.value = savedData?.message || '';

    formData.email = savedData?.email || '';
    formData.message = savedData?.message || '';
})

const submitForm = fullForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(formData.email.trim() === '' || formData.message.trim() === ''){
        alert('Fill please all fields');
        return;
    }


    console.log(formData);
    formData.email = '';
    formData.message = '';
   localStorage.removeItem(STORAGE_KEY)
   fullForm.reset();

})


function saveToLs(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
};

function loadFromLs(key) {
    const json = localStorage.getItem(key);
    try {
        const data = JSON.parse(json);
         return data;
    } catch {
        return json;
    }
};