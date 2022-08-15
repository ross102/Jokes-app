import { fireEvent, render, screen } from "@testing-library/react";
import  Jokes  from "../../pages/jokes/index";
import "@testing-library/jest-dom";

describe("Jokes page",  () => {

   beforeEach(() => {
    let data = {
            categories: ["cats" ],
            created_at: "date",
            icon_url: "https://imgeurl.com",
            id: "id",
            updated_at: "data",
            url: "https://location.com",
            value: "string"          
    }
    return render(<Jokes  data={data}/>);
   })

    it("renders a the page title", async () => {
      fireEvent.load(screen.getByTestId('random-jokes'))
      const heading = await  screen.getByRole('heading');    
      expect(heading).toBeInTheDocument();

    });

    it("displays the joke button", async () => {
       
       fireEvent.load(screen.getByTestId('random-jokes'))
       
       const btn = await screen.getByText(/More jokes/i)
       fireEvent.click(btn)
       expect(global.window.location.href).toBe("http://localhost/");   
    });
        
});  