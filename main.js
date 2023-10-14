// Initialize an empty array to store user details
const users = [];

// Function to handle form submission
document.getElementById("submitButton").addEventListener("click", function () {
    // Get user details from input fields
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;

    // Create a user object
    const user = {
        name: name,
        email: email,
        phone: phone,
    };
    //window.addEventListener("DOMContentLoaded", () =>{
        axios.post("https://crudcrud.com/api/190462e5a3844a8c8433309bdf58123b/Appointment_data",user)
        .then((response) => {
            console.log(response) 
            for(var i=0; i<response.data.length;i++){
                showNewUserOnScreen(response.data[i])
            }
        })
        .catch((error) =>{
            console.log(error)

        })

    //})
    

    
    // Add the user object to the array
    users.push(user);

    // Save the updated user array to local storage
    //localStorage.setItem("userDetails", JSON.stringify(users));
 
    // Display all user details on the screen
    const userDetailsDiv = document.getElementById("userDetails");
    userDetailsDiv.innerHTML = '';

    users.forEach((user, index) => {
        userDetailsDiv.innerHTML += `
            <h2>User ${index + 1} Details:</h2>
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
        `;
    });
});
displayUserDetails();