class Person {
    constructor(name, email, pictureUrl, postcode, city) {
      this.name = name;
      this.email = email;
      this.pictureUrl = pictureUrl;
      this.postcode = postcode;
      this.city = city;
    }
  }
  async function getTheData(){
    return fetch('https://randomuser.me/api?results=5')
    .then(response => response.json())
    .then(data => {
      var people = data.results.map(result => {
        
        const name = `${result.name.first} ${result.name.last}`;
        const email = result.email;
        const pictureUrl = result.picture.large;
        const postcode = result.location.postcode;
        const city = result.location.city;
  
        return new Person(name, email, pictureUrl, postcode, city);
      });
      console.log(people)
      return people;
    });
  }
  
  const addButtonListeners = ()=>{
    document.getElementById("load-btn").addEventListener("click",()=>{
      document.getElementById("container").innerHTML='<div class="info">Loading...</div>';
      var data = getTheData();
      data.then((people)=>{
        console.log(people);
        var first=people[0];
        console.log(first);
      console.log("yay");
      var container = document.getElementById("container");
      container.innerHTML="";
        
        for(let person of people){
          console.log(person);
          container.innerHTML+='<div class="card">'+
        `<img src="${person.pictureUrl}" alt="Portrait">`+
        `<p>Postcode: ${person.postcode}</p>`+
        `<p>City: ${person.city}</p>`+
        `<p>Name: ${person.name}</p>`+
        `<p>Email: ${person.email}</p>`+
      '</div>';
        }
      }).catch(error => {
      document.getElementById("container").innerHTML='<div class="alert">Oops, failed to load data</div>';
    })
    });
  }
  addButtonListeners();