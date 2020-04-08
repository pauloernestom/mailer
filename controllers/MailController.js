const nodemailer = require('nodemailer');

const transport = {
    host: "",
    port: ,
    auth:{
        user:"",
        pass:""
    }
}

module.exports = {
    enviar:(req,res) =>{
        
        //Criar o transporter
        const transporter = nodemailer.createTransport(transport);

        //Criando email

        const email = {
            from:"", //email
            to: req.body.dest,
            subject: req.body.subj,
            text:req.body.msg
        }

        //Enviar o email!!!

        transporter.sendMail(email, 
            (error, info) => {
                if(error){
                    console.log(error);
                    console.log(info);
                    res.send("Deu xabu!")
                }else{
                    console.log(info);
                    res.send("Deu bom")
                }
            }    
        )



    }
}