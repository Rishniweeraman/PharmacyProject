var express=require('express');
var bodyparser=require('body-parser');
var mongoose=require('mongoose');

var app=express();
//var app=express(express.static(__dirname+'/client'));

//connecting client
app.use(express.static(__dirname+'/client'));

/*
app.use(function (req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Content-Type,Authorization");
    next();
})
*/
//app.use();
app.use(bodyparser.json());

//Genre=require('./models/genre');
Drug=require('./models/drug');
Supplier=require('./models/supplier');
Email=require('./models/email');

//connect to mongoose
mongoose.connect('mongodb://code_girls:code_girls123@ds141242.mlab.com:41242/pharmacy');

var db=mongoose.connection;

app.get('/',function (req,res) {
    res.send('please use /api/drugs or /api/genres');
});

/*
app.get('/api/genres',function (req,res) {
    Genre.getGenres(function (err,genres) {
        if(err)
        {
            throw err;
        }
        res.json(genres);
    });
});

app.post('/api/genres',function (req,res) {
    var genre=req.body;
    Genre.addGenre(genre,function (err,genre) {
        if(err)
        {
            throw err;
        }
        res.json(genre);
    });
});


app.put('/api/genres/:_id',function (req,res) {
    var id=req.params._id;
    var genre=req.body;
    Genre.updateGenre(id,genre,{},function (err,genre) {
        if(err)
        {
            throw err;
        }
        res.json(genre);
    });
});


app.delete('/api/genres/:_id',function (req,res) {
    var id=req.params._id;
    Genre.deleteGenre(id,function (err,genre) {
        if(err)
        {
            throw err;
        }
        res.json(genre);
    });
});

*/

//drug

app.get('/api/drug/:category',function (req,res) {
    Drug.getDrugsByCategory(req.params.category,function (err,drugs) {
        if(err)
        {
            throw err;
        }
        res.json(drugs);
    });
});

app.get('/api/drugs',function (req,res) {
    Drug.getDrugs(function (err,drugs) {
        if(err)
        {
            throw err;
        }
        res.json(drugs);
    });
});

app.get('/api/drugs/:_id',function (req,res) {
    Drug.getDrugById(req.params._id,function (err,drug) {
        if(err)
        {
            throw err;
        }
        res.json(drug);
    });
});



app.post('/api/drugs',function (req,res) {
    var drug=req.body;
    Drug.addDrug(drug,function (err,drug) {
        if(err)
        {
            throw err;
        }
        res.json(drug);
    });
});



app.put('/api/drugs/:_id',function (req,res) {
    var id=req.params._id;
    var drug=req.body;
    Drug.updateDrug(id,drug,{},function (err,drug) {
        if(err)
        {
            throw err;
        }
        res.json(drug);
    });
});

app.delete('/api/drugs/:_id',function (req,res) {
    var id=req.params._id;
    Drug.deleteDrug(id,function (err,drug) {
        if(err)
        {
            throw err;
        }
        res.json(drug);
    });
});

//supplier
app.get('/api/suppliers',function (req,res) {
    Drug.getSuppliers(function (err,suppliers) {
        if(err)
        {
            throw err;
        }
        res.json(suppliers);
    });
});

app.get('/api/suppliers/:_id',function (req,res) {
    Drug.getSupplierById(req.params._id,function (err,supplier) {
        if(err)
        {
            throw err;
        }
        res.json(supplier);
    });
});

app.get('/api/suppliers/:category',function (req,res) {
    Drug.getSupplierByCategory(req.params.category,function (err,supplier) {
        if(err)
        {
            throw err;
        }
        res.json(supplier);
    });
});


app.post('/api/suppliers',function (req,res) {
    var supplier=req.body;
    Drug.addSupplier(supplier,function (err,supplier) {
        if(err)
        {
            throw err;
        }
        res.json(supplier);
    });
});



app.put('/api/suppliers/:_id',function (req,res) {
    var id=req.params._id;
    var supplier=req.body;
    Drug.updateSupplier(id,supplier,{},function (err,supplier) {
        if(err)
        {
            throw err;
        }
        res.json(supplier);
    });
});

app.delete('/api/suppliers/:_id',function (req,res) {
    var id=req.params._id;
    Drug.deleteSupplier(id,function (err,supplier) {
        if(err)
        {
            throw err;
        }
        res.json(supplier);
    });
});


//email

app.get('/api/emails',function (req,res) {
    Email.getEmails(function (err,emails) {
        if(err)
        {
            throw err;
           // console.log("error here");
        }
        res.json(emails);
    });
});
/*

var fs=require('fs');
//var config=JSON.parse(fs.readFileSync("config.json"));

var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport({
    service:'gmail',
    secure:false,
    port:25,
    auth:{
        user:'digitalPulzPharmacy@gmail.com',
        pass:'123code_girls'
    },
    tls:{
        rejectUnauthorized:false
    }
});



transporter.sendMail(HelperOptions,(error,info)=>{
    if(error)
    {
        return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);


    app.post('/api/emails',function (req,res) {

        //var email=req.body;
        transporter.sendMail(HelperOptions,function (err,email) {
            if(err)
            {
                throw err;
            }
            res.json(email);
        });
    });


});
     */

app.post('/api/emails',function (req,res) {
    var email=req.body;
    Email.sendMail(email,function (err,email) {
        if(err)
        {
            throw err;
        }
        res.json(email);
    });
});

app.listen(3000);

console.log('Running on port 3000...');