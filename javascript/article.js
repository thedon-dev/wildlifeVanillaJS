document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get("id"), 10);
  
    const loadingElement = document.getElementById("loading");
    const articleContainer = document.getElementById("article-container");
    const notFoundElement = document.getElementById("not-found");
  
    const articleTitle = document.getElementById("article-title");
    const articleDescription = document.getElementById("article-description");
    const articleContent = document.getElementById("article-content");
  
    // Fetch articles from JSON
    fetch("../data/articles.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch articles.");
        }
        return response.json();
      })
      .then((data) => {
        const article = data.find((item) => item.id === articleId);
  
        loadingElement.style.display = "none"; // Hide loading spinner
  
        if (article) {
          articleTitle.textContent = article.title;
          articleDescription.textContent = article.description;
          articleContent.textContent = article.content;
          articleContainer.classList.remove("hidden"); // Show the article container
        } else {
          notFoundElement.classList.remove("hidden"); // Show "not found" message
        }
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        loadingElement.style.display = "none";
        notFoundElement.classList.remove("hidden"); // Show "not found" message
      });
  });
  