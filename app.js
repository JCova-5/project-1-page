console.log('jQuery', $)

console.log('app.js', $)

// sheetUrl is the shared URL... anyone with this url can open the sheet in google sheets.
const sheetUrl = 'https://docs.google.com/spreadsheets/d/1Q6qAxoDVayrFdtsqjwHaoVy0LLPMmBNA3jFF_MwJxPI/edit?usp=sharing'
// sheetAsJSON is how we pull the data as JSON (Javascript Object Notation)
const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/1Q6qAxoDVayrFdtsqjwHaoVy0LLPMmBNA3jFF_MwJxPI/od6/public/values?alt=json'

console.log('running before ajax');

// .ajax returns a Promise
$.ajax({
    url: sheetAsJSON
}).then( data =>  {
    console.log('data', data)
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


const $div = $('div');
const $ul = $('<ul>');
$('div').addClass('proj')
$div.append($ul);

function app(myProjects) {
const createTable = () => {
    myProjects.forEach( projectData => {
        let $li = $(`<div class="card1" style="width: 18rem;">
      <img class="card-img-top" src="${projectData.image}" alt="${projectData.title}">
      <div class="card-body">
        <h5 class="card-title">${projectData.title}</h5>
        <p class="card-text">Webpage created using HTML/CSS and Flexbox</p>
        <a href="${projectData.url}" class="btn btn-primary">See Code.</a>
      </div>
    </div>`)
        $ul.append($li);
    })
};

createTable();
}