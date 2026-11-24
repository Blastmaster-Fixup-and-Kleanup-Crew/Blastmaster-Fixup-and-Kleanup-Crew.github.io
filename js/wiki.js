(function(){
  function normalize(value){return (value||"").toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");}
  var sidebarInput=document.getElementById("wiki-search");
  if(sidebarInput){
    var links=Array.prototype.slice.call(document.querySelectorAll(".wiki-nav a"));
    var status=document.getElementById("wiki-search-status");
    sidebarInput.addEventListener("input",function(){
      var q=normalize(sidebarInput.value),shown=0;
      links.forEach(function(link){var match=!q||normalize(link.textContent).indexOf(q)!==-1;link.hidden=!match;if(match)shown++;});
      if(status)status.textContent=q?(shown+" matching links"):"";
    });
  }
  var homeInput=document.getElementById("wiki-home-search");
  if(homeInput){
    var cards=Array.prototype.slice.call(document.querySelectorAll("[data-search-card]"));
    var homeStatus=document.getElementById("wiki-home-search-status");
    homeInput.addEventListener("input",function(){
      var q=normalize(homeInput.value),shown=0;
      cards.forEach(function(card){var haystack=normalize(card.textContent+" "+card.getAttribute("data-keywords"));var match=!q||haystack.indexOf(q)!==-1;card.hidden=!match;if(match)shown++;});
      if(homeStatus)homeStatus.textContent=q?(shown+" articles found"):"Search the article directory below.";
    });
  }
})();