require('dotenv').config()

//inicializar firebase admin
const {initializeApp, applicationDefault} = require('firebase-admin/app')
const {getFirestore} = require('firebase-admin/firestore')

//usar las credenciales de tu firebase
initializeApp({
    credential: applicationDefault()
})

//llamar a la BBDD
const db = getFirestore()


module.exports = {db, }