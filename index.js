const express = require('express'); // Express framework for building web applications
const app = express(); // Initialize an Express application
const userModel = require('./setup'); // Import the user model (assuming it's set up with Mongoose)

app.get('/', (req, res) => {
    // Sends a basic "Hello world" message as the response
    res.send("Hello world");
});

// Create a new user
app.get('/create', async (req, res) => {
    try {
        // Create a new user document in the database
        let createdUser = await userModel.create({
            username: "mam", // Username for the user
            name: "John Doe", // Full name of the user
            email: "akd@gmail.com" // Email address of the user
        });

        // Send the created user as the response
        res.send(createdUser);
    } catch (error) {
        // Handle any errors during creation
        res.status(500).send({ message: "Error creating user", error });
    }
});

// Read all users or a single user
app.get('/read', async (req, res) => {
    try {
        // Use find() to fetch all users; findOne({}) can be used to fetch a single user
        let userRead = await userModel.find();

        // Notes:
        // - find() returns an array of user documents
        // - findOne({}) returns a single user document that matches the query

        // Send the fetched users as the response
        res.send(userRead);
    } catch (error) {
        // Handle any errors during reading
        res.status(500).send({ message: "Error reading users", error });
    }
});

// Update a user
app.get('/update', async (req, res) => {
    try {
        // Update a user document with the specified condition
        let updatedUser = await userModel.findOneAndUpdate(
            { name: "John Doe" }, // Find a user with the name "John Doe"
            { username: "Malan" }, // Update the username to "Malan"
            { new: true } // Return the updated document instead of the original
        );

        // Notes:
        // - findOneAndUpdate() updates a single document that matches the condition
        // - The { new: true } option ensures the updated document is returned

        // Send the updated user as the response
        res.send(updatedUser);
    } catch (error) {
        // Handle any errors during updating
        res.status(500).send({ message: "Error updating user", error });
    }
});

// Delete a user
app.get('/delete', async (req, res) => {
    try {
        // Delete a user document with the specified condition
        let deletedUser = await userModel.findOneAndDelete({ name: "John Doe" });

        // Notes:
        // - findOneAndDelete() deletes a single document that matches the condition
        // - It returns the deleted document if the operation is successful

        // Send the deleted user as the response
        res.send(deletedUser);
    } catch (error) {
        // Handle any errors during deletion
        res.status(500).send({ message: "Error deleting user", error });
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
