#!/usr/bin/env node
console.log("We start up the Song-Management for DynaWeb\nEdited by Luis Diego Conejo Mora\n")

theapp = require('./controller/main_controller')
theapp.startup()