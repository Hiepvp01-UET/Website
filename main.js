function WriteData(heart,step){
    firebase.database().ref("User").set({
        Heart_Rate:heart,
        Foot_Steps:step
    });
}

// Get value from Firebase
// Get Data calories
var timeCalories = firebase.database().ref('person 1').child('calories').child('time');
timeCalories.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeCalories").innerHTML = snap.val();
});

var valCalories = firebase.database().ref('person 1').child('calories').child('value');
valCalories.on('value',snap =>{
    console.log("Calories : "+snap.val());
    document.getElementById("valCalories").innerHTML = snap.val();
});

//Get data distance

var timeDistance = firebase.database().ref('person 1').child('distance').child('time');
timeDistance.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeDistance").innerHTML = snap.val();
});

var valDistance = firebase.database().ref('person 1').child('distance').child('value');
valDistance.on('value',snap =>{
    console.log("Distance : "+snap.val());
    document.getElementById("valDistance").innerHTML = snap.val();
});

//Get data Heart rate

var timeHeart = firebase.database().ref('person 1').child('heart rate').child('time');
timeHeart.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeHeart").innerHTML = snap.val();
});

var valHeart = firebase.database().ref('person 1').child('heart rate').child('value');
valHeart.on('value',snap =>{
    console.log("Heart rate : "+snap.val());
    document.getElementById("valHeart").innerHTML = snap.val();
});

// Get data steps

var timeSteps = firebase.database().ref('person 1').child('steps').child('time');
timeSteps.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeSteps").innerHTML = snap.val();
    
});

var valSteps = firebase.database().ref('person 1').child('steps').child('value');
valSteps.on('value',snap =>{
    console.log("Steps : "+snap.val());
    document.getElementById("valSteps").innerHTML = snap.val();
});

// Get Data Move minutes
var timeMove = firebase.database().ref('person 1').child('met').child('time');
timeMove.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeMove").innerHTML = snap.val();
});

var valMove = firebase.database().ref('person 1').child('met').child('state');
valMove.on('value',snap =>{
    console.log("Move minutes : "+snap.val());
    document.getElementById("valMove").innerHTML = snap.val();
});

// Get Data speed
var timeSpeed = firebase.database().ref('person 1').child('speed').child('time');
timeSpeed.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeSpeed").innerHTML = snap.val();
});

var valSpeed = firebase.database().ref('person 1').child('speed').child('value');
valSpeed.on('value',snap =>{
    console.log("Speed : "+snap.val());
    document.getElementById("valSpeed").innerHTML = snap.val();
});

// Style
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");              
const closeBtn =document.querySelector("#close-btn");
const themeToggler =document.querySelector(".theme-toggler");


// change theme
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').
    classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').
    classList.toggle('active');
})
//Person 2
var timeCalories = firebase.database().ref('person 2').child('calories').child('time');
timeCalories.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeCalories2").innerHTML = snap.val();
});

var valCalories = firebase.database().ref('person 2').child('calories').child('value');
valCalories.on('value',snap =>{
    console.log("Calories : "+snap.val());
    document.getElementById("valCalories2").innerHTML = snap.val();
});

//Get data distance

var timeDistance = firebase.database().ref('person 2').child('distance').child('time');
timeDistance.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeDistance2").innerHTML = snap.val();
});

var valDistance = firebase.database().ref('person 2').child('distance').child('value');
valDistance.on('value',snap =>{
    console.log("Distance : "+snap.val());
    document.getElementById("valDistance2").innerHTML = snap.val();
});

//Get data Heart rate

var timeHeart = firebase.database().ref('person 2').child('heart rate').child('time');
timeHeart.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeHeart2").innerHTML = snap.val();
});

var valHeart = firebase.database().ref('person 2').child('heart rate').child('value');
valHeart.on('value',snap =>{
    console.log("Heart rate : "+snap.val());
    document.getElementById("valHeart2").innerHTML = snap.val();
});

// Get data steps

var timeSteps = firebase.database().ref('person 2').child('steps').child('time');
timeSteps.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeSteps2").innerHTML = snap.val();
    
});

var valSteps = firebase.database().ref('person 2').child('steps').child('value');
valSteps.on('value',snap =>{
    console.log("Steps : "+snap.val());
    document.getElementById("valSteps2").innerHTML = snap.val();
});

// Get Data Move minutes
var timeMove = firebase.database().ref('person 2').child('met').child('time');
timeMove.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeMove2").innerHTML = snap.val();
});

var valMove = firebase.database().ref('person 2').child('met').child('state');
valMove.on('value',snap =>{
    console.log("Move minutes : "+snap.val());
    document.getElementById("valMove2").innerHTML = snap.val();
});

// Get Data speed
var timeSpeed = firebase.database().ref('person 2').child('speed').child('time');
timeSpeed.on('value',snap =>{
    console.log("Time : "+snap.val());
    document.getElementById("timeSpeed2").innerHTML = snap.val();
});

var valSpeed = firebase.database().ref('person 2').child('speed').child('value');
valSpeed.on('value',snap =>{
    console.log("Speed : "+snap.val());
    document.getElementById("valSpeed2").innerHTML = snap.val();
});
