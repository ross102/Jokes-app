import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import Home from "../../pages";
import "@testing-library/jest-dom";

describe("Home page",  () => {

   beforeEach(() => {
    let data = ["animal", "celebrities", "cats"]
    return render(<Home data={data} />);
   })

    it("renders a heading", async () => {
      fireEvent.load(screen.getByTestId('main-page'))
      const heading = await  screen.getByRole('heading');    
      expect(heading).toBeInTheDocument();

    });

    it("category buttons", async () => {
       
       fireEvent.load(screen.getByTestId('main-page'))
       
       const categories = await screen.findAllByTestId('nav-links')
       expect(categories).toHaveLength(3);

       
    });
     
   
});  