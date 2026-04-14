let isJohn = true;

/* 🔁 Toggle between John & Jane */
function change() {
    clearRandomImage();

    if (isJohn) {
        updateUser("Jane Doe", "jane@gmail.com", "./img_avatar2.png");
    } else {
        updateUser("John Doe", "john@gmail.com", "./img_avatar.png");
    }

    isJohn = !isJohn;
}

/* 🧠 Reusable function */
function updateUser(name, email, img) {
    document.getElementById("Name").innerText = name;
    document.getElementById("Email").innerText = email;
    document.getElementById("Image").src = img;
}

/* 🧹 Clear side image */
function clearRandomImage() {
    document.getElementById("randomImage").innerHTML = "";
}

/* 🎲 Fetch random user */
async function Random() {
    try {
        clearRandomImage();

        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        const user = data.results[0];

        const fullName = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const profileImage = user.picture.large;

        // 🧾 Update main card
        updateUser(fullName, email, profileImage);

        // 🖼️ Show image beside card
        document.getElementById("randomImage").innerHTML = `
            <img src="${profileImage}" alt="Random User" class="random-img">
        `;

    } catch (error) {
        console.error(error);
        alert("⚠️ Failed to fetch user. Try again!");
    }
}