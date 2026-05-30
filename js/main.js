/* -------------------------------------------------------------
 * PORTFOLIO INTERACTIVE SCRIPT
 * Author: Antigravity for Chidambaram Muthappan
 * ------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
     * 1. THEME SWITCHER (DARK / LIGHT MODE)
     * ========================================== */
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    // Load theme from localStorage or default to system preference (or dark)
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    
    if (savedTheme) {
        htmlElement.setAttribute("data-theme", savedTheme);
    } else {
        htmlElement.setAttribute("data-theme", systemPrefersLight ? "light" : "dark");
    }

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });


    /* ==========================================
     * 2. DYNAMIC SCROLL REVEAL & NAVIGATION HIGHLIGHT
     * ========================================== */
    const sections = document.querySelectorAll(".reveal-on-scroll");
    const navLinks = document.querySelectorAll(".nav-link");

    // Scroll reveal observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    });

    sections.forEach(section => {
        revealObserver.observe(section);
    });

    // Navigation highlight observer
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute("id");
                
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, {
        threshold: 0.4,
        rootMargin: "-20% 0px -40% 0px"
    });

    sections.forEach(section => {
        navObserver.observe(section);
    });





    /* ==========================================
     * 4. KEYCHAIN GALLERY FILTERING
     * ========================================== */
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryCards = document.querySelectorAll(".gallery-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active state from all buttons and add to clicked
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            galleryCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");

                if (filterValue === "all" || cardCategory === filterValue) {
                    // Smooth reveal transition
                    card.classList.remove("hidden");
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "scale(1)";
                    }, 50);
                } else {
                    // Smooth fade out transition
                    card.style.opacity = "0";
                    card.style.transform = "scale(0.95)";
                    setTimeout(() => {
                        card.classList.add("hidden");
                    }, 300);
                }
            });
        });
    });


    /* ==========================================
     * 5. ZERO-DEPENDENCY LIGHTBOX MODAL
     * ========================================== */
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("lightbox-close-btn");

    galleryCards.forEach(card => {
        card.addEventListener("click", () => {
            const img = card.querySelector(".keychain-img");
            const title = card.querySelector(".keychain-title").textContent;
            const location = card.querySelector(".keychain-loc").textContent;

            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.innerHTML = `<strong>${title}</strong> &ndash; ${location}`;
            
            // Activate modal
            lightbox.style.display = "flex";
            lightbox.setAttribute("aria-hidden", "false");
            setTimeout(() => {
                lightbox.classList.add("active");
            }, 10);
        });
    });

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        setTimeout(() => {
            lightbox.style.display = "none";
        }, 300);
    }

    closeBtn.addEventListener("click", closeLightbox);
    
    // Close lightbox when clicking outside the content image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox || e.target.classList.contains("lightbox-content")) {
            closeLightbox();
        }
    });

    // Close on Escape Key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });

    /* ==========================================
     * 6. EMAIL COPY TO CLIPBOARD MICRO-INTERACTION
     * ========================================== */
    const copyBtns = document.querySelectorAll(".copy-email-btn");

    copyBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            const emailText = "chidambaram70@gmail.com";
            const tooltip = btn.querySelector(".tooltip-text");

            navigator.clipboard.writeText(emailText).then(() => {
                tooltip.textContent = "Copied!";
                btn.style.color = "var(--accent)";
                btn.style.borderColor = "var(--accent)";

                setTimeout(() => {
                    tooltip.textContent = "Copy";
                    btn.style.color = "";
                    btn.style.borderColor = "";
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy text: ", err);
            });
        });
    });

    /* ==========================================
     * 7. COLLAPSIBLE TIMELINE CARDS
     * ========================================== */
    const toggleDetailsBtns = document.querySelectorAll(".toggle-details-btn");

    toggleDetailsBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const timelineContent = btn.closest(".timeline-content");
            const wrapper = timelineContent.querySelector(".collapsible-wrapper");
            const toggleText = btn.querySelector(".toggle-text");
            const isExpanded = btn.getAttribute("aria-expanded") === "true";

            // Toggle active classes
            btn.setAttribute("aria-expanded", !isExpanded);
            btn.classList.toggle("active");
            wrapper.classList.toggle("expanded");

            // Update text
            if (isExpanded) {
                toggleText.textContent = "Show Details";
            } else {
                toggleText.textContent = "Hide Details";
            }
        });
    });

});
