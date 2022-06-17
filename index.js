//8d3b67b0820a43228dd0e09730a95cc7

//Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '8d3b67b0820a43228dd0e09730a95cc7'

// Grab the news container
let newsAccordion = document.getElementById("newsShivu");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}` , true);

// What to do when response is ready
xhr.onload = function () {
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index){
            //console.log(element, index)
            let news = `<div class="accordion" id="newsAccordion">
                                <div class="card">
                                    <div class="card-header" id="heading${index}">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                                <b>Breaking News ${index+1}</b> ${element["title"]}
                                            </button>
                                        </h5>
                                    </div>

                                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsShivu">
                                        <div class="card-body"> ${element["content"]} <a href="${element['url']}" target="_blank">Read more</a> </div>
                                    </div>
                                </div>            
                        </div>`; 
            newsHtml += news;
        });
        newsShivu.innerHTML = newsHtml;
    }
    else{
        console.log("Some error occured")
    }
}

xhr.send()

  