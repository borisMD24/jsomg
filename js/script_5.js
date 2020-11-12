const acidesAmines = [
    {
        nom : "serine",
        nucleotides : [
            "UCU",
            "UCC",
            "UCA",
            "UCG",
            "AGU",
            "AGC"
        ]
    },
    {
        nom : "proline",
        nucleotides : [
            "CCU",
            "CCC",
            "CCA",
            "CCG"
        ]
    },
    {
        nom : "leucine",
        nucleotides : [
            "UUA",
            "UUG"
        ]
    },
    {
        nom : "phenylalanine",
        nucleotides : [
            "UUU",
            "UUC"
        ]
    },
    {
        nom : "arginine",
        nucleotides : [
            "CGU",
            "CGC",
            "CGA",
            "CGG",
            "AGA",
            "AGG"
        ]
    },
    {
        nom : "tyrosine",
        nucleotides : [
            "UAU",
            "UAC"
        ]
    }
]

function picker(codon){
    for(let i = 0; i < acidesAmines.length; i++){
        for(let j = 0; j < acidesAmines[i].nucleotides.length; j++){
            if(acidesAmines[i].nucleotides[j] == codon){
                return(acidesAmines[i].nom);
            }
        }
    }
    return("pas trouve :/");
}

function translator(){
    str = window.prompt("entrer une suite de nucleotides ARN")
    let tab = []
    while(str.length > 2){
        tab.push(str.substr(0, 3))
        str = str.replace(str.substr(0, 3), "")
    }
    for(let i = 0; i < tab.length; i++){
        tab[i] = picker(tab[i]);
    }
    console.log(tab);
}