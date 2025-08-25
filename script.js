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

// ****** DL Expand/Collapse List

try { 
    
    console.log("Alive")
    const dlList = document.getElementById("dl-ul");
    const dlShowButton = document.querySelector("#dl-li .show-toggle");
    const dlHideButton = document.querySelector("#dl-ul .show-toggle");


    // Show The List
    dlShowButton.addEventListener("click", () => {
        dlList.style.display = "block";
        dlHideButton.style.display = "block";
        dlShowButton.style.display = "none";
    })

    // Close The list
    dlHideButton.addEventListener("click", () => {
        dlList.style.display = "none";
        dlHideButton.style.display = "none";
        dlShowButton.style.display = "block";
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
    window.addEventListener('pointerdown', e => {
        if (e.target === modal) closeModal();
    });
    });

} catch {
    console.error(error)
}