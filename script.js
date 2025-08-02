// ****** MedEntry Expand/Collapse List

try {
    
    const medentryList = document.getElementById("medentry-ul");
    const medentryShowButton = document.querySelector("#medentry-li .show-toggle");
    const medentryHideButton = document.querySelector("#medentry-ul .show-toggle");


    // Show The List
    medentryShowButton.addEventListener("click", () => {
        medentryList.style.display = "block";
        medentryHideButton.style.display = "block";
        medentryShowButton.style.display = "none";
    })

    // Close The list
    medentryHideButton.addEventListener("click", () => {
        medentryList.style.display = "none";
        medentryHideButton.style.display = "none";
        medentryShowButton.style.display = "block";
    })

} catch (error) {
    console.error (error)
}





// ****** Video Modal Open/Close Logic

try {

    document.addEventListener('DOMContentLoaded', () => {
    const modal      = document.getElementById('videoModal');
    const videoEl    = document.getElementById('modalVideo');
    const sourceEl   = videoEl.querySelector('source');
    const closeBtn   = document.getElementById('closeModal');

    // Open any link with .video-link
    document.querySelectorAll('.video-link').forEach(link => {
        link.addEventListener('click', e => {
        console.log("Link Click Detected")
            e.preventDefault();
        const videoSrc = link.dataset.video;
        sourceEl.src    = videoSrc;
        videoEl.load();         // reload new source
        modal.style.display = 'flex';
        });
    });

    // Close logic
    function closeModal() {
        videoEl.pause();
        sourceEl.src = '';
        modal.style.display = 'none';
    }

    closeBtn.addEventListener('click', closeModal);

    // click outside to close
    window.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });
    });

} catch {
    console.error(error)
}