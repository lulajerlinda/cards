function req1(sku) {
  fetch('https://jsonplaceholder.typicode.com/posts/'+sku)
    .then(response => response.json())
    .then(json => {
    const title = json.title;
      const body = json.body;
     let result = `<article class="c-card"id="cards-holder${sku}"><span class="pull-right clickable close-icon btn btn--big btn--close" data-effect="fadeOut" onclick="removeCard(this);"><i class="fa fa-times"></i></span>`;
      if(document.getElementById("cards-holder"+sku)){
            alert("The card exist in the view");
        } else {
            result +=
                ` 
                    <div class="c-card__body">
                      <h2 class="c-card__title">
                        ${title}
                      </h2>
                      <p class="c-card__intro">
                         ${body}
                      </p>
                    </div>
                  </article>`;
            document.getElementById("cards").insertAdjacentHTML('beforeend', result);
            
        };
})
}
    
    function pushMenu(){
        var icon = document.getElementsByClassName("icon-bars");
        var pushDown = document.getElementById("cards");
        if(pushDown.classList.contains("push")){
            pushDown.className = "pushUp";
        } else{
        pushDown.className = "push";
        }
    }
    
  function removeCard(e){
       e.parentNode.remove();
    }
