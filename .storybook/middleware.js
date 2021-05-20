const express = require('express')
const fs = require('fs')
const path = require('path')

const walk = function(dir, router) {
    fs.readdir(dir, function (err, list) {
        if (err) console.log('error reading directory: ', dir)
        let pending = list.length
        if (!pending) return
        list.forEach(function (file) {
            const fileName = path.resolve(dir, file)
            fs.stat(fileName, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(fileName, router)
                } else {
                    const mockFileRegex = /.*mock\.js$/
                    if (mockFileRegex.test(fileName) && !fileName.includes('node_modules')) {
                        console.log('fileName: ', fileName)
                        const mock = require(fileName)
                        mock(router)
                    }
                }
            })
        })
    })
}

const expressMiddleWare = router => {
    console.log("middleware")
    walk('./packages', router)
}

module.exports = expressMiddleWare