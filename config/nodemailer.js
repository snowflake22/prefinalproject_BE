const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'muhammadarifrahmanhakim40@gmail.com',
        pass: 'oacklhkzbddilrsi'
    },
    tls:{
        rejectUnauthorized:false
    }
})

module.exports = {
    transporter
}