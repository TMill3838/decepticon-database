# decepticon-database
A website used to discover decepticons

#Authorship
code was developed by Tylan Miller

Tools: HTML5, CSS3, JavaScript, Bootstrap 5.0.2

Assets: Background image by generation-knight on DeviantArt; Images sourced from TFWiki.

Transform and Rise Up

#User Story
I always enjoyed the novelty of fan website dedicated to explaining information on series such a Transformers which is what inspired me to make a Decepticon Database.

# Concept/Basis for Website
<img width="1919" height="919" alt="image" src="https://github.com/user-attachments/assets/d5ab3b2e-4e92-4cad-ab1f-8cab07561f49" />

# Links
Repo:
Page: 

# Design
I wanted the design to resonate something that would be typical of an evil decepticon webasite. A nice purple glow with dark black colors seemed fitting. I also wanted to make it feel more like those old offical websites that were directed more towards kids. Having a little bit of humor.

I wanted the font choice to be fitting of a SCI-FI film which is why I chose to use Orbitron from google fonts. Taking a bit of bootstrap code I remolded it to fit the asethetic from the bare bones model it originally had. 

The search feature was an orginal idea. I always liked how some websites would have a feature to when you click on an image it glows which is why I chose to do that for the project.

Also used some code from class to help with the javascript portions.

# Sample Sniipet Code
from `scripts/step4-global-object-search.js`

'''js
 items.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="${item.wikiLink}" target="_blank" class="card-link">
        <img src="${item.image}" alt="${item.name}">
        <span>${item.name}</span>
      </a>



```










