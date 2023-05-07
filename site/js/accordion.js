const contentArray = Array.from(document.querySelectorAll(`.bellow-content`));
const buttonArray = Array.from(document.querySelectorAll(`.bellow-button`));

// eslint-disable-next-line no-unused-vars
function expandAccordion(pressedElement) {

	const activeContent = pressedElement.nextElementSibling;

	if (pressedElement.classList.contains(`active`)) {

		pressedElement.classList.remove(`active`);
		activeContent.style.maxHeight = null;
		return true;
	}

	for (const buttonElement of buttonArray) {
		buttonElement.classList.remove(`active`);
	}

	pressedElement.classList.add(`active`);
	for (const contentElement of contentArray) {
		contentElement.style.maxHeight = null;
	}

	activeContent.style.maxHeight = `${activeContent.scrollHeight}px`;
	return true;
}
