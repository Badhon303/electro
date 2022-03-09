const express = require("express")
const path = require("path")
// var cors = require("cors")

const port = 3000
const app = express()

const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath))

// app.use(express.json())
// app.use(
//   cors({
//     origin: "*",
//   })
// )

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`)
})
