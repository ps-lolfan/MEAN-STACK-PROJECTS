var express = require('express')
var app = express();
var session = require('express-session');



//Improt body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());


//rendring static content in express
app.use('/common_lib', express.static('common_lib'));



//Render user llogin page
app.get('/',function(req,res){
    res.sendFile(__dirname + '/loginpage.html');
});



//session expamle
app.use(session(
    {
        secret: '123456'
    }
));




app.get('/success',function(req,res){
    //res.end('<h1 align="center"> Login Successful '+req.session.user + '!</h1>');
    res.sendFile(__dirname + '/homepage.html');
});


//validate user
app.post('/',function(req,res){
    var username = req.body.username;
    var password = req.body.password;

    var un = 'pinku';
    var pw = 'pinku';

    if (username === un && password === pw){
        console.log('Entered username and Passsword is '+username + '&'+password);
        req.session.user = username;
        return res.redirect('/success');
    }else{
        return res.redirect('/');
    }

});



app.listen(3000,function(){
    console.log('Server started at 3000');
});