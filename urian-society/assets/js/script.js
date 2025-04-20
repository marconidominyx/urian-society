// Theme Management
document.addEventListener("DOMContentLoaded", () => {
	initializeTheme();
	setupThemeToggle();
	updateCopyright();
	setupEventListeners();
});

function initializeTheme() {
	const savedTheme = localStorage.getItem("theme") || "light";
	applyTheme(savedTheme);
}

function applyTheme(theme) {
	document.documentElement.setAttribute("data-theme", theme);
	const icon = document.querySelector("#themeToggle i");
	if (icon) {
		icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
	}
	localStorage.setItem("theme", theme);
}

function setupThemeToggle() {
	const themeToggle = document.getElementById("themeToggle");
	if (themeToggle) {
		themeToggle.addEventListener("click", toggleTheme);
		themeToggle.addEventListener("touchend", (e) => {
			e.preventDefault();
			toggleTheme();
		});
	}
}

function toggleTheme() {
	const currentTheme =
		document.documentElement.getAttribute("data-theme") || "light";
	const newTheme = currentTheme === "light" ? "dark" : "light";
	applyTheme(newTheme);
}

// Resume Modal Functions
function openResumeModal() {
	document.getElementById("resumeModal").style.display = "block";
	document.body.style.overflow = "hidden";
	resetZoom();
}

function closeResumeModal() {
	document.getElementById("resumeModal").style.display = "none";
	document.body.style.overflow = "auto";
	resetZoom();
}

function resetZoom() {
	const resumeImage = document.querySelector(".resume-image");
	resumeImage.style.transform = "scale(1)";
	updateZoomPercentage(1);
}

function updateZoomPercentage(scale) {
	const zoomPercentage = document.querySelector(".zoom-percentage");
	if (zoomPercentage) {
		zoomPercentage.textContent = `${Math.round(scale * 100)}%`;
	}
}

function zoomResume(direction) {
	const resumeImage = document.querySelector(".resume-image");
	const currentScale =
		parseFloat(
			resumeImage.style.transform.replace("scale(", "").replace(")", "")
		) || 1;
	let newScale;

	if (direction === "in") {
		newScale = Math.min(3, currentScale + 0.2); // Max zoom 300%
	} else {
		newScale = Math.max(0.5, currentScale - 0.2); // Min zoom 50%
	}

	resumeImage.style.transform = `scale(${newScale})`;
	updateZoomPercentage(newScale);
}

// Utility Functions
function updateCopyright() {
	const yearSpan = document.getElementById("currentYear");
	if (yearSpan) {
		yearSpan.textContent = new Date().getFullYear();
	}
}

// Event Listeners Setup
function setupEventListeners() {
	// Modal close on outside click
	window.onclick = function (event) {
		const modal = document.getElementById("resumeModal");
		if (event.target === modal) {
			closeResumeModal();
		}
	};

	// Modal close on escape key
	document.addEventListener("keydown", function (event) {
		if (event.key === "Escape") {
			closeResumeModal();
		}
	});

	// Smooth scrolling for navigation links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		});
	});
}
