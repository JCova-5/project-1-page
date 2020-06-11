console.log('jQuery', $)

console.log('app.js', $)

// sheetUrl is the shared URL... anyone with this url can open the sheet in google sheets.
const sheetUrl = 'https://docs.google.com/spreadsheets/d/1Q6qAxoDVayrFdtsqjwHaoVy0LLPMmBNA3jFF_MwJxPI/edit?usp=sharing'
// sheetAsJSON is how we pull the data as JSON (Javascript Object Notation)
const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/1Q6qAxoDVayrFdtsqjwHaoVy0LLPMmBNA3jFF_MwJxPI/od6/public/values?alt=json'

console.log('running before ajax');

// .ajax returns a Promise
$.ajax({
    url: sheetAsJSON,
  }).then((data) => {
      console.log("data", data)
      const projects = data.feed.entry.map( project => {
          return {
              title: project.gsx$title.$t,
              image: project.gsx$image.$t,
              description: project.gsx$description.$t,
              url: project.gsx$url.$t
          }
      }) // map ends
      app(projects)
  })
  // .catch is meant to handle errors
  .catch( err => console.log('err', err))
  
console.log('running after ajax');

function app(projectsArr) {
    console.log('inside app - projectsArr', projectsArr)
    projectsArr.forEach( project => {
        // creates an h3
        let image = $('<img>')
        // assign the title the value stored in project.title
        image.attr(project.image)
        // appends the title to body
        $('body').append(image)
    })
}