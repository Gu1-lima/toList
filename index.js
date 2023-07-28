//pega os dados do input
//criar os elementos html pelo js
//Mostrar esses elementos pro usuario 
//Salvar no localStorage
//atualixar a pagina com os dadodo localStorage

 let controller = ()=>{ //Todos os elementos (pai)
    let getData = ()=>{ //funçao pra "criado" para pegar os dados
        let form = document.querySelector(".form");//querySelector selcionar algum item do ducumento no caso ".form"
        form.addEventListener("submit", (event)=>{ //submit = submete os dados para algum local 
            event.preventDefault(); //não deixa os dados vazarem
            let input = document.querySelector(".input").value;//paga o valor dentro do ".input"
            setElement(input);//utiliza a função setElement
        })
    }
        getData();//retona a função getData
        let setElement = (value)=>{
            //crinado tags pelo JS
            let div = document.createElement("div");
            let input = document.createElement("input")
            let p = document.createElement("p")
            //add atributos as tags
            div.setAttribute("class", "msgContainer");
            input.setAttribute("type", "checkbox");
            p.setAttribute("class", "msg");
            //criando a estrutura HtML pelo JS
            div.appendChild(input);
            div.appendChild(p)
            p.innerHTML = value;
            showListToUser(div)  
            saveDataInTheLocalStorqge(value)
        }

        let saveDataInTheLocalStorqge = (value)=>{
            localStorage.setItem(value, value);
        }
        let showListToUser = (div)=>{
            //Mostrando dados para o Úsuario
            let container = document.querySelector(".container");
            console.log(div)
            container.appendChild(div)
            clearInput()
        }

        let clearInput = ()=>{
            let input = document.querySelector(".input");
            input.value = "";
        }

        let onLoad = ()=>{
            let sizeLocal = localStorage.length
            if(sizeLocal >0){
                for(let i=1; i<=sizeLocal; i++){
                    let data = localStorage.key(i-1)
                    setElement(data);
                }
            }
        }
        onLoad()
    }
 controller();//ultiliza a função controller