var express = require('express')
var app = express()
var port = process.env.PORT || 4000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function(req, res){
  res.render('home')
})


app.listen(port,process.env.IP,function(){
  console.log('server is running')
})