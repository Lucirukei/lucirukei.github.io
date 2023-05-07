const contentArray = Array.from(document.querySelectorAll(".bellow-content"));
const buttonArray = Array.from(document.querySelectorAll(".bellow-button"));

const expandAccordion = (pressedElement) => {

  if(pressedElement.classList.contains("active")){

    pressedElement.classList.remove("active");
    const activeContent = pressedElement.nextElementSibling;
    activeContent.style.maxHeight = null;
    return true;
  }

  for(const buttonElement of buttonArray){
    buttonElement.classList.remove("active");
  }

  pressedElement.classList.add("active");
  for(const contentElement of contentArray){
    contentElement.style.maxHeight = null;
  }

  const activeContent = pressedElement.nextElementSibling;

  activeContent.style.maxHeight = activeContent.scrollHeight + "px";
  return true;
};
