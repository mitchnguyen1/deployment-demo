const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/pubic`))
app.listen(4000, () => console.log(`server running on 4000`))
