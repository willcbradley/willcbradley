// Filepath Arrays

    const what = [
        "what",
        "wealth",
        "reality",
        "value",
        "leverage",
        "goodwill",
        "runway",
        "commitment",
        "fundamentals",
        "truth",
        "creativity",
        "specificity",
        "transience",
        "abstraction",
        "compounding",
        "reputation",
        "luck",
        "patience",
        "hedging",
        "downside",
        "price",
        "adventure",
        "wisdom",
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
        "competition",
        "choice",
        "competence",
        "risk",
        "sincerity",
        "dialogue",
        "sacrifice",
        "optimism",
        "honour",
        "opportunity",
        "audacity",
        "humanity",
        "strength",
        "all2gether",
        "why-next"
    ];

// ****** Arrow Key Navigation

try {

    const pageName = window.location.pathname.slice(1)

    console.log(window.location.pathname)
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
        showMor();
    })

    morToggle.addEventListener("click", () => {
        showMat();
    })

    window.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            (mat.style.display === "block") ? showMor() : showMat()
        }
    })

} catch (error) {
   
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
   
}

// Principles Log (For ./scale Unlock)

try {
    document.addEventListener("DOMContentLoaded", () => {
        const current = window.location.pathname.slice(1);
        const inWhat = what.includes(current);
        const inWhy  = why.includes(current);

        if (inWhat || inWhy) {
            const raw = localStorage.getItem("principlesVisited");
            const visited = raw ? new Set(JSON.parse(raw)) : new Set();

            visited.add(current);

            localStorage.setItem("principlesVisited", JSON.stringify([...visited]));
        }
    });

    document.addEventListener("DOMContentLoaded", () => {

        console.log("alive")

        const current = window.location.pathname.slice(1)
        const raw = localStorage.getItem("principlesVisited");
        const visited = raw ? new Set(JSON.parse(raw)) : new Set();
        const visitedAll = [...why, ...what].every(element => visited.has(element))

        if (visited.size > 0 && (current === "what-next" || current === "why-next")) {
            if ((localStorage.getItem("epilogue") !== "true")) {
                localStorage.setItem("epilogue", visitedAll ? "true" : "false")
            }
            if (localStorage.getItem("epilogue") === "true") {
                const container = document.querySelector(".idea-margin");
                if (container) {
                    const p = document.createElement("p");
                    p.innerHTML = `P.S. You've unlocked the <a href="./scale">epilogue</a>.`;
                    container.appendChild(p);
                    console.log("p element appended:", container.innerHTML);
                }
            }
        }

        if (visited.size > 0 && (current === "principles" || current === "principles#m")) {
            if ((localStorage.getItem("epilogue") !== "true")) {
                localStorage.setItem("epilogue", visitedAll ? "true" : "false")
            }
            if (localStorage.getItem("epilogue") === "true") {
                const container = document.querySelectorAll(".flex-container");
                if (container) {
                    const card = document.createElement("a");
                    card.href = "./scale"
                    card.innerHTML = `<strong>Epilogue</strong>`;
                    card.classList.add('card')
                    container.appendChild(card);
                    console.log("p element appended:", container.innerHTML);
                }
            }
        }
    })
} catch (error) {
    console.error(error)
}