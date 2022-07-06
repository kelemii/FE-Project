const $userForm = $("#user-form");
const $button = $(".click");
const $container = "#results";

$userForm.submit((event) => {
  event.preventDefault();
//   $container.html('');
  let rand1 = Math.floor(Math.random() * (1000 - 174));
  const URL = `https://rickandmortyapi.com/api/character/${rand1}`;
  $.get(URL, (data) => {
      const $div = $(`<div></div>`).addClass('card-div').prependTo($container);
    console.log(data);
    if (data.status === 'Alive') {
        const $cardStatus = $(`<h5><button class="alive"></button><em>  ${data.status}</em</h5>`).addClass('card-status').prependTo($div);
    } else if ( data.status === 'Dead') {
        const $cardStatus = $(`<h5><button class="dead"></button><em>  ${data.status}</em></h5>`).addClass('card-status').prependTo($div);
    } else if (data.status === 'unknown'){
        const $cardStatus = $(`<h5><button class="unknown"></button><em>  ${data.status}</em></h5>`).addClass('card-status').prependTo($div);
    }
    const $species = $(`<p>Species: ${data.species}</p>`).addClass('card-species').prependTo($div);
    const $location = $(`<p>Location: ${data.location.name}</p>`).addClass('card-location').prependTo($div);
    const $cardTitle = $(`<h3>${data.name}</h3>`).addClass(
        "card-title"
        ).prependTo($div);
        const $img = $(`<img src='${data.image}'>`).addClass(
          "card-image"
        ).prependTo($div);
    // const $genre = $(`<h2>${current.show.genres.join(", ")}</h2>`).addClass(
    //   "card-genres"
    // );
    // const $summary = $("<div></div>").addClass("card-summary");
    // const $em = $("<em>Summary:</em>");
    // const $p = $(`<p><b>${current.show.name}</b>${current.show.summary}</p>`);
    // const $a = $(`<a href='${current.show.url}'target="_blank">View Show</a>`);
  });
});

//     for (let i = 0; i < results.length; i++) {
//       const $span = $("<span></span>").addClass("result-card");
//       let current = results[i];

//       $span.appendTo($results);
//       $cardTitle.appendTo($span);
//       $img.appendTo($span);
//       $genre.appendTo($span);
//       $summary.appendTo($span);
//       $em.appendTo($summary);
//       $p.appendTo($em);
//       $a.appendTo($span);
//     }
//   });
// });
