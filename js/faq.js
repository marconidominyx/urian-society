/**
 * FAQ Accordion Functionality
 * Handles the FAQ accordion toggle behavior
 */

document.addEventListener("DOMContentLoaded", function () {
	const faqItems = document.querySelectorAll(".faq-item");

	if (faqItems.length === 0) {
		return;
	}

	faqItems.forEach((item) => {
		const question = item.querySelector(".faq-question");

		if (!question) {
			return;
		}

		question.addEventListener("click", () => {
			const isActive = item.classList.contains("active");

			// Close all other items
			faqItems.forEach((otherItem) => {
				if (otherItem !== item) {
					otherItem.classList.remove("active");
				}
			});

			// Toggle current item
			item.classList.toggle("active");
		});
	});
});
