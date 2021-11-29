const profiles = require('./db.json');
let globalId = 4


// navigator.geolocation.getCurrentPosition(position => {
//     const { latitude, longitude } = position.coords;
//     // Show a map centered at latitude / longitude.
//   });

let users = [user1, user2, user3]

module.exports = {
  createUser: (req, res) => {
    userDatabase.push(req.body)
    res.status(200).send('User successfully added.')
  },
  updateUser: (req, res) => {
    let existingUsername  = req.params.username
    let newUsername = req.body.username
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === existingUsername) {
        user[i].username = newUsername
        res.status(200).send("User updated.")
        return
      }
    }
    res.status(400).send("User not found.")
  }
}