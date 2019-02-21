var param;
var paramValue;
var query =window.location.search.substring(1).split("?");
console.log(query);
query.map((item)=>{
var param=item.split("=");
console.log(item);
console.log(param);
paramValue = parseInt(param[1]);
console.log(paramValue);
})
var open=indexedDB.open("RESUME BUILDER",1);
open.onsuccess=function(e){
  var request=e.target.result;

  var transaction=request.transaction("form_data","readwrite");
  var storeDB=transaction.objectStore("form_data");
  var finalData = storeDB.get(paramValue);
  console.log(finalData);
  finalData.onsuccess=function(event){
  console.log(finalData);
  display(event.target.result);
  display1(event.target.result);
}
}
var parent = document.querySelector(".parent");
var child1 = document.querySelector(".leftchild");

function display(data){

  var profileIcon=document.createElement("img");
  profileIcon.src="girl.svg";
  profileIcon.alt="display picture";
  child1.appendChild(profileIcon);

  var name = document.createElement("h2");
  name.textContent = data.name;
  child1.appendChild(name);

  var email = document.createElement("a");
  email.textContent=data.email;
  email.href="mailto:neha@gmail.com";
  child1.appendChild(email);

var number = document.createElement("p");
number.textContent=data.number;
child1.appendChild(number);


}
var child2 = document.querySelector(".rightchild");
  function display1(data1){
    console.log(data1);
    var career = document.createElement("h2");
    career.textContent="career objective";
    child2.appendChild(career)
    var hr = document.createElement("hr");
    child2.appendChild(hr);
    var career = document.createElement("p");
    career.textContent=data1.career;
    child2.appendChild(career);
    var education =document.createElement("h2");
    education.textContent="educational qualification";
    child2.appendChild(hr);
var ul = document.createElement("ul");
child2.appendChild(ul);

data1.education.map((item)=>{
  var ul = document.createElement("ul");
  child2.appendChild(ul)
  var li = document.createElement("li");
  li.textContent = item.degree;
  ul.appendChild(li);

  var li2 = document.createElement("li");
  li2.textContent = item.branch;
  ul.appendChild(li2);

  var li3 = document.createElement("li");
  li3.textContent = item.college;
  ul.appendChild(li3);

  var li4 = document.createElement("li");
  li4.textContent = item.percentage;
  ul.appendChild(li4);

  child2.appendChild(ul);
})
    parent.appendChild(child2);
  }
