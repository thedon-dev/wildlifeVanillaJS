document.addEventListener("DOMContentLoaded", () => {
  const articlesContainer = document.getElementById("articles-container");
  const loadingElement = document.getElementById("loading");

  // Show loading indicator
  loadingElement.style.display = "block";

  // Fetch articles from JSON file
  fetch("../data/articles.json")
    .then((response) => response.json())
    .then((articles) => {
      loadingElement.style.display = "none"; // Hide loading indicator

      if (articles.length > 0) {
        articles.forEach((article) => {
          // Create article card
          const articleCard = document.createElement("div");
          articleCard.className = "article-card";

          // Create article image
          const articleImage = document.createElement("div");
          articleImage.className = "article-image";
          articleImage.style.backgroundImage = `url(${
            article.image || "https://via.placeholder.com/300"
          })`;

          // Create article content
          const articleContent = document.createElement("div");
          articleContent.className = "article-content";

          // Article title
          const articleTitle = document.createElement("h2");
          articleTitle.className = "article-title";
          articleTitle.textContent = article.title;

          // Article description
          const articleDescription = document.createElement("p");
          articleDescription.className = "article-description";
          articleDescription.textContent = article.description;

          // Article link
          const articleLink = document.createElement("a");
          articleLink.className = "article-link";
          articleLink.href = article.link || "#";
          articleLink.textContent = "Read More";

          // Append elements to article content
          articleContent.appendChild(articleTitle);
          articleContent.appendChild(articleDescription);
          articleContent.appendChild(articleLink);

          // Append image and content to article card
          articleCard.appendChild(articleImage);
          articleCard.appendChild(articleContent);

          // Append article card to grid
          articlesContainer.appendChild(articleCard);
        });
      } else {
        articlesContainer.innerHTML = "<p>No articles found.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
      loadingElement.style.display = "none";
      articlesContainer.innerHTML = "<p>Failed to load articles.</p>";
    });
});
