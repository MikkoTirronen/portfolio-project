
export const updateCounter = () => {
  const message = document.getElementById("message");
  const messageCounter = document.getElementById("messageCounter");
  messageCounter.textContent = `${message.value.length}/${message.maxLength}`;
};

export function AddCharacterCounter() {
  message.addEventListener("input", updateCounter);
}