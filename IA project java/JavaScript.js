/////////////////////////////////////////////change the background color style of singup form/////////////////////////////////////////////
function focusFunction() {
  // Focus = Changes the background color of input to yellow
document.getElementById("Semail").style.background = "#ffffab";
}
function blurFunction() {
  // No focus = Changes the background color of input to white
  document.getElementById("Semail").style.background = "white";
}
function focusFunction1() {
  // Focus = Changes the background color of input to yellow
document.getElementById("Spas").style.background = "#ffffab";
}
function blurFunction1() {
  // No focus = Changes the background color of input to white
  document.getElementById("Spas").style.background = "white";
}
function focusFunction2() {
  // Focus = Changes the background color of input to yellow
document.getElementById("SRpas").style.background = "#ffffab";
}
function blurFunction2() {
  // No focus = Changes the background color of input to white
  document.getElementById("SRpas").style.background = "white";
}


/////////////////////////////////////////////change the background color style of login form/////////////////////////////////////////////
function focusFunction3() {
  // Focus = Changes the background color of input to yellow
document.getElementById("Lname").style.background = "#ffffab";
}
function blurFunction3() {
  // No focus = Changes the background color of input to white
  document.getElementById("Lname").style.background = "white";
}
function focusFunction4() {
  // Focus = Changes the background color of input to yellow
document.getElementById("Lpas").style.background = "#ffffab";
}
function blurFunction4() {
  // No focus = Changes the background color of input to white
  document.getElementById("Lpas").style.background = "white";
}


/////////////////////////////////////////////change the background color style of contact form/////////////////////////////////////////////
function focusFunction5() {
  // Focus = Changes the background color of input to yellow
document.getElementById("fname").style.background = "#ffffab";
}
function blurFunction5() {
  // No focus = Changes the background color of input to white
  document.getElementById("fname").style.background = "white"; 
}
function focusFunction6() {
  // Focus = Changes the background color of input to yellow
document.getElementById("lname").style.background = "#ffffab";
}
function blurFunction6(){
  // No focus = Changes the background color of input to white
  document.getElementById("lname").style.background = "white";
}
function focusFunction7() {
  // Focus = Changes the background color of input to yellow
document.getElementById("mail").style.background = "#ffffab";
}
function blurFunction7(){
  // No focus = Changes the background color of input to white
  document.getElementById("mail").style.background = "white";
}
function focusFunction8() {
  // Focus = Changes the background color of input to yellow
document.getElementById("topics").style.background = "#ffffab";
}
function blurFunction8(){
  // No focus = Changes the background color of input to white
  document.getElementById("topics").style.background = "white";
}
function focusFunction9() {
  // Focus = Changes the background color of input to yellow
document.getElementById("subject").style.background = "#ffffab";
}
function blurFunction9(){
  // No focus = Changes the background color of input to white
  document.getElementById("subject").style.background = "white";
}



/////////////////////////////////////////////////////Check login input form is not empty ///////////////////////////////////////////// 
   function test(){
	   //Check that the user name field is not empty 
if(document.getElementById("Lname").value==""){
					//if is empty show this error message 
                document.getElementById("EMN").innerHTML="  plase fill input fields !!";
					// the outline of input will be red 
                document.getElementById("Lname").style.outline = "2px solid red";
					// if ther error message in password will be none 
                document.getElementById("EMP").innerHTML=" ";
					// if outline of password input red will be none
                document.getElementById("Lpas").style.outline = " none"
				    // return false to not submit before check other input 
                return false;
}else if(document.getElementById("Lpas").value==""){//Check that the user password field is not empty 
				    //if is empty show this error message
                document.getElementById("EMP").innerHTML="  plase fill input fields !!";
				   // the outline of input will be red 
                document.getElementById("Lpas").style.outline = "2px solid red";
				   // if ther error message in name will be none 
                document.getElementById("EMN").innerHTML=" ";
				   // if outline of name input red will be none
                document.getElementById("Lname").style.outline = " none"; 
			      // return false to not submit before check other input 				
                return false;
}else{
				// If both the user name and password are not empty this message will appear with green color  
                document.getElementById("EMN").innerHTML="the form data is submitted successfully!! plase click login";
                document.getElementById("EMN").style.color="green"
				// all name and password outline will be green color 
                document.getElementById("Lpas").style.outline = "2px solid green";
                document.getElementById("EMP").innerHTML=" ";
                document.getElementById("Lname").style.outline = " 2px solid green";
                        return false;
        }

}
///to not log in before check 
function submL(){
	if (document.getElementById("Lpas").value==""||document.getElementById("Lname").value==""){
		 document.getElementById("EMSL").innerHTML="plase fill all input fields and click check before singup !!";
		 return false;
}else {
	document.getElementById('id02').style.display='none';
}	
}

