const express = require("express")
const app = express()
const PORT = 3000
const photoRouters = require("./routers/photoRouters")
const userRouters = require("./routers/userRouters")
const authentication = require("./middlewares/authentication")

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use("/users", userRouters)

app.use(authentication)
app.use("/photos", photoRouters) 

app.listen(PORT, () => {
  console.log("App running on port: ", PORT);
})