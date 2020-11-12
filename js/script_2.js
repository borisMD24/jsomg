

function factorial(){
  let nbr = parseInt(window.prompt("de quel nombre veux-tu trouver la factorielle?"));
  let buff = 1;
  while(nbr > 1){
    buff *= nbr
    nbr -= 1
  }
  console.log(`et ca fait ${buff}`);
}

function pyramid(){
  let nbr = parseInt(window.prompt("de quel nombre d'etages as-tu besoin?"));
  let s = "";
  for(i = nbr; i > 0; i--){
    s += " "
  }
  for(i = nbr; i > 0; i--){
    s = s.substring(1)
    s += "#"
    console.log(s);
  }
}