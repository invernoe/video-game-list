class Ui {
  static displayGameCards(gameArr) {
    let cardHtmlList = "";
    gameArr.forEach((element) => {
      cardHtmlList += `<div class="col-xl-3 col-lg-4 col-md-6" data-game-id="${element.id}">
            <div class="card h-100 bg-transparent text-white">
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
    
  }
}

export { Ui };