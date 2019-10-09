process.env.NODE_TLS_REJECT_UNAUTHORIZED="0";
const nodemailer = require('nodemailer');
module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fwrsm.sa@gmail.com',
            pass: 'frankisall'
        }
    });

let mailOptions = {
    from: `"${formulario.nombre} " <${formulario.email}>`,
    to: formulario.email,
    subject: formulario.asunto,


    html: `
    ${formulario.mensaje}
    `
};

transporter.sendMail(mailOptions, function(err, info){
    process.env.NODE_TLS_REJECT_UNAUTHORIZED="0";
    if(err){
        console.log(err)
        console.log("body",body);
    console.log("message",message);
    console.log ("formulario",formulario.mensaje);
    } else    {
        console.log(info);
        console.log("body",body);
         console.log("message",message);
    console.log ("formulario",formulario.mensaje);
    }
});
}

