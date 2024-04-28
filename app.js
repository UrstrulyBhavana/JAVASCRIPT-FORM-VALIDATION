const Form = document.getElementById("myform")

const Password = document.getElementById("mypassword")
const ConfirmPassword = document.getElementById("confirmpassword")

const Hesitate = document.getElementById("hesitate")

Form.addEventListener("submit", function(event)
{
    //We need to write the logic to check whether password and confirm password is
    // matching or not

    event.preventDefault()

    isPasswordMatched = false

    if(Password.value == ConfirmPassword.value)
    {
        isPasswordMatched = true
        //Password Match
        Hesitate.innerText = "PASSWORD'S MATCH"

        //Logic to get all the details
        const data = {
            fullname: event.target[0].value,
            phonenumber: event.target[1].value,
            email: event.target[2].value,
            url: event.target[3].value,
            password: event.target[4].value,
            confirmpassword: event.target[5].value,
        }

        console.log(data)
    }
    else
    {
        isPasswordMatched = false
        //Password Do Not Match
        Hesitate.innerText = "PASSWORD's DONT MATCH"
    }



})