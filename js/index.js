

$(document).ready(function () {

$("#user-email").val('')
$("#user-message").val('')
$("#user-name").val('')
$("#verify-user").val('')







setTimeout(() => {

$(".loader-wrapper").fadeOut('slow')

}, 3000)

})


/*global variable*/
var netUpdate = document.getElementById("network-update")
var closeAlert = document.querySelector(".close-network-alert")
var netContent = document.getElementById("network-cont")


/*   server  connection  response code*/
const offline = () => {

netUpdate.style.visibility = 'visible'

console.log('off')

netContent.textContent = 'You are offline.Please check your internet.'
netContent.style.color="red"


}


const online = () => {
netUpdate.style.visibility = 'visible'

console.log('onn')


netContent.textContent = 'You are connected to the server again.'
netContent.style.color = "green"



}


/*   server  connection   response code ends*/




/*Event Listensers*/

/*ceritificates modals*/
$("#navbar").fadeOut(200)
$(document).ready(function(){
$("#ca").click(function () {
$("#pop-mod").slideUp('slow')
})

$("#pop-mod").click(function(){
$("#pop-mod").fadeOut()

})
$('.certi-img').click(function(e){
e.preventDefault()
$("#pop-mod").addClass('fade in').css("display", "block")

c=($(this).find("img").attr("src"))
$(".pop-img").attr("src",c)
})



//alert close
closeAlert.addEventListener("click", () => {
netUpdate.style.visibility = 'hidden'

})




function up(){

this.ClassLists.addClass("move-down")

}

$(function(){
$("#edu .title").click(function (params) {
$(this).toggleClass("isactive")
$(this).next().toggle('slow');

})

})



$("#hide-nav").click(function(e){
e.preventDefault()

$(this).addClass("move-down")

$("#navbar").toggle('slow');
})


$(document).ready(function () {

$(".proj-img").mouseover(function(){
$(this).find("img").addClass("proj-imgs")
})
$(".proj-img").mouseout(function () {
$(".proj-img img").removeClass("proj-imgs")
})



/* navabar animation*/

$("body").delay(200).fadeIn(500)

$(".navbar-toggle").click(function(){

$("#myNavbar").toggle(200)
})

$(".sec-row").click(function(){
$("#myNavbar").delay(100).slideUp(200)
})


var but=$("#nav-button");




$("#navbar").delay(500).slideDown('slow')


$(".btn-slide").hover(function(){
$(this).addClass("slide")
})

})

/*scrolling event*/

$(window).scroll(function (params) {

var posTop = $(window).scrollTop()  //vertical height
if (posTop > 45) {
$("#navbar").delay(200).addClass("dark-bg")
}
else {
$("#navbar").removeClass("dark-bg")
}

if (posTop > 1400) {

$(".head-icon").addClass("shadow")


}
else {
$(".head-icon").removeClass("shadow")

}


if (posTop > 1450) {
$("#cont").css("display", "block")
$("#cont").addClass("move  animated zoomInDown animated bounceInLeft")
}
})





$(function () {
$(".nav-item").mouseover(function () {
$(this).addClass("moveupsm")
$(this).delay(200).addClass("movedownsm")

})
$(".nav-item").mouseout(function () {

$(this).removeClass("moveupsm")

})

})



$('#navbar a[href^="#"]').on('click', function (e) {
e.preventDefault();

var target = this.hash;
var $target = $(target);

$('html, body').stop().animate({
'scrollTop': $target.offset().top
}, 1000, 'swing', function () {
window.location.hash = target;
});
});
});

/*navigation animation ends*/


$(".tg-4").delay(.2).fadeIn().fadeOut(.2).fadeOut(.2).fadeIn(.5).fadeOut(.5).fadeIn(.9);

$(".tg-1").delay(300).addClass("txt-shadow").fadeIn(6000)
$(".tg-4").delay(1000).fadeIn().fadeOut().fadeOut().fadeIn().fadeOut().fadeIn();

$(".tg-2").delay(600).addClass("txt-shadow").fadeIn(7000)
$(".tg-3").delay(1000).addClass("txr-shadow").fadeIn(8000);


$(".edu-info").find("div").addClass("edu-txt")



/*project animation*/



$(".proj-img").mouseover(function(){
$(this).find("#g").fadeIn(200);
$(this).find("#nm").fadeOut()

})


$(".proj-img").mouseout(function () {
$(this).find("#nm").fadeIn()
$(this).find("#g").fadeIn()

})

