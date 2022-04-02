(()=>{
    function CheckEmail(){
        this.asideDiv=document.querySelector("aside")
        this.input=document.querySelector("#input-email")
        this.validateEmail=function(email){
            let validate=/\S+@\S+\.\S+/
            return validate.test(email)
        }
        this.createDiv=function(){
            const div=document.createElement("div")
            div.classList.add("divError")
            this.asideDiv.appendChild(div)
        }
        this.createP=function(typep){
            if(typep==="error"){
            const p=document.createElement("p")
            p.innerHTML="Please enter a valid email adress."
            p.classList.add("paragraphError")
            return p
            }else{
                const p=document.createElement("p")
                p.innerHTML="Your email adress has been sent successfully."
                p.classList.add("paragraphSuccess")
                return p
            }
        }
        this.generateError=function(){
            this.createDiv()
            const divError=document.querySelector(".divError")
            divError.innerHTML=""
            const p=this.createP("error")
            divError.appendChild(p)
        }
        this.generateSuccess=function(){
            this.createDiv()
            const divError=document.querySelector(".divError")
            divError.innerHTML=""
            const p=this.createP("success")
            divError.appendChild(p)
        }
    }
    const button=document.querySelector("#button-submit")
    button.addEventListener("click",()=>{
        const email=new CheckEmail
        document.addEventListener("submit",(event)=>{
        
        if(email.input.value==="" || !email.validateEmail(email.input.value)){
            event.preventDefault()
            email.generateError()
            return
        }else if(event){
            email.generateSuccess()
        }
        })
    })
})()