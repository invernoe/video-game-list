import { Ui } from "./ui.js";

class Details {
  constructor() {}

  static async fetchDetails(id) {
    Ui.startLoading();

    const url =
      "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id;
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
      Ui.displayGameDetails(result);
      this.setupCloseButton();
      this.setupViewGameButton(result.game_url);
    } catch (error) {
      console.error(error);
    }

    Ui.endLoading();
  }

  static setupCloseButton() {
    document
      .querySelector("#detailsCloseBtn")
      .addEventListener("click", (e) => {
        Ui.closeDetailsWindow();
      });
  }

  static setupViewGameButton(url) {
    document
      .querySelector("#detailsViewGameBtn")
      .addEventListener("click", (e) => {
        open(url);
      });
  }
}

export { Details };