$(".work-skills").mouseover(function (params) {
$(this).addClass("open")

})




$("#wor").addClass("alink-active")

$(function () {
$("#wor").click(function (e) {
e.preventDefault()

$(".wor-cont").delay(200).fadeIn(1000)

$("#wor").addClass("alink-active")
$("#pers").removeClass("alink-active")

$(".pers-cont").fadeOut(100)
$(this).addClass("show")

})




$("#pers").click(function (e) {
e.preventDefault()
$("#pers").addClass("alink-active")
$("#wor").removeClass("alink-active")

$(this).fadeIn(100)
$(".pers-cont").delay(200).fadeIn(1000)
$(".wor-cont").fadeOut(100)
//$(".wor-cont").removeClass('show')
$(this).addClass("show")

})

/*project  animation  ends*/


/*dark mode code */
n=new Date().getHours()
if(n>12)
{
}
$("#night-mode").click(function(e){
darkMode()
$("#dark-alert").delay(2000).toggleClass("fade in")

})
function darkMode(){

$(".skills-list").toggleClass("night-bg")
$(".skills-list li").toggleClass("night-text")
$("#night-mode").toggleClass("night-active")


$("body").toggleClass("night-bg")
$(".card-text").toggleClass("night-text")
$(".head").toggleClass("night-head")
$(".card-title").toggleClass("night-subhead")
$(".txt").toggleClass("night-text")




}

})
/*dark mode code ends */


//contact form

const sendBtn = document.getElementById("send")
const contactForm = document.getElementById("contact-form")

/* Send email using smtp api*/
var Email = {
send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) {
var t = new XMLHttpRequest; return "withCredentials"
in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
}
};
contactForm.addEventListener('submit', (event) => {
entry = $("#verify-user").val()

event.preventDefault()
if(verify(entry) == false  )
{
return false

}
else{
userEmail = $("#user-email").val()
userMessage = $("#user-message").val()
userName = $("#user-name").val()



$("#send").attr("disabled", "yes")
$("#send").text('Sending ..')


Email.send({
Host: "smtp.elasticemail.com",
Username: "shubhampnd414@gmail.com",
Password: "41B4E2D9CCBCC257B0D77C9737CB969E8EC0",
To: "shubhampnd414@gmail.com",
From: 'shubhampnd414@gmail.com',
Subject: "New Registration",
Body: `Hey <h4>Shubham</h4>, <br>  ${userName} contacted you for a project . 
<h4> Description:</h4> ${userMessage}
`
}).then(
message => {
if (message != 'error') {
Email.send({
Host: "smtp.elasticemail.com",
Username: "shubhampnd414@gmail.com",
Password: "41B4E2D9CCBCC257B0D77C9737CB969E8EC0",
To: userEmail,
From: "shubhampnd414@gmail.com",
Subject: "Response from Shubham Pandey",
Body: `Hey <h4>${userName}</h4><br>, Thanks for contacting  me.
I will  be in  touch with you very soon.
<br><br>
<h5>with regards,</h5>
<h5>Shubham</h5>
`

}).then(
message => {
console.log('response sended!!!', message)
if (message != 'error') {
$("#contact-result").text("Email sent please check you spam for further contact")  
/*resetting the input values after succesfull contact*/
$("#user-email").val('')
$("#user-message").val('')
$("#user-name").val('')
$("#verify-user").val('')
getRandom()

document.getElementById("send").removeAttribute("disabled")
$("#send").text('Send')



}
}
).catch(err => {
$("#contact-result").text("Email not send .Please try again")  

})



}
}


)
}
})


// generate random code*/
const genRandom=()=>{
const verifyContent = document.getElementById("verify-content");

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var str = '';
for (let i = 0; i < 6; i++) {
str += chars[Math.floor(Math.random() * 32)]

}
verifyContent.textContent =str

return str;
}

genRandom()
//verify function
var verify =(userEntry)=>{

//checking user entry
const userBox = document.getElementById("verify-user");
const verifyContent = document.getElementById("verify-content");

if(userEntry ==verifyContent.textContent)
{
document.getElementById("verify-user").classList.remove("warn")
document.getElementById("verify-user").classList.add("success")
return true
}

else{
document.getElementById("verify-user").classList.add("warn")
document.getElementById("verify-user").classList.remove("success")


return false


}
}

/*contact form ends here*/
