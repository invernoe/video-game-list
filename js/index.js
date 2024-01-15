

async function fetchData() {
  const url =
    "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5c93f80057msh98915d4b73a77a1p179d8cjsn7bfce456952e",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
