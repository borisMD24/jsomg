const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


function book(){
    for(let i = 0; i < books.length; i++){
        if(books[i].rent == 0){
            console.log(`${book[i].title} n'a pas encore ete empreinte`);
        }
    }
    
      let buff = books[0];
      for(let i = 0; i < books.length; i++){
          if(buff.rented < books[i].rented){
              buff = books[i];
          }
      }
      console.log("le livre le plus empreinte est : " + buff.title);
    
      buff = books[0];
      for(let i = 0; i < books.length; i++){
          if(buff.rented > books[i].rented){
              buff = books[i];
          }
      }
      console.log("le livre le moins empreinte est : " +buff.title);
    
    
      for(let i = 0; i < books.length; i++){
        if(books[i].id == 873495){
            console.log("le livre 873495 est : " + books[i].title);
        }
    }
    
    let list = books;
    
    for(let i = 0; i < books.length; i++){
        if(list[i].id == 133712){
            delete(list[i])
        }
    }
    console.log("la liste sans le livre 133712");
    console.log(list);
}