const express = require('express')
const Story = require('../models/Story')
const User = require('../models/User')
exports.create = async (req, res) => {
   const {title, body} = req.body
   const errors = []
    if (title === undefined) 
        errors.push('title is required')
    if (body === undefined)
        errors.push('body is required')
    if (errors.length)
      return res.send({ error: true, status: 400, message: "invalid fields", data: errors })

    try {
        if( await Story.findOne({title}))
         return res.send({ error: true, status: 400, message: 'Historia existente', data: []})

         const story = await Story.create({title, body, user: req.userId})
         await User.findByIdAndUpdate(req.userId, {
             '$set' :{
                 'stories' : story._id
             }
         })
         res.status(201).send({ error: false, status: 201, message: 'Historia criada com successo!', data: story} )

    } catch (error) {
        console.log(error);
        res.send({error: true, status: 500, message: 'erro do sevidor', data: []})
    }

}

exports.update = async (req, res) => {
   const {title, body} = req.body
   const { id } = req.params
   const errors = []
    if (title === undefined) 
        errors.push('tile is required')
    if (body === undefined)
        errors.push('body is required')
    if (errors.length)
      return res.send({ error: true, status: 400, message: "invalid fields", data: errors })
     await Story.findByIdAndUpdate(id, {
        '$set': {
            'title': title,
            'body': body
        }
    })
    res.send({ data: await Story.findById(id)})
}

exports.findStoriesByUser = async (req, res) => {
    try {
        res.send({ error: false, status: 200, message: "sucess!", data: await Story.find({ user: req.userId}) })
    } catch (error) {
        res.send({ error: true, status: 500, message: "something went wrong!", data: [] })
    }
} 

exports.delete = async (req, res) => {
    try {
       const story = await Story.findByIdAndDelete(req.params.id)
       if (!story)
          return res.send({ error: true, status: 404, message: "user not found", data: [] })
        res.send({ error: false, status: 201, message: "story created!", data: story })  
    } catch (error) {
        res.send({ error: true, status: 500, message: "something went wrong!", data: [] })
    }
}