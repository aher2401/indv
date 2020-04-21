function validateEmail() {
        var email = document.getElementById('email').value;
        if( email==null || email=="")
    	{
    	alert("Please input an email address");
    	}
     }

    	function validateLName() {
    
        var lastname = document.getElementById('lastname').value;
        if( lastname==null || lastname=="")
    	{
    	alert("Please input a last name");
    	}
     }



/* verify lastname entered */
/*function validateLName() {
try {
var lastName = document.getElementById("lName");
if (lastName.value === "") {
throw "Please enter your last name.";
}
}
catch(lNameError) {
window.alert(lNameError)
return false;
}
finally {
lNameValid = true;
}
	return true;
}
*/