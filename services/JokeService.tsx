import Jokes from "./jokes";


class JokesApi {
  

   //get random joke
   getRandommJoke() {

    return Jokes.get("/jokes/random")
     
   }


   //get all categories
   getAllCategories() {

    return Jokes.get("/jokes/categories")
     
   }



 //get category by name
    getCategoryByName(name:string) {

     return Jokes.get("/jokes/", { params: {
      random: name
      }
    })
    }


}

export default new JokesApi();



