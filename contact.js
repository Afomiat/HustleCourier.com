const form = document.getElementById('form'); 
const nameF = document.getElementById('nameF'); 
const email= document.getElementById('email'); 
const message= document.getElementById('message'); 

form.addEventListener('submit',e=>{
   e.preventDefault()
    validateInputs();
});

const setError= (element,message)=>{
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector('.error');

    errorDisplay.innerText =message;
    inputcontrol .classList.add('error');
    inputcontrol .classList.remove('success');

};
const setSuccess= element=>{
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector('.error');

    errorDisplay.innerText ='';
    inputcontrol .classList.add('success');
    inputcontrol .classList.remove('error');

};
const validateInputs= ()=>{
    const nameFValue =nameF.value.trim();
    const emailValue =email.value.trim();
    const messageValue =message.value.trim();
    let messages =[]
    if(nameFValue=== ''){
       
        setError(nameF, 'Full name is required');
        
    }else{
        setSuccess(nameF);
        messages[0]=1;
    }
    if(emailValue=== ''){
      
        setError(email, 'Email is required');
    }else{
        setSuccess(email);
        messages[1]=1;
    }
    if(messageValue=== ''){
      
        setError(message, '');
    }else{
        setSuccess(message);
        messages[2]=1;
    }

   let i=0;
 if(messages[i]== 1 && messages[i+1]==1 && messages[i+2]== 1)
        {
           
            location.href = "index.html";
        }
    
} 