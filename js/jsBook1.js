function validatePW(){

	var p1 = document.signup.passw.value; 
	var p2 = document.signup.confirmpassw.value;
	var p3 = document.login.pass.value;
	
	if (p1 < 5) {
		alert("Password must be at least 5 characters.");  
		return false; 
	}
	if (p1 != p2 ) {  
		alert("Password must be the same!");  
		return false;  
	}
	if (p3 < 5) {
		alert("Password must be at least 5 characters.");  
		return false; 
	}
}