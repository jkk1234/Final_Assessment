
// jshint esversion:6

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const password2 = document.getElementById('password2');
const age = document.getElementById('age');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const graduated = document.getElementById('graduated');
const currently = document.getElementById('currently');
const didnot = document.getElementById('didnot');

form.addEventListener('submit',  (e) =>{
  e.preventDefault();

  checkInputs();
});

function checkInputs(){

  // const alphabets = (/^[A-Za-z]+$/) ;
 var lowerCaseLetters = /[a-z]/g;
 var upperCaseLetters = /[A-Z]/g;
   var numbers = /[0-9]/g;

   const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const password2Value = password2.value.trim();
   const firstNameValue = firstName.value.trim();
   const lastNameValue = lastName.value.trim();
   const ageValue = age.value.trim();
   const graduatedValue = graduated.value.trim();
   const currentlyValue = currently.value.trim();
   const didnotValue = didnot.value.trim();

   if(usernameValue === ''){
     setErrorFor(username , 'Username cannot be blank');
   } else if (usernameValue.length < 6){
     setErrorFor(username , 'Username must have atleast 6 characters');
   } else {
     setSuccessFor(username);
   }

   if (emailValue === '') {
     setErrorFor(email , 'Email cannot be blank');
   }   else if (!isEmail(emailValue)){
     setErrorFor(email , 'Email is not valid');

    } else {
     setSuccessFor(email);
   }

 if(passwordValue === ''){
     setErrorFor(password , 'Password cannot be blank');
   } else if (passwordValue.length < 6 || !passwordValue.match(numbers) || !passwordValue.match(upperCaseLetters) || passwordValue.charAt(0) != passwordValue.charAt(0).match(lowerCaseLetters)){
    setErrorFor(password , 'Must start with alphabet and have atleast 6 characters, a number and an upper case letter');
  } else {
     setSuccessFor(password);
   }




   if(password2Value === ''){
     setErrorFor(password2 , 'Password cannot be blank');
   } else if (passwordValue.length < 6 || !passwordValue.match(numbers) || !passwordValue.match(upperCaseLetters) || passwordValue.charAt(0) != passwordValue.charAt(0).match(lowerCaseLetters)){
    setErrorFor(password , 'Password do not match');
  } else if (passwordValue !== password2Value){
     setErrorFor(password2 , 'Password do not match');
   } else {
     setSuccessFor(password2);
   }

   if(firstNameValue === ''){
     setErrorFor(firstName , 'Name cannot be blank');
   }  else if(firstNameValue.charAt(0) !== firstNameValue.charAt(0).toUpperCase()){
     setErrorFor(firstName , 'Name should start with capital letter');
   } else {
     setSuccessFor(firstName);
   }

   if(lastNameValue === ''){
     setErrorFor(lastName , 'Name cannot be blank');
   } else if(lastNameValue.charAt(0) !== lastNameValue.charAt(0).toUpperCase()){
     setErrorFor(lastName , 'Name should start with capital letter');
   } else {
     setSuccessFor(lastName);
   }

   if(ageValue === ''){
     setErrorFor(age , 'Age cannot be blank');
   } else if (ageValue < 18 || ageValue >60){
     setErrorFor(age , 'Age must be between 18 and 60');
   } else {
     setSuccessFor(age);
   }

//    if (graduatedValue || currentlyValue || didnotValue == radio) {
//      setRadioError( didnot , 'Fill atleast one');
//    } else {
//
//    }
//
 }







function setErrorFor(input , message){
   const formControl = input.parentElement;
   const small = formControl.querySelector('small');

  small.innerText = message;
  formControl.className = 'form-control error';
}


function setSuccessFor(input){
   const formControl = input.parentElement;
   formControl.className = 'form-control success';

}

function isEmail(email){
      return   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}



// function setRadioError(input , message){
//   const formControl = input.parentElement;
//   const small = formControl.querySelector('small');
//
//  small.innerText = message;
//  formControl.className = 'radio error';
// }
