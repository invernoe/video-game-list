import { Ui } from "./ui.js";
import { Details } from "./details.js";

class Game {
  constructor() {
    // fetch data of default link
    this.fetchData("mmorpg");

    //get all nav links
    let links = document.querySelectorAll(".nav-link");
    links.forEach((element) => {
      element.addEventListener("click", (e) => {
        //remove active attribute from previous active element
        document.querySelector(".nav-link.active").classList.remove("active");
        //add it to current element
        element.classList.add("active");
        //fetch data of new link
        this.fetchData(element.innerHTML);
      });
    });
  }

  async fetchData(genre) {
    Ui.startLoading();
    
    const url =
      "https://free-to-play-games-database.p.rapidapi.com/api/games?category=" +
      genre;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5c93f80057msh98915d4b73a77a1p179d8cjsn7bfce456952e",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      Ui.displayGameCards(result);
      this.setupCardLinks();
    } catch (error) {
      console.error(error);
    }

    Ui.endLoading();
  }

  setupCardLinks() {
    let cards = document.querySelectorAll("#gameListContent .card");
    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        Details.fetchDetails(card.dataset.gameId);
      });
    });
  }
}

export { Game };
