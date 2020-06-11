console.log('jQuery', $)

console.log('app.js', $)

// sheetUrl is the shared URL... anyone with this url can open the sheet in google sheets.
const sheetUrl = 'https://docs.google.com/spreadsheets/d/1Q6qAxoDVayrFdtsqjwHaoVy0LLPMmBNA3jFF_MwJxPI/edit?usp=sharing'
// sheetAsJSON is how we pull the data as JSON (Javascript Object Notation)
const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/1Q6qAxoDVayrFdtsqjwHaoVy0LLPMmBNA3jFF_MwJxPI/od6/public/values?alt=json'

console.log('running before ajax');

// // .ajax returns a Promise
// $.ajax({
//     url: sheetAsJSON,
//   }).then((data) => {
//       console.log("data", data)
//       const projects = data.feed.entry.map( project => {
//           return {
//               title: project.gsx$title.$t,
//               image: project.gsx$image.$t,
//               description: project.gsx$description.$t,
//               url: project.gsx$url.$t
//           }
//       }) // map ends
//       app(projects)
//   })
//   // .catch is meant to handle errors
//   .catch( err => console.log('err', err))
  
// console.log('running after ajax');

// function app(projectsArr) {
//     console.log('inside app - projectsArr', projectsArr)
//     projectsArr.forEach( project => {
//         // creates an h3
//         let image = $('<img>')
//         // assign the title the value stored in project.title
//         image.attr(project.image)
//         // appends the title to body
//         $('body').append($image)
//     })
// }

// const imageArray = [
//     {
//         image: "https://res.cloudinary.com/da1ccujse/image/upload/v1591846723/Screen_Shot_2020-06-10_at_8.38.27_PM_et8qld.png",
//         title: "Startup Matchmaker",
//         description: "Flexbox Matchmaker Webpage.",
//         color: "#c7758f"
//     },
//     {
//         image: "https://res.cloudinary.com/da1ccujse/image/upload/v1591846560/Screen_Shot_2020-06-10_at_8.35.40_PM_zgsfcf.png",
//         title: "CSS Grid Image Gallery",
//         description: "CSS Grid Masonry Layout",
//         color: "#77b4c7"
//     },
//     {
//         image: "https://res.cloudinary.com/da1ccujse/image/upload/v1591846864/Screen_Shot_2020-06-10_at_8.40.54_PM_t8nqqv.png",
//         title: "Lapis, Papyrus Scalpellus",
//         description: "Classic Game of Rock, Paper, Scissors",
//         color: "#96cbb4"
//     },
//     {
//         image: "https://res.cloudinary.com/da1ccujse/image/upload/v1591846810/Screen_Shot_2020-06-10_at_8.39.54_PM_nmeqdb.png",
//         title: "Instagram Quotes",
//         description: "HTMl/CSS Instagram quote design.",
//         color: "#9589b8"
//     },
//     {
//         image: "https://res.cloudinary.com/da1ccujse/image/upload/v1591846659/Screen_Shot_2020-06-10_at_8.37.23_PM_si5v8u.png",
//         title: "Sartre's List",
//         description: "CSS Grid Fashion Blog Design",
//         color: "#63c3c5"
//     }
// ];

// const $div = $('div');
// const $ul = $('<ul>');
// $('div').addClass('proj')
// $div.append($ul);

// const createTable = () => {
//     imageArray.forEach( imageData => {
//         let $li = $(`<li class='ItemContainer'>
//                        <a href="#">
//                            <div class="ImageContainer"><i class="${imageData.image}"></i></div>
//                            <div class="ItemContentContainer">
//                              <h4 class="ItemHeader">${imageData.title}</h4>
//                              <p class="ItemHeading">${imageData.description}</p>
//                            </div>
//                        </a>
//                      </li>`)
//         $ul.append($li);
//     })
// };

// createTable();
