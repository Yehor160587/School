const iss_now_api_result_btn = document.getElementById('iss_now_api_result_btn');
const iss_now_api_longitude = document.getElementById('iss_now_api_longitude');
const iss_now_api_latitude = document.getElementById('iss_now_api_latitude');

iss_now_api_result_btn.addEventListener('click', getAPI);

    function getAPI(){
        fetch('http://api.open-notify.org/iss-now.json', {
		method: 'GET'
	})
    .then(res => res.json())
    .then(data=> {
        iss_now_api_longitude.innerHTML='Longitude is: ' + data.iss_position.longitude;
        iss_now_api_latitude.innerHTML='Latitude is: ' + data.iss_position.latitude;
    });
}