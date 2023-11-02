class FormGroup{
    constructor(element, regex,validationMessage){
        this.element=element;
        this.regex=new RegExp(regex);
        this.validationMessage=validationMessage;
        this.hasMessage=false;
        element.addEventListener("focus", () => {
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
    //regexes still need polishing, laying off base for now
   let nameField = document.getElementById("name-field")
   const nameGroup= new FormGroup(nameField, 
                                "[A-Za-z]+ [A-Z]\.[A-Z]\.",
                                "Please, input the correct name (i.e. Khilchuk A.V.)")
    
    
    let idCardField = document.getElementById("id-card-field")
    const idCardGroup= new FormGroup(idCardField, 
                                "[A-Z]+ №[0-9]+",
                                "Please, input the correct ID Card (i.e. IP №123456)")

    let facultyField = document.getElementById("faculty-field")
    const facultyCardGroup= new FormGroup(facultyField, 
                                "[A-Z]",
                                "Please, input the correct faculty (i.e. FICT) ")

    let dateofBirthField = document.getElementById("date-of-birth-field")
    const dateofBirthGroup= new FormGroup(dateofBirthField, 
                                "[0-9]+\.[0-9]+\.[0-9]+",
                                "Please, input the date of birth (i.e. 17.06.2004) ")

    let cityField = document.getElementById("city-field")
    const cityGroup= new FormGroup(cityField, 
                                "c\. [A-Za-z]+",
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
