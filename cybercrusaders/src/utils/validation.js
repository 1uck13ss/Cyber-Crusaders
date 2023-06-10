export const validateSignupForm = (formData) => {
    const { name, user, pass, confirmpass, mobileNumber, emails } = formData;
    const errors = {};
  
    if (name.trim() === "") {
      errors.name = "Please fill the Name field";
    }
  
    if (emails.trim() === "") {
      errors.emails = "Please fill the email id field";
    } else if (emails.indexOf("@") <= 0) {
      errors.emails = "Invalid Email";
    } else if (
      emails.charAt(emails.length - 4) !== "." &&
      emails.charAt(emails.length - 3) !== "."
    ) {
      errors.emails = "Invalid Email";
    }
  
    if (user.trim() === "") {
      errors.user = "Please fill the username field";
    } else if (user.length <= 3 || user.length > 20) {
      errors.user = "Username length must be between 3 and 20";
    } else if (!isNaN(user)) {
      errors.user = "Only characters are allowed";
    }
  
    if (pass === "") {
      errors.pass = "Please fill the password field";
    } else if (pass.length <= 5 || pass.length > 20) {
      errors.pass = "Passwords length must be between 5 and 20";
    }
  
    if (pass !== confirmpass) {
      errors.confirmpass = "Password Mismatch";
    }
  
    if (confirmpass === "") {
      errors.confirmpass = "Please fill the confirm password field";
    }
  
    if (mobileNumber.trim() === "") {
      errors.mobileNumber = "Please fill the mobile Number field";
    } else if (isNaN(mobileNumber)) {
      errors.mobileNumber = "User must write digits only, not characters";
    } else if (mobileNumber.length !== 11) {
      errors.mobileNumber = "Mobile Number must be 11 digits only";
    }
  
    return errors;
  };
  
  export const validateLoginForm = (formData) => {
    const { user, pass } = formData;
    const errors = {};
  
    if (user.trim() === "") {
      errors.user = "Please fill the username field";
    } else if (user.length <= 2 || user.length > 20) {
      errors.user = "Username length must be between 2 and 20";
    } else if (!isNaN(user)) {
      errors.user = "Only characters are allowed";
    }
  
    if (pass === "") {
      errors.pass = "Please fill the password field";
    } else if (pass.length <= 5 || pass.length > 20) {
      errors.pass = "Passwords length must be between 5 and 20";
    }
  
    return errors;
  };
  