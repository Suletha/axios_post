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

    axios.post("https://crudcrud.com/api/df7fb11a5e624d5e9f7d329df9251dcc/user_details",users)
        .then((respone) => {
            console.log(respone)
        })
        .catch((err) =>{

        })
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