/////////////////////////////////////////////////////Check singup input form is not empty /////////////////////////////////////////////
function test2(){
        var num = /[0-9]/   //RegExp of number 
		
		//Check that the user emil field is not empty 
        if(document.getElementById("Semail").value==""){       
                document.getElementById("EME").innerHTML="  plase fill input fields !!";//error message with red color 
                document.getElementById("EMPP").innerHTML=" ";//send none message 
                document.getElementById("EMRP").innerHTML=" ";//send none message 
                document.getElementById("Spas").style.outline = "none";//send none outline
                document.getElementById("Semail").style.outline = "2px solid red";//send red outline
                document.getElementById("SRpas").style.outline = "none";//send none outline
                return false;
		//Check that the user password field is not empty 
        }else if (document.getElementById("Spas").value==""){
                document.getElementById("EME").innerHTML=" ";//send none message 
                document.getElementById("EMPP").innerHTML="  plase fill input fields !!";//error message with red color 
                document.getElementById("EMRP").innerHTML="";//send none message 
                document.getElementById("Spas").style.outline = "2px solid red";//send red outline
                document.getElementById("Semail").style.outline = "none";//send none outline
                document.getElementById("SRpas").style.outline = "none";//send none outline
                return false;
		//Check that the user Rpassword field is not empty 
        }else if(document.getElementById("SRpas").value==""){   
                document.getElementById("EME").innerHTML=" ";//send none message 
                document.getElementById("EMPP").innerHTML=" ";//send none message 
                document.getElementById("EMRP").innerHTML="  plase fill input fields !!";//error message with red color 
                document.getElementById("Spas").style.outline = "none";//send none outline
                document.getElementById("Semail").style.outline = "none";//send none outline
                document.getElementById("SRpas").style.outline = "2px solid red";//send red outline
                return false;
		//Check that the user emil field includes @ or not  
    }else if (document.getElementById("Semail").value.includes("@")!=true){
        document.getElementById("EME").innerHTML="  valid email the emil most includes @ plase try agin!! ";//error message with red color 
        document.getElementById("EMPP").innerHTML=" ";//send none message 
        document.getElementById("EMRP").innerHTML=" ";//send none message 
        document.getElementById("Spas").style.outline = "none";//send none outline
        document.getElementById("Semail").style.outline = "2px solid red";//send red outline
        document.getElementById("SRpas").style.outline = "none";//send none outline
                return false;
		//Check that the user password field includes number or not 
        }else if (document.getElementById("Spas").value.match(num)!=true){
        document.getElementById("EMPP").innerHTML=" valid password the Password must includes a number plase try agin!!";//error message with red color 
        document.getElementById("EMRP").innerHTML=" ";//send none message 
        document.getElementById("EME").innerHTML=" ";//send none message 
        document.getElementById("Semail").style.outline = "none";//send none outline
        document.getElementById("Spas").style.outline = "2px solid red";//send red outline
        document.getElementById("SRpas").style.outline = "none";//send none outline
                return false;
		//Check that the length of user password field not less than 8 
        }else if (document.getElementById("Spas").value.length<8){
        document.getElementById("EMPP").innerHTML="  valid password the Password must by grad than 8 plase try agin!!";//error message with red color 
        document.getElementById("EMRP").innerHTML=" ";//send none message 
        document.getElementById("EME").innerHTML=" ";//send none message 
         document.getElementById("Semail").style.outline = "none";//send none outline
        document.getElementById("Spas").style.outline = "2px solid red";//send red outline
        document.getElementById("SRpas").style.outline = "none";//send none outline
                return false;
		//Check that the password and Rpassword are same  
        }else if(document.getElementById("Spas").value!=document.getElementById("SRpas").value){
        document.getElementById("EMPP").innerHTML=" valid password the Password not match plase try agin !!";//error message with red color 
        document.getElementById("EMRP").innerHTML=" ";//send none message 
        document.getElementById("EME").innerHTML=" ";//send none message 
        document.getElementById("Semail").style.outline = "none";//send none outline
        document.getElementById("Spas").style.outline = "2px solid red";//send red outline
        document.getElementById("SRpas").style.outline = "2px solid red";//send red outline
                return false;
		// if all conditions true will acceptance the form 
        }else{
				// send acceptance message with green color
                document.getElementById("EME").innerHTML="  the form data is submitted successfully !! plase click singup";
                document.getElementById("EME").style.color="green";
                document.getElementById("EMPP").innerHTML=" ";//send none message 
                document.getElementById("EMRP").innerHTML=" ";//send none message 
                document.getElementById("Spas").style.outline = "2px solid green";//send green outline
                document.getElementById("Semail").style.outline = "2px solid green";//send green outline
                document.getElementById("SRpas").style.outline = "2px solid green";//send green outline
                return false;
        }

        }
		
