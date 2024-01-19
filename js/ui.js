class Ui {
  static displayGameCards(gameArr) {
    let cardHtmlList = "";
    gameArr.forEach((element) => {
      cardHtmlList += `<div class="col-xl-3 col-lg-4 col-md-6">
            <div class="card h-100 bg-transparent text-white" data-game-id="${element.id}">
              <div class="card-body p-3">
                <img
                  src="${element.thumbnail}"
                  class="card-img-top mb-3"
                  alt="..."
                />
                <div class="d-flex align-items-center">
                  <h5>${element.title}</h5>
                  <h5 class="ms-auto navbar-bg p-2 rounded">
                    Free
                  </h5>
                </div>
                <p class="card-text text-muted">
                  ${element.short_description.split(" ", 10).join(" ")}
                </p>
              </div>
              <div class="card-footer">
                <div class="d-flex align-items-center">
                  <h5 class="second-color-bg rounded px-1">${element.genre}</h5>
                  <h5 class="ms-auto second-color-bg rounded px-1">
                    ${element.platform}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          `;
    });

    document.querySelector("#gameListContent").innerHTML = cardHtmlList;
  }

  static displayGameDetails(game) {
    //hide main view
    document.querySelector("header").classList.add("d-none");
    document.querySelector("nav").classList.add("d-none");
    document.querySelector("main").classList.add("d-none");
    //display details view
    document.querySelector("#details").classList.remove("d-none");

    let gameDetailsHtml = `
    <div class="col-lg-4">
            <img
              class="w-100"
              src="${game.thumbnail}"
              alt=""
            />
          </div>
          <div class="col-lg-8">
            <h1>Title: ${game.title}</h1>
            <p class="mb-4">
              Category:<span class="third-color-bg ms-2 p-1 rounded text-dark"
                >${game.genre}</span
              >
            </p>
            <p class="mb-4">
              Platform:<span class="third-color-bg ms-2 p-1 rounded text-dark"
                >${game.platform}</span
              >
            </p>
            <p class="mb-4">
              Status:<span class="third-color-bg ms-2 p-1 rounded text-dark"
                >${game.status}</span
              >
            </p>
            <p>
              ${game.description}
            </p>
            <button id="detailsViewGameBtn" class="btn btn-outline-warning fs-5">Show Game</button>
          </div>
          `;

          document.querySelector("#detailsBody").innerHTML = gameDetailsHtml;
  }

  static closeDetailsWindow() {
    //display main view
    document.querySelector("header").classList.remove("d-none");
    document.querySelector("nav").classList.remove("d-none");
    document.querySelector("main").classList.remove("d-none");
    //hide details view
    document.querySelector("#details").classList.add("d-none");
  }

  static startLoading() {
    //once loading starts display loading overlay
    document.querySelector("#loading").classList.remove("d-none");
  }

  static endLoading() {
    //once processing is done toggle back d-none class to loading
    document.querySelector("#loading").classList.add("d-none");
  }
}

export { Ui };