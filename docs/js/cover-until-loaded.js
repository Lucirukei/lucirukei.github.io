onload = function () {
	console.log(`page is fully loaded`);
	const loadingCover = document.getElementById(`container`);
	setTimeout(() => {
		loadingCover.classList.remove(`hide`);
	}, 250);
}
