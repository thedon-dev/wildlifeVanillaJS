const videos = [
    {
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "1 - Wildlife Video",
        heading: "Amazing Wildlife",
        description: "Discover the beauty of the wild."
    },
    {
        url: "https://www.youtube.com/embed/2vjPBrBU-TM",
        title: "2 - Wildlife Trade",
        heading: "Wildlife Trade Overview",
        description: "Understand the challenges of wildlife trade."
    },
    {
        url: "https://www.youtube.com/embed/9bZkp7q19f0",
        title: "3 - Conservation Efforts",
        heading: "Saving Wildlife",
        description: "Learn about conservation projects worldwide."
    }
];

let currentVideo = 0;

const videoFrame = document.getElementById("videoFrame");
const videoTitle = document.getElementById("videoTitle");
const videoHeading = document.getElementById("videoHeading");
const videoDescription = document.getElementById("videoDescription");

document.getElementById("prevVideo").addEventListener("click", () => {
    currentVideo = (currentVideo - 1 + videos.length) % videos.length;
    updateVideo();
});

document.getElementById("nextVideo").addEventListener("click", () => {
    currentVideo = (currentVideo + 1) % videos.length;
    updateVideo();
});

function updateVideo() {
    videoFrame.src = videos[currentVideo].url;
    videoTitle.textContent = videos[currentVideo].title;
    videoHeading.textContent = videos[currentVideo].heading;
    videoDescription.textContent = videos[currentVideo].description;
}