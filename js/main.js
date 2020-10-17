(()=>{

//make an AJAX request using Fetch API
fetch('./data/classData.json')
  .then(res =>{
		    if (res.ok) {
			  return res.json()
			} else {
			  return Promise.reject(res)
			}
	})
  .then(data =>{
    //debugger;
    console.log(data);
    handleClassData(data);
  })
  .catch(error=> {
		console.log(error);
		document.querySelector(".profPanelText").innerHTML="ERROR: "+error.status+"  "+error.statusText;
  });
   
  function handleClassData(data){
		document.querySelector(".text-primary").innerHTML=data.coursename;
		document.querySelector(".profPanelText .text-muted").innerHTML+=data.coursecode;
		document.querySelector(".prof-name").innerHTML=data.profname;
		let listInline= document.querySelector(".list-inline");
		
		data.classtime.forEach(time => {
            listInline.innerHTML += `<li>${time}</li>`;
        });

		document.querySelector(".courseInfo h2").innerHTML=data.coursename + data.coursecode;
		document.querySelector(".courseInfo p").innerHTML=data.coursedesc;
  }


})();


