
const chave1= {
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





const textoDigitado = document.querySelector("#code")
const areaResposta = document.querySelector(".response")
let response=[]


function codificador (){
  response=[""]
  areaResposta.innerHTML=" ";
  const texto = textoDigitado.value
  const textoArray = texto.split("")
  for(let i =0;i < textoArray.length;i++){
    response.push(chave1[textoArray[i]])  
  
  }
  areaResposta.innerHTML = response.join("")
}



/*
Para reconhecer letras "A" && "a" ou caracteres 
especiais é só adicionar nas chaves [chave:valor]
para adicionar o botão "copiar" é só adiconar no html e mudar
a class dele quando o response tiver length.
(mudar a class para active e display para "block")
*/















function decodificador (){
  response=[""]
  const texto = textoDigitado.value
  const textoArray = texto.split("")
  console.log(textoArray)

  for(let i =0;i < textoArray.length;i++){
    response.push(chave2[textoArray[i]])  
    
  }
  areaResposta.innerHTML = "";
  areaResposta.innerHTML = response.join("")
}