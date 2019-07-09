let details;
const requestByAsync = async () => {
    const response = await fetch("https://restcountries.eu/rest/v2/all")
    const json = await response.json();
		detailInitialize(json);
}

requestByAsync();

function detailInitialize(detailsData){
	details = detailsData;
	let detailDisplay ="";
	for(let i=0; i<5; i++){
		detailDisplay += `<li> 3 Code: ${details[i].alpha3Code}, Region: ${details[i].region}, Native Name: ${details[i].nativeName}</li>`
	}
	document.getElementById("detailsPage").innerHTML =  detailDisplay;
}
