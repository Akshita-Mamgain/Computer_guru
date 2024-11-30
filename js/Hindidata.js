const videoData = [
    {
        title: "Bandar Mama Pahan Pajama",
        thumbnail: "../images/Hindi Rhymes/Bandar-Mama-Pahan-Pajama.png",
        source: "../Videos/Hindi Rhymes/Bandar Mama Pahan Pajama.mp4",
    },
    {
        title: "Billi Mausi Billi Mausi Kaho Kahan Se Aayi Ho",
        thumbnail: "../images/Hindi Rhymes/Billi Mausi Billi Mausi Kaho Kahan Se Aayi Ho.png",
        source: "../Videos/Hindi Rhymes/Billi Mausi Billi Mausi Kaho Kahan Se Aayi Ho.mp4",
    },
    {
        title: "Chunnu Munnu",
        thumbnail: "../images/Hindi Rhymes/Chunnu Munnu.png",
        source: "../Videos/Hindi Rhymes/Chunnu Munnu.mp4",
    },
    {
        title: "Hatti Raja Kahan Chale",
        thumbnail: "../images/Hindi Rhymes/Hatti Raja Kahan Chale.png",
        source: "../Videos/Hindi Rhymes/Hatti Raja Kahan Chale.mp4",
    },
    {
        title: "Varnamala Geet Hindi Alphabet",
        thumbnail: "../images/Hindi Rhymes/Varnamala Geet Hindi Alphabet.png",
        source: "../Videos/Hindi Rhymes/Varnamala Geet Hindi Alphabet.mp4",
    },
    // Add more video objects up to 20
];
function playVideo(index) {
    const videoPlayer = document.querySelector(".video");
    const videoTitle = document.querySelector(".video-container h3");
    const selectedVideo = videoData[index];

    videoPlayer.src = selectedVideo.source;
    videoTitle.textContent = selectedVideo.title;
    videoPlayer.play();
}

// Attach event listeners
document.addEventListener("DOMContentLoaded", () => {
    loadPlaylist(); // Load playlist items dynamically

    document.querySelector(".playlist").addEventListener("click", (e) => {
        const clickedItem = e.target.closest(".playlist-item");
        if (clickedItem) {
            const index = clickedItem.dataset.index;
            playVideo(index);
        }
    });
});
