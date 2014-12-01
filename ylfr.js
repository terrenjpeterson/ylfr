// include the required node.js packages

var express = require('express');
var http = require('http');
var fs = require('fs');

// set variables for each html page served

var INPUT_FILE = "index.html";
var BETTER_FILE = "bootstrap.html";
var DONATE_FILE = "donate.html";
var CONTACT_FILE = "contact.html";
var ABOUT_FILE = "about.html";
var GET_INVOLVED_FILE = "get_involved.html";
var AFTER_SCHOOL_FILE = "after_school.html";
var SUMMER_PROGRAMS_FILE = "summer_program.html";
var FINANCIAL_LITERACY_FILE = "financial_literacy.html";
var DIRECTORS_MESSAGE_FILE = "directors_message.html";
var CHILD_SPOTLIGHT_FILE = "child_spotlight.html";
var SUCCESS_FILE = "success.html";

// create the server

var app = express();

var server = http.createServer(app);

// load the html pages in memory of the server

var home_page = fs.readFileSync(INPUT_FILE, 'utf8');
var better_page = fs.readFileSync(BETTER_FILE, 'utf8');
var donate_page = fs.readFileSync(DONATE_FILE, 'utf8');
var contact_page = fs.readFileSync(CONTACT_FILE, 'utf8');
var about_page = fs.readFileSync(ABOUT_FILE, 'utf8');
var get_involved_page = fs.readFileSync(GET_INVOLVED_FILE, 'utf8');
var after_school_page = fs.readFileSync(AFTER_SCHOOL_FILE, 'utf8');
var summer_program_page = fs.readFileSync(SUMMER_PROGRAMS_FILE, 'utf8');
var directors_message_page = fs.readFileSync(DIRECTORS_MESSAGE_FILE, 'utf8');
var child_spotlight_page = fs.readFileSync(CHILD_SPOTLIGHT_FILE, 'utf8');
var success_page = fs.readFileSync(SUCCESS_FILE, 'utf8');

// create the routes to handle http requests for individual html pages

app.get('/', function(req, res){
    res.send(better_page);
});

app.get('/index.html', function(req, res) {
   res.send(better_page);
});

app.get('/terren', function(req, res) {
    res.send('now you get it');
});

app.get('/better.html', function(req, res) {
    res.send(better_page);
});

app.get('/donate.html', function(req, res) {
    res.send(donate_page);
});

app.get('/contact.html', function(req, res) {
    res.send(contact_page);
});

app.get('/about.html', function(req, res) {
    res.send(about_page);
});

app.get('/get_involved.html', function(req, res) {
    res.send(get_involved_page);
});

app.get('/after_school.html', function(req, res) {
    res.send(after_school_page);
});

app.get('/summer_program.html', function(req, res) {
    res.send(summer_program_page);
});

app.get('/directors_message.html', function(req, res) {
    res.send(directors_message_page);
});

app.get('/child_spotlight.html', function(req, res) {
    res.send(child_spotlight_page);
});

app.get('/success.html', function(req, res) {
    res.send(success_page);
});

// begin listening on the port for traffic

app.listen(8080);
