// var admin = require("firebase-admin");
// const express=require('express')
// const app=express()

// var serviceAccount = require("./sac-app-5d1f8-firebase-adminsdk-s6o4n-1d16ef6cd5.json");
// const { response } = require("express");
// app.use(express.json())
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
// app.post('/send-noti',(req,res)=>{
//     console.log(req.body)

//     // console.log(req.body.n
//     // console.log(req.titleN)
// //    const message = {
// //     notification:{
// //         title:"new ad",
// //         body:"new ad posted click to open"
// //     },
// //     tokens:req.body.tokens
// // }
// // const message = {
// //     notification:{
// //         title:"new Notification",
// //         body:"new ad posted"
// //     },
// //     token:'fGgVuiogRJq9RKUc1cLLNH:APA91bGJsrpbLLnUKDIkXD5LYVCxWFl8Jv5kkGPlUwR1RSXhCpmgwh6x3OLNFzZA5SZAGUG5qjeh0oh30HribpHhpLBQ8xOTLkvSqsb2xZChqAtoT3MG6rqSgfiDijpJDVNRozi4CCAy'
// // }
// // admin.messaging().send(message).then(res=>{
// //     console.log("send success")
// // }).catch(err=>{
// //     console.log(err)
// // })
// for (var count = 0; count < req.body.tokens.length; count++){

//     const message = {
//         notification:{
//             title:req.body.title,
//             body:req.body.subTitle,
//         },
//         token:req.body.tokens[count]
//     }
//     admin.messaging().send(message).then(res=>{
//         console.log("send success")
//     }).catch(err=>{
//         console.log(err)
//     })

// }

// // admin.messaging().sendMulticast(message).then(res=>{
// //     console.log('send success')
// //  }).catch(err=>{
// //      console.log(err)
// //  })
//  })

//  app.listen(3000,()=>{
//      console.log('server running at 3000')

//  })

/* */

// var admin = require("firebase-admin");

// var serviceAccount = require("./sac-app-5d1f8-firebase-adminsdk-s6o4n-1d16ef6cd5.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
// const message = {
//     notification:{
//         title:"new Notification",
//         body:"new ad posted"
//     },
//     token:'fGgVuiogRJq9RKUc1cLLNH:APA91bGJsrpbLLnUKDIkXD5LYVCxWFl8Jv5kkGPlUwR1RSXhCpmgwh6x3OLNFzZA5SZAGUG5qjeh0oh30HribpHhpLBQ8xOTLkvSqsb2xZChqAtoT3MG6rqSgfiDijpJDVNRozi4CCAy'
// }
// admin.messaging().send(message).then(res=>{
//     console.log("send success")
// }).catch(err=>{
//     console.log(err)
// })

//  app.listen(3000,()=>{
//      console.log('server running')
//  }
//  )
