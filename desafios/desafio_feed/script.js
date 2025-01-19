document.addEventListener("DOMContentLoaded", () => {
    const likes = document.querySelectorAll(".like");
    const comments = document.querySelectorAll(".comment");
    const textComent = document.querySelectorAll(".textComent");

    likes.forEach(like => {
        let status = 0; 

        like.addEventListener("click", () => {
            if (status === 0) {
                like.style.fill = "red";
                status = 1;
            } else {
                like.style.fill = ""; 
                status = 0;
            }
        });
    });

    comments.forEach((comment, index) => {
        let status = 0; 

        comment.addEventListener("click", () => {
            if (status === 0) {
                comment.style.fill = "#0077ff";
                status = 1;
            } else {
                comment.style.fill = ""; 
                status = 0;
            }

            const text = textComent[index]; 
            if (text) {
                text.style.display = text.style.display === "flex" ? "none" : "flex";
            }
        });
    });
});
