document.addEventListener("DOMContentLoaded", () => {
    const addPostButton = document.getElementById("add-post-button");
    const postContent = document.getElementById("post-content");
    const newsFeed = document.getElementById("news-feed");
  
    addPostButton.addEventListener("click", () => {
      const content = postContent.value.trim();
  
      if (content === "") {
        alert("Skriv något innan du lägger till inlägget!");
        return;
      }
  
      // Skapa ett nytt inläggs-element
      const newPost = document.createElement("article");
      newPost.classList.add("post");
      newPost.textContent = content;
  
      // Lägg till det nya inlägget överst i feeden
      newsFeed.insertAdjacentElement("afterbegin", newPost);
  
      // Rensa input-fältet
      postContent.value = "";
    });
  });


//   <!-- beforebegin -->
// <section>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </section>
// <!-- afterend -->