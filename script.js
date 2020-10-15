// $("button").click(function(){
 $(".miles").keypress(function(event){

var keycode = (event.keyCode ? event.keyCode : event.which);
if(keycode === 13){
    
        let name = $(".name").val(); 
        let age = Number($(".age").val());
        let miles = Number($(".miles").val());
        
    if(name==="" && age===0 && miles===0){
    }

    
    else{
    let timeLeft = Number(90-age);
    let daysLeft = Number(timeLeft * 365);
    let totalMiles = Number(miles * daysLeft);
    let earth = Number(totalMiles/24901);
    let mars = Number(totalMiles/13263);
    let sun = Number(totalMiles/2720000);
    
    
    $(".answer").append(`<p class="final">${name}, from now until you die you will walk ${totalMiles} miles, this is equivalent to ${earth.toFixed(3)} times around the Earth. You will also have walked ${mars.toFixed(4)} times around Mars, and ${sun.toFixed(4)} times around the sun</p>`);
    $("input").val("");
    }}
    
});