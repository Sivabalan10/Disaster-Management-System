function search_engine(){
	console.log("Search started");
	let user = document.getElementById('search');
	document.getElementById('searchbar').style.display = 'none';
	let news = document.getElementById('news');
	news.style.display = "none";
	let res1 = document.getElementById('result_norm');
	if(user.value == ""){
		console.log("Not found");
		let err = document.getElementById('err');
		err.innerHTML = "<br>"+"Not found";
	}
	else{
	err.style.display="none";
	res1.innerHTML = "<br>"+"Requested: "+"<i>"+user.value+"</i>"+"<hr>";
	let res2 = document.getElementById('res2');
	res2.style.color = "black";
	res2.innerHTML = "Search result: ";
	sendData1(user)
	// Here search engine deploy
	 function sendData1(user) {

            $.ajax({
                url: '/process1',
                type: 'POST',
                data: { 'data':user},
                success: function(r1,r2) {
                    sendData(r1,r2)

                },
                error: function(error) {
                    console.log(error);
                }
            });
        }


}

}
function autolocation(){
	console.log("auto_location accessing....");
	let clr = document.getElementById('overall');
	clr.style.display = "none";
	let news = document.getElementById('news');
	news.style.display = "none";
	// location function

    let userLocation = navigator.geolocation;

         if(userLocation) {
            userLocation.getCurrentPosition(success);
         } else {
            "The geolocation API is not supported by your browser.";
         }

      function success(data) {
         let lat = data.coords.latitude;
         let long = data.coords.longitude;
         console.log(lat+" "+long);
         res(lat,long);
         sendData(lat,long);
        function sendData(lat,long) {

            $.ajax({
                url: '/process',
                type: 'POST',
                data: { 'data1': lat,'data2':long},
                success: function(response) {
                    let spe = document.getElementById('res3');
                    spe.innerHTML = "<b>Based on your current location,</b> The nearby affected areas are given as record <br>";
                    let result = document.getElementById('model');
                    result.style.display = "block";

                },
                error: function(error) {
                    console.log(error);
                }
            });
        }
       }


 //------------------------------------------------------------------------------
    function res(lat,long){
	let res1 = document.getElementById('result_norm2');
	let cont = document.getElementById('cont');
	res1.innerHTML = "<i class='fas fa-map-marker-alt' style='font-size:24px'></i> <br><br>"+"At"+" ("+lat+" , "+long+")"+"<hr>";
	let dis = document.getElementById('dis');
	dis.innerHTML = "<hr><b>EARTHQUAKE PRECAUTIONS:</b><br>"
	cont.innerHTML = `<u><b>DO's :</b></u><br>
 <b>1.Drop, Cover, and Hold On:</b><br> \t During an earthquake, drop to the ground, take cover under a sturdy piece of furniture, and hold on until the shaking stops.<br>
 <b>2.Stay Indoors:</b><br> \t If you are indoors, stay inside. Do not run outside during the shaking, as falling debris can be dangerous.<br>
 <b>3.Stay Away from Windows:</b><br> \t Keep away from glass windows and doors to avoid injury from shattered glass.<br>
 <b>4.Secure Heavy Items:</b><br> \t Secure heavy objects, such as bookshelves and appliances, to prevent them from toppling over.<br>
 <b>5.Have an Emergency Kit:</b><br> \t Prepare an emergency kit with essential supplies like water, non-perishable food, flashlight, batteries, first aid supplies, and important documents.<br>
 <b>6.Know Safe Zones:</b><br> \t Familiarize yourself with safe zones in your home or workplace, such as areas away from windows and heavy objects.<br>
<hr>
<b><u>DON'T :</u></b><br>
 <b>1.Don't Run Outside:</b><br> \t Avoid running outside during the earthquake, as it can be more dangerous than staying indoors due to falling debris.<br>
 <b>2.Don't Use Elevators:</b><br> \t Never use elevators during an earthquake, as they may become stuck or malfunction.<br>
<b>3.Don't Stand Under Doorways:</b><br> \t Contrary to popular belief, standing in a doorway is not the safest option. It's better to take cover under sturdy furniture.<br>
<b>4.Don't Panic:</b><br> \t Try to remain calm during the earthquake. Panic can lead to poor decision-making.<br>
 <b>5.Don't Use Open Flames:</b><br> \t Avoid using open flames, such as matches or candles, as gas leaks and fires are common during earthquakes.<br>
 <b>6.Don't Drive:</b><br> \t If you are in a vehicle, pull over to a safe location away from buildings, bridges, and overpasses. Stay inside the vehicle until the shaking stops.<br><hr>`
	}

}
