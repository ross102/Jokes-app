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
    getCategoryByName(name:string | undefined) {

     return Jokes.get("/jokes/random", { params: {
      category: name
      }
    })
    }


}

export default new JokesApi();



