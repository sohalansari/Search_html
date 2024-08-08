let likeCount = 0;
let dislikeCount = 0;

function handleLike() {
    likeCount++;
    updateCounts();
}

function handleDislike() {
    dislikeCount++;
    updateCounts();
}

function updateCounts() {
    const likeButton = document.querySelector('.like-button');
    const dislikeButton = document.querySelector('.dislike-button');

    likeButton.innerHTML = `Like (${likeCount})`;
    dislikeButton.innerHTML = `Dislike (${dislikeCount})`;
}
