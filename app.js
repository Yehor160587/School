const get_api_res_btn = document.getElementById('get_api_res_btn');
const api_result = document.getElementById('api_result');
const api_result_Title = document.getElementById('api_result_Title');
const api_result_Year = document.getElementById('api_result_Year');
const api_result_Director = document.getElementById('api_result_Director');
const input1 = document.getElementById('api_result');
get_api_res_btn.addEventListener('click', getAPI);





    function getAPI(){
        let endPoint = 'https://www.omdbapi.com/?apikey=64c85138&t=' + input1.value;
        fetch(endPoint, {
		method: 'GET'
	})
    .then(res => res.json())
    .then(data=> {
    api_result_Title.innerHTML += data.Title;
    api_result_Year.innerHTML += data.Year;
    api_result_Director.innerHTML += data.Director;

    });
    }
    