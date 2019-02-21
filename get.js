var idb=window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB;
var open=idb.open("RESUME BUILDER",1);
open.onupgradeneeded=function(e){
  var request=e.target.result;
  request.createObjectStore("form_data",{keyPath:"id",autoIncrement:true});
}
open.onerror=function(e){
//console.log("indexedDB error");
}
open.onsuccess=function(e){
  var request=e.target.result;
  var transaction=request.transaction("form_data","readwrite");
  var storeDB=transaction.objectStore("form_data");
  var finalData = storeDB.getAll();
  finalData.onsuccess=function(event){
    console.log(event.target.result);
    display(event.target.result);
  }
}
var parent = document.querySelector(".parent");
function display(data)
{
  data.map((item)=>{var child = document.createElement("div");
    child.classList.add("child");

    var profileIcon=document.createElement("img");
    profileIcon.src="girl.svg";
    profileIcon.alt="display picture";
    child.appendChild(profileIcon);

  var name = document.createElement("h2");
  name.textContent = item.name;
  child.appendChild(name);

  var email = document.createElement("a");
  email.href="neha@gmail.com";
  email.textContent =item.email;
  email.href="mailto:neha@gmail.com";
  child.appendChild(email);
  var br = document.createElement("br");
  child.appendChild(br);

var link = document.createElement("a");
link.href = "resume.html?id="+item.id;
link.textContent="viewprofile";
child.appendChild(link);


parent.appendChild(child);
})
}
