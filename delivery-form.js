const form = document.getElementById('form'); 
const city = document.getElementById('city'); 
const addressT= document.getElementById('addressT'); 
const zip= document.getElementById('zip');
const cityT = document.getElementById('cityT'); 
const addressF= document.getElementById('addressF'); 
const zipT= document.getElementById('zipT'); 
const date= document.getElementById('date'); 
const nameO= document.getElementById('nameO'); 
const phoneO= document.getElementById('phoneO'); 
const nameT = document.getElementById('nameT'); 
const phoneT= document.getElementById('phoneT'); 
 

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
    const cityValue =city.value.trim();
    const addressTValue =addressT.value.trim();
    const cityTValue =cityT.value.trim();
    const zipValue =zip.value.trim();
    const addressFValue =addressF.value.trim();
    const zipTValue =zipT.value.trim();
    const dateValue =date.value.trim();
    const nameOValue =nameO.value.trim();
    const phoneOValue =phoneO.value.trim();
    const nameTValue =nameT.value.trim();
    const phoneTValue =phoneT.value.trim();

    let messages =[]
    if(cityValue=== ''){
       
        setError(city, 'City is required');
      
        
    }else{
        setSuccess(city);
        messages[0]=1;
    }
  
    if(addressTValue=== ''){
      
        setError(addressT, 'Address is required');
    }else{
        setSuccess(addressT,);
        messages[1]=1;
    }
    if(cityTValue === ''){
      
        setError(cityT, 'City is required');
    }else{
        setSuccess(cityT);
        messages[2]=1;
    }
    if(zipValue=== ''){
       
        setError(zip, 'Zip is required');
        
    }else{
        setSuccess(zip);
        messages[3]=1;
    }
    if(addressFValue=== ''){
      
        setError(addressF, 'Address is required');
    }else{
        setSuccess(addressF);
        messages[4]=1;
    }
    if(zipTValue === ''){
      
        setError(zipT, 'zip is required');
    }else{
        setSuccess(zipT);
        messages[5]=1;
    }
    if(dateValue === ''){
       
        setError(date, 'Date is required');
        
    }else{
        setSuccess(date);
        messages[6]=1;
    }
    if(nameOValue === ''){
      
        setError(nameO, 'Name is required');
    }else{
        setSuccess(nameO);
        messages[7]=1;
    }
    if(phoneOValue === ''){
      
        setError(phoneO, 'phone is required');
    }else{
        setSuccess(phoneO);
        messages[8]=1;
    }
    if(nameTValue=== ''){
       
        setError(nameT, 'Name is required');
        
    }else{
        setSuccess(nameT);
        messages[9]=1;
    }
    if( phoneTValue=== ''){
      
        setError( phoneT, 'Phone of item is required');
    }else{
        setSuccess( phoneT);
        messages[10]=1;
    }
    

   let i=0;
 if(messages[i]== 1 && messages[i+1]==1 && messages[i+2]== 1
     && messages[i+3]== 1 && messages[i+4]==1 && messages[i+5]== 1 
     && messages[i+6]== 1 && messages[i+7]==1 && messages[i+8]== 1 &&
      messages[i+9]== 1 && messages[i+10]==1)
        {
           
            location.href = "validation.html";
        }
    

    }