const express = require("express")
const app = express()
const PORT = 3000
const photoRouters = require("./routers/photoRouters")
const userRouters = require("./routers/userRouters")

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use("/photos", photoRouters) 
app.use("/users", userRouters)

app.listen(PORT, () => {
  console.log("App running on port: ", PORT);
})