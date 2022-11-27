adjustBlob = () => {
    const profile = document.querySelector("#profile")
    const pDetails = profile.getBoundingClientRect();
    const profileX = pDetails.left + pDetails.width * 0.5;
    const profileY = pDetails.top + pDetails.height * 0.5;

    const blob = document.querySelector("#blob-motion")
    const bDetails = blob.getBoundingClientRect();
    const blobX = profileX - bDetails.width * 0.5
    const blobY = profileY - bDetails.height * 0.5
    const blobW = pDetails.width * 1.68;
    const blobH = pDetails.height * 1.68;

    blob.style.cssText = "position:fixed;left:" + blobX + "px; top:" + blobY + "px; z-index: 1; width:" + blobW + "px; height:" + blobH + "px";
}

window.onload = window.onresize = window.onscroll = adjustBlob;