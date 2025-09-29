// ****** Arrow Key Navigation

try {
    const what = [
        "what",
        "wealth",
        "reality",
        "value",
        "leverage",
        "goodwill",
        "runway",
        "foundations",
        "truth",
        "creativity",
        "specificity",
        "transience",
        "abstraction",
        "compounding",
        "commitment",
        "reputation",
        "luck",
        "patience",
        "hedging",
        "downside",
        "price",
        "adventure",
        "alltogether",
        "what-next"
    ]
    const why = [
        "why",
        "hope",
        "priority",
        "brutality",
        "malevolence",
        "feedback",
        "delusion",
        "courage",
        "structure",
        "humility",
        "weakness",
        "aggression",
        "competence",
        "dialogue",
        "sacrifice",
        "optimism",
        "honour",
        "opportunity",
        "audacity",
        "all2gether",
        "why-next"
    ];

    const pageName = window.location.pathname.slice(1, (window.location.pathname.slice.length) - 7)

    console.log(pageName)

    const whichPrinciples = () => {
        if (what.includes(pageName)) {
            return "what";
        } else if (why.includes(pageName)) {
            return "why";
        } else {
            return;
        }
    }

    console.log(whichPrinciples())

    const pageIndex = () => {
        const which = whichPrinciples();
        if (which === "what") {
            return what.indexOf(pageName);
        } else if (which === "why") {
            return why.indexOf(pageName)
        } else {
            return;
        }
    }

    console.log(pageIndex())

    window.addEventListener("keydown", e => {
        const i = pageIndex();
        const p = whichPrinciples();

        if (i === -1) return;

        if (p === "why") {
            if (e.key === "ArrowRight" && i < why.length - 1) {
                window.location.href = why[i + 1];
            } else if (e.key === "ArrowLeft" && i > 0) {
                window.location.href = why[i - 1];
            }
        } else if (p === "what") {
            if (e.key === "ArrowRight" && i < what.length - 1) {
                window.location.href = what[i + 1];
            } else if (e.key === "ArrowLeft" && i > 0) {
                window.location.href = what[i - 1];
            }
        }

    })
 
} catch (error) {
    console.error(error)
}

// ****** Footer Toggle Width Sync

try {
    const ideaMargin = document.querySelector(".idea-margin")
    const fixed = document.querySelector(".fixed")

    const syncWidth = () => {
        const responsiveWidth = ideaMargin.getBoundingClientRect();
        fixed.style.width = responsiveWidth.width + "px";
        fixed.style.left = responsiveWidth.left + "px";
    }

    window.addEventListener("resize", syncWidth)
    window.addEventListener("scroll", syncWidth)
    syncWidth();
} catch (error) {
    console.error(error)
}
 

// ****** Principles Switch

try {
    const mat = document.querySelector("#mat")
    const mor = document.querySelector("#mor")
    const morToggle = document.querySelector("#mor-toggle")
    const matToggle = document.querySelector("#mat-toggle")

    const showMat = () => {
        mat.style.display = "block"
        mor.style.display = "none"
    }

    const showMor = () => {
        mat.style.display = "none"
        mor.style.display = "block"
    }

    if (window.location.hash === "#m") {
        showMor();
    } else {
        showMat();
    }

    matToggle.addEventListener("click", () => {
        mat.style.display = "none"
        mor.style.display = "block"
    })

    morToggle.addEventListener("click", () => {
        mat.style.display = "block"
        mor.style.display = "none"
    })
} catch (error) {
    console.error(error)
}



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