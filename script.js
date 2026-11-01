
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


const aboutPanels = document.querySelectorAll(".about-panel");

aboutPanels.forEach((panel) => {
    panel.addEventListener("click", () => {
        aboutPanels.forEach((item) => {
            item.classList.remove("active");
        });

        panel.classList.add("active");
    });

    panel.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            panel.click();
        }
    });
});

// Opening the portfolio at the Home section
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    if (window.location.hash) {
        history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search
        );
    }

    window.scrollTo(0, 0);
});



// Copy email address
const copyEmailButton = document.getElementById("copyEmail");

if (copyEmailButton) {
    copyEmailButton.addEventListener("click", async () => {
        const email = "YOUR_EMAIL@example.com";

        try {
            await navigator.clipboard.writeText(email);
            copyEmailButton.textContent = "Copied! ✓";
        } catch (error) {
            window.prompt("Copy this email address:", email);
        }

        setTimeout(() => {
            copyEmailButton.textContent = "Copy email";
        }, 2000);
    });
}

// Prepare an email from the contact form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const senderEmail = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        const recipient = "YOUR_EMAIL@example.com";

        const body =
            `Name: ${name}\n` +
            `Reply email: ${senderEmail}\n\n` +
            `${message}`;

        const mailtoLink =
            `mailto:${recipient}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        document.getElementById("formNote").textContent =
            "Opening your email application...";

        window.location.href = mailtoLink;
    });
}
