//subtask 1

const addTextClickListeners = () => {
  document.getElementById("fifth-one").addEventListener("click", (e) => {
    const elem = document.getElementById("fifth-one");
    if(elem.style.cssText!=""){
      elem.style.cssText = "";
      return;
    }
    elem.style.backgroundColor = "blue";
    elem.style.color = "white";
  });

/*document.getElementById("sixth-one").addEventListener("click", (e) => {
    const elem = document.getElementById("sixth-one");
    if(elem.style.cssText!=""){
      elem.style.cssText = "";
      return;
    }
    elem.style.backgroundColor = "green";
    elem.style.color = "yellow";
  });*/

  document.querySelector("#sixth-one").addEventListener("click", (e) => {
const elem = document.querySelector("#sixth-one");
if (elem.style.cssText != "") {
  elem.style.cssText = "";
  return;
}
elem.style.backgroundColor = "green";
elem.style.color = "yellow";
});
};
addTextClickListeners();

//subtask 2
var imgCounts=1;



const addButtonListeners=()=>{
document.getElementById("add-btn").addEventListener("click",()=>{
  document.getElementById("images").innerHTML+='<a href="https://slavuta-mvk.gov.ua/" id="img-wrapper-'+imgCounts+'">' +
  ' <div style="width:500px;overflow:hidden"> <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/%D0%A6%D0%B5%D0%BD%D1%82%D1%80-%D0%BC%D1%96%D1%81%D1%82%D0%B0-%D0%A1%D0%BB%D0%B0%D0%B2%D1%83%D1%82%D0%B0.jpg" style="width: 500px;;transform:scale(1)" id="img-so-big-'+imgCounts+'"/><br/></div>' +
  '</a>';
  imgCounts++;
});

document.getElementById("delete-btn").addEventListener("click",()=>{
  document.getElementById('img-wrapper-'+(imgCounts-1)).remove();
  imgCounts--;
});
document.getElementById("zoom-in-btn").addEventListener("click",()=>{
  console.log('img-so-big-'+(imgCounts-1));
  var img = document.getElementById('img-so-big-'+(imgCounts-1));
  console.log(img);
  // Select the HTML element you want to get the old scale value from
const elementToInspect = img; // Replace with your element's ID

// Get the computed style of the element
const computedStyle = window.getComputedStyle(elementToInspect);
  console.log(computedStyle);

// Extract the scale value from the transform property
const transform = computedStyle.getPropertyValue("transform");
  console.log(transform);

// Extract the scale value using regular expression (if it exists)



let paramsStr = transform.match("[\\d\\., ]+")[0];
let params = paramsStr.split(", ");

params[0] = parseFloat(params[0]) + 0.25;
params[3] = parseFloat(params[3]) + 0.25;

img.style.transform = `matrix(${params.join(", ")})`;
});
document.getElementById("zoom-out-btn").addEventListener("click",()=>{
  console.log('img-so-big-'+(imgCounts-1));
  var img = document.getElementById('img-so-big-'+(imgCounts-1));
  console.log(img);
  // Select the HTML element you want to get the old scale value from
const elementToInspect = img; // Replace with your element's ID

// Get the computed style of the element
const computedStyle = window.getComputedStyle(elementToInspect);
  console.log(computedStyle);

// Extract the scale value from the transform property
const transform = computedStyle.getPropertyValue("transform");
  console.log(transform);

// Extract the scale value using regular expression (if it exists)



let paramsStr = transform.match("[\\d\\., ]+")[0];
let params = paramsStr.split(", ");

params[0] = Math.max(parseFloat(params[0]) - 0.25,0.1);
params[3] = Math.max(parseFloat(params[3]) - 0.25,0.1);

img.style.transform = `matrix(${params.join(", ")})`;
});
}

addButtonListeners();