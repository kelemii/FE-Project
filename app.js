const $userForm = $("#user-form");
const $button = $(".click");
const $container = "#results";

$userForm.submit((event) => {
  event.preventDefault();
  $('#results').html("");
  let rand1 = Math.floor(Math.random() * (1000 - 174));
  const URL = `https://rickandmortyapi.com/api/character/${rand1}`;
  $.get(URL, (data) => {
    const $div = $(`<div></div>`).addClass("card-div").prependTo($container);
    if (data.status === "Alive") {
      const $cardStatus = $(
        `<h5><button class="alive"></button><em>  ${data.status}</em</h5>`
      )
        .addClass("card-status")
        .prependTo($div);
    } else if (data.status === "Dead") {
      const $cardStatus = $(
        `<h5><button class="dead"></button><em>  ${data.status}</em></h5>`
      )
        .addClass("card-status")
        .prependTo($div);
    } else if (data.status === "unknown") {
      const $cardStatus = $(
        `<h5><button class="unknown"></button><em>  ${data.status}</em></h5>`
      )
        .addClass("card-status")
        .prependTo($div);
    }
    const $species = $(`<p>Species: ${data.species}</p>`)
      .addClass("card-species")
      .prependTo($div);
    const $location = $(`<p>Location: ${data.location.name}</p>`)
      .addClass("card-location")
      .prependTo($div);
    const $cardTitle = $(`<h3>${data.name}</h3>`)
      .addClass("card-title")
      .prependTo($div);
    const $img = $(`<img src='${data.image}'>`)
      .addClass("card-image")
      .prependTo($div);
  });
});
