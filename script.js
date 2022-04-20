const data = {
  mainTitle: "My Favourite Indian Sweets",
  cardContents: [
    {
      name: "Gulab Jamun",
      imageLink:
        "https://i0.wp.com/aartimadan.com/wp-content/uploads/2020/11/milk-powder-gulab-jamuns.jpg?w=1000&ssl=1",
    },
    {
      name: "Kaaju Barfi",
      imageLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kaju_katli_dessert_-_side_view.jpg/1024px-Kaju_katli_dessert_-_side_view.jpg",
    },
    
  ],
  userData: { name: "MOHAMMED ISHAQ", tagLine: "World of Web Development!" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);
