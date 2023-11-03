//task 1
class FormGroup{
    constructor(element, regex,validationMessage){
        this.element=element;
        this.regex=new RegExp(regex);
        this.validationMessage=validationMessage;
        this.hasMessage=false;
        element.addEventListener("focus", () => {
            this.setPrimaryClass()
            this.removeMessage()
          });
      
          element.addEventListener("focusout", () => {
            this.handleValidation();
          });
    }

    tryValidate() {
        return this.regex.test(this.element.value)
    }

    appendMessage(){
        if(!this.hasMessage){
            let newElement = document.createElement("div");
            newElement.textContent = this.validationMessage;
            newElement.classList.add("validation-error-text")
            this.message=newElement;

            this.element.insertAdjacentElement("afterend", newElement);

            this.hasMessage=true;
        }
    }
    removeMessage(){
        if(this.hasMessage){
            this.message.remove()
            this.message=null;

            this.hasMessage=false;
        }
    }

    handleValidation(){
        if(!this.tryValidate()){
            if(!this.hasMessage){
                this.appendMessage();
            }
            this.setInvalidClass()

            return;
        }
        this.setPrimaryClass()
        if(this.hasMessage){
            this.removeMessage();
        }
    }
    setInvalidClass(){
        this.element.className= "invalid" ;
    }
    setPrimaryClass(){
        this.element.className= "primary" ;
    }
}

const addFormListeners = () => {
   let nameField = document.getElementById("name-field")
   const nameGroup= new FormGroup(nameField, 
                                "^[A-Z][a-z]* [A-Z]\\.[A-Z]\\.$",
                                "Please, input the correct name (i.e. Khilchuk A.V.)")
    
    
    let idCardField = document.getElementById("id-card-field")
    const idCardGroup= new FormGroup(idCardField, 
                                "^[A-Z]{2} №\\d{6}$",
                                "Please, input the correct ID Card (i.e. IP №123456)")

    let facultyField = document.getElementById("faculty-field")
    const facultyCardGroup= new FormGroup(facultyField, 
                                "^[A-Z]{4}$",
                                "Please, input the correct faculty (i.e. FICT) ")

    let dateofBirthField = document.getElementById("date-of-birth-field")
    const dateofBirthGroup= new FormGroup(dateofBirthField, 
                                "^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$",
                                "Please, input the date of birth (i.e. 17.06.2004) ")

    let cityField = document.getElementById("city-field")
    const cityGroup= new FormGroup(cityField, 
                                "^c\. [A-Z][a-z]*$",
                                "Please, input the date of birth (i.e. c. Slavuta) ")
    
    const formGroups = [nameGroup, idCardGroup, facultyCardGroup, dateofBirthGroup, cityGroup]
    const formGroupNames = ["Name", "Id card", "Faculty", "Date of birth", "City"]

    let submitButton=document.getElementById("submit-btn")
    submitButton.addEventListener("click",()=>{
        if(formGroups.every((fg)=> fg.tryValidate())){
            
            let lastSubmission=document.getElementById("last-successful-submission")
            lastSubmission.innerHTML="";
            for(let i=0;i<formGroups.length;i++){
                lastSubmission.innerHTML+=`<div style="margin-bottom:10px"><span style="font-weight:bold;">${formGroupNames[i]}:</span><br/>`+
                `<span>${formGroups[i].element.value}</span><br/></div>`;
                formGroups[i].element.value="";
            }
        }
        else{
            for(let i=0;i<formGroups.length;i++){
                formGroups[i].handleValidation();
            }
        }
    })
}

addFormListeners()

//task2
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
function getContrastColor(hexColor) {
    var r = parseInt(hexColor.substr(1, 2), 16);
    var g = parseInt(hexColor.substr(3, 2), 16);
    var b = parseInt(hexColor.substr(5, 2), 16);

    var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5 ? 'black' : 'white';
}
  


const addTableEventHandlers = () => {
    const variantCell = document.getElementById("variant-cell");
    const colorPicker = document.getElementById("color-picker");
  
    variantCell.addEventListener("mouseover", (e) => {
        let color=getRandomColor();
        e.target.style.backgroundColor = color;
        e.target.style.color = getContrastColor(color);
    });
  
    variantCell.addEventListener("click", (e) => {
        e.target.style.backgroundColor = colorPicker.value;
        e.target.style.color = getContrastColor(colorPicker.value);
    });
  
    variantCell.addEventListener("dblclick", (e) => {
        let cells= document.querySelectorAll("#my-table td")

        for (var i = 0; i < cells.length; i+=7) {
            cells[i].style.backgroundColor = colorPicker.value;
            cells[i].style.color = getContrastColor(colorPicker.value);
        }   
    });
};

addTableEventHandlers()