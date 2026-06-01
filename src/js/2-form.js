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
    fullForm.elements.email.value = savedData?.email;
    fullForm.elements.message.value = savedData?.message;
})

const submitForm = fullForm.addEventListener('submit', ()=>{
    if(formData.email === null || formData.message === null){

    }
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