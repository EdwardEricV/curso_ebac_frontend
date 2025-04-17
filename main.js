document.addEventListener("DOMContentLoaded", function () {
    const username = "EdwardEricV";
    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
        .then(response => {
            console.log("Status da resposta:", response.status);
            if (!response.ok) {
                throw new Error("Erro ao buscar os dados do GitHub: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            document.querySelector(".profile-avatar").src = data.avatar_url || "./imagem/1.jpeg";
            document.querySelector(".profile-name").textContent = data.name || "Nome não disponível";
            document.querySelector(".profile-username").textContent = `@${data.login}`;
            document.getElementById("repositorio").textContent = data.public_repos;
            document.getElementById("seguidores").textContent = data.followers;
            document.getElementById("seguindo").textContent = data.following;
            document.querySelector(".profile-link").href = data.html_url;
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro ao carregar os dados do GitHub. Tente novamente mais tarde.");
        });
});


