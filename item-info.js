const form = document.getElementById('form'); 
const kind = document.getElementById('kind'); 
const weight= document.getElementById('weight'); 
const quantity= document.getElementById('quantity'); 

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
    const kindValue =kind.value.trim();
    const weightValue =weight.value.trim();
    const quantityValue =quantity.value.trim();
    let messages =[]
    if(kindValue=== ''){
       
        setError(kind, 'Type of item is required');
        
    }else{
        setSuccess(kind);
        messages[0]=1;
    }
    if(weightValue=== ''){
      
        setError(weight, 'weight of item is required');
    }else{
        setSuccess(weight);
        messages[1]=1;
    }
    if(quantityValue=== ''){
      
        setError(quantity, 'Number of item is required');
    }else{
        setSuccess(quantity);
        messages[2]=1;
    }

   let i=0;
 if(messages[i]== 1 && messages[i+1]==1 && messages[i+2]== 1)
        {
           
            location.href = "delivery-form.html";
        }
    
} 




// const form = document.getElementById('form'); 
// const kind = document.getElementById('kind'); 
// const weight= document.getElementById('weight'); 
// const quantity= document.getElementById('quantity'); 
// const errorElement = document.getElementById('error')

// form.addEventListener('submit',(e)=>{
//     let messages = []
//     if(kindValue=== ''){
//        messages.push('Type of item is required')
//     }
//     if(weightValue=== ''){
//         messages.push('weight of item is required')
//      }
//      if(quantityValue=== ''){
//         messages.push( 'Number of item is required')
//      }
//      if (messages.length >0){
//         e.preventDefault()
//         errorElement.innerText = messages.join(', ')
//      }
// })