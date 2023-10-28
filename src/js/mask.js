import IMask from "imask";

const mask = (elementId) => {
  const element = document.getElementById(elementId);
  const maskOptions = {
    mask: "+{375} (00) 000-00-00",
  };
  IMask(element, maskOptions);
};

export default mask;
