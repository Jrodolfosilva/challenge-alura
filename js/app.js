const inputClient = document.querySelector("#code")
const inputResp = document.querySelector("#descode")
const bt = document.querySelector("#codificar")
let responseClient =[]
const chave = {
    A:"p",
    B:"o",
    C:"i",
    D:"u",
    E:"y",
    F:"t",
    G:"r",
    H:"e",
    I:"w",
    J:"q",
    K:"a",
    L:"s",
    M:"d",
    N:"f",
    O:"g",
    P:"h",
    Q:"j",
    R:"k",
    S:"l",
    T:"ç",
    U:"z",
    V:"x",
    W:"c",
    X:"v",
    Y:"b",
    Z:"n",
    ç:"ç",
    "":""

}
const chave2 = {
  p:"A",
  o:"B",
  i:"C",
  u:"D",
  y:"E",
  t:"F",
  r:"G",
  e:"H",
  w:"I",
  q:"J",
  a:"K",
  s:"L",
  d:"M",
  f:"N",
  g:"O",
  h:"P",
  j:"Q",
  k:"R",
  l:"S",
  ç:"T",
  z:"U",
  x:"V",
  c:"W",
  v:"X",
  b:"Y",
  n:"Z",
  ç:"ç",
  "":""
}

  const Codificador = ()=>{
const inputClientArray = inputClient.value.split("")
for(let i=0;i<inputClientArray.length;i++){
  if(chave[inputClientArray[i]]){
    responseClient.push(chave[inputClientArray[i]])
  }
}
Descodificador(responseClient)
}

const Descodificador = (code)=>{
  
  inputResp.innerHTML = code.join("")
}
bt.addEventListener("click",Codificador)




















    

    








