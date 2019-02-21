function addData() {
  var nm=document.querySelector("#name").value;
  var em=document.querySelector("#email").value;
  var pn=document.querySelector("#number").value;
  var cr=document.querySelector("#career").value;
  var gp=document.querySelector("#group1").value;
  var br=document.querySelector("#branch").value;
  var c1=document.querySelector("#college1").value;
  var m1=document.querySelector("#marks1").value;
  var gp1=document.querySelector("#group2").value;
  var br1=document.querySelector("#branch1").value;
  var c2=document.querySelector("#college2").value;
  var m2=document.querySelector("#marks2").value;
  var gp2=document.querySelector("#group3").value;
  var br2=document.querySelector("#branch2").value;
  var c3=document.querySelector("#college3").value;
  var m3=document.querySelector("#marks3").value;
  var tech=document.querySelector("#tech").value;
  var idb=window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB;
var open=idb.open("RESUME BUILDER",1);
open.onupgradeneeded=function(e){
  var request=e.target.result;
  request.createObjectStore("form_data",{keyPath:"id",autoIncrement:true});
}
open.onerror=function(e){
console.log("indexedDB error");
}
open.onsuccess=function(e){
  var request=e.target.result;
  var transaction=request.transaction("form_data","readwrite");
  var storeDB=transaction.objectStore("form_data");
  storeDB.add({
    name:nm,
    email:em,
    number:pn,
    career:cr,
    education:[
      {
        degree:gp,
        branch:br,
        college:c1,
        percentage:m1
      },
      {
        degree:gp1,
        branch:br1,
        college:c2,
        percentage:m2
      },
      {
        degree:gp2,
        branch:br2,
        college:c2,
        percentage:m2
      }
    ],
    tech:[{
      tech:tech
    }]
  })
window.open("index.html");
}
}
