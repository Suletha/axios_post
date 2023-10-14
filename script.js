// Initialize an empty array to store user details
const users = [];

// Function to retrieve user data from local storage and display it
function displayUserDetails() {
    const userDetailsDiv = document.getElementById("userDetails");
    userDetailsDiv.innerHTML = '';

    // Retrieve user data from local storage
    const storedData = localStorage.getItem("userDetails");

    if (storedData) {
        const storedUsers = JSON.parse(storedData);
        storedUsers.forEach((user, index) => {
            userDetailsDiv.innerHTML += `
                <div class="user-details">
                    <h2>User ${index + 1} Details:</h2>
                    <p>Name: ${user.name}</p>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                    <button class="edit-button" onclick="editUser(${index})">Edit</button>
                    <button class="delete-button" onclick="deleteUser(${index})">Delete</button>
                </div>
            `;
        });
    }
}

// Call the function to display user details when the page loads
displayUserDetails();

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

    // Make a POST request to save user data
    axios.post("https://crudcrud.com/api/190462e5a3844a8c8433309bdf58123b/Appointment_data", user)
        .then((response) => {
            console.log(response);
            users.push(user); // Add the user to the local array
            displayUserDetails(); // Display updated user details
        })
        .catch((error) => {
            console.log(error);
        });
});

// Function to edit a user
function editUser(index) {
    // Implement your logic to edit the user data, e.g., opening a form with pre-filled data.
    // You can access the user data using the users array and the index.
    // Update the UI as needed.
}

// Function to delete a user
function deleteUser(index) {
    // Remove the user from the users array.
    users.splice(index, 1);
    // Save the updated user array to local storage
    localStorage.setItem("userDetails", JSON.stringify(users));
    // Redisplay the user details to reflect the deletion.
    displayUserDetails();
}