//to not sing up before check 		
function submS(){
	if (document.getElementById("Semail").value==""||document.getElementById("Spas").value==""||document.getElementById("SRpas").value==""){
		 document.getElementById("EMSS").innerHTML="plase fill all input fields and click check before singup !!";
		 return false;
}else {
	document.getElementById('id01').style.display='none';
}	
}		
	
	
////////////////////////////////////////////////////Check contact input form is not empty /////////////////////////////////////////////		
	
	const form  = document.getElementsByTagName('form')[0];
    const email = document.getElementById('mail');
    const emailError = document.querySelector('#mail + span.error');
	const Fname= document.getElementById('fname');
	const FnameError = document.querySelector('#fname+ span.error');
	const Lname= document.getElementById('lname');
	const LnameError = document.querySelector('#lname + span.error');
	const Subject= document.getElementById('subject');
	const SubjectError = document.querySelector('#subject + span.error');
	var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/  

/////////////////first name listener	
   Fname.addEventListener('input',function(event){
   	// Each time the user types something, we check if the
      // form fields are valid.
      if (Fname.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        FnameError.innerHTML = ''; // Reset the content of the message
        FnameError.className = 'error'; // Reset the visual state of the message
	
      } else {
        // If there is still an error, show the correct error
        showErrorFname();
      }	
	})
	
/////////////////last name listener	 
	 Lname.addEventListener('input',function(event){
   	// Each time the user types something, we check if the
      // form fields are valid.
      if (Lname.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        LnameError.innerHTML = ''; // Reset the content of the message
        LnameError.className = 'error'; // Reset the visual state of the message
	
      } else {
        // If there is still an error, show the correct error
        showErrorLname();
      }	
	})
	
	 function showErrorFname() {
      if(Fname.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        FnameError.textContent = 'You need to enter your first name.';
      }else if(Fname.validity.tooShort) {
        // If the data is too short
        // display the following error message.
        FnameError.textContent = `First name should be at least ${ fname.minLength } characters; you entered ${ fname.value.length }.`;
      }
      // Set the styling appropriately
      FnameError.className = 'error active';
    
    }
	
	function showErrorLname() {
      if(Lname.validity.valueMissing) {
        // If the field is empty
        // display the following error message.
        LnameError.textContent = 'You need to enter your last name.';
      }else if(Lname.validity.tooShort) {
        // If the data is too short
        // display the following error message.
        LnameError.textContent = `Last name should be at least ${ lname.minLength } characters; you entered ${ lname.value.length }.`;
      }
      // Set the styling appropriately
      LnameError.className = 'error active';    
    }
	
	email.addEventListener('input', function (event) {
      // Each time the user types something, we check if the
      // form fields are valid.
      if (email.value=="") {
	  
	  emailError.textContent = 'Email field can not be empty';
        
      } else if (regex.test(email.value)) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailError.innerHTML = ''; // Reset the content of the message
        emailError.className = 'error'; // Reset the visual state of the message
      } else {
        // If there is still an error, show the correct error
         emailError.textContent = 'Please Enter a valid Email';
      }
    });

      Subject.addEventListener('input', function (event) {
      // Each time the user types something, we check if the
      // form fields are valid.
      if (Subject.value=="") {
	  
	  SubjectError.textContent = 'Subject field can not be empty';
        
      } else {
        SubjectError.innerHTML = ''; // Reset the content of the message
        SubjectError.className = 'error';
      }
    });
    
	form.addEventListener('submit', function (event) {
      // if the form contains valid data, we let it submit
      alert("form submited")
	  
      if(!email.validity.valid||!Fname.validity.valid||!Lname.validity.valid||!subject.validity.valid) {
        
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
      }
    });
