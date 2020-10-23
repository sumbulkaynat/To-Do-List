const express = require('express');
const path = require('path');
const port = 5000;

const db = require('./config/mongoose');
const Task = require('./models/task');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var taskList = [
    {
        task : 'To do homework',
        deadline : '2020-11-20',
        category : 'school'
    },
    {
        task : 'To go jogging',
        deadline : '2020-10-19' ,
        category : 'personal'
    }
];


app.get('/',function(req,res){
   
    //to fetch data from data base 
   Task.find({/*name : "new "*/}, function(err,task){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }

        return res.render('home', {
            title : "Dynamic title!",
            task_list: task
        });

    });
});

app.post('/create-task',function(req,res){
    // console.log(req.body);
    // taskList.push(req.body);

    Task.create(req.body , function(err, newTask){
        if(err){
            console.log('error in creating a contact!');
            return;
        }

        //console.log('*********', newTask);
        return res.redirect('back');
    })
    
});

app.post('/delete-task',function(req,res){
    //console.log(req.body.done);

    var id = req.body.done;
    
    //console.log(id);

    for(let i of id){
        //console.log(i);
        Task.findByIdAndDelete(i,function(err){
            if(err){
                console.log('error in deleting object from database');
                return;
            }
        });
    }

    return res.redirect('back');
});

app.listen(port,function(err){
    if(err){
        console.log('Error in running the server : ',err);
    }

    console.log('Yup! Server is running on port : ',port);
});