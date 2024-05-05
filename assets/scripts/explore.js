window.addEventListener('DOMContentLoaded', init);
function init() {
  let voiceSelect = document.getElementById("voice-select");
  const inputTxt = document.querySelector("textarea");
  const statusimg = document.querySelector("img");
  // Function to populate the voice dropdown with available voices
  function populateVoiceList() {
    let voices = speechSynthesis.getVoices();
    // Clear existing options
    voiceSelect.innerHTML = '';
    let defaultOption = document.createElement('option');
    defaultOption.value = 'select';
    defaultOption.textContent = 'Select Voice';
    defaultOption.selected = true; // Set as default selected
    voiceSelect.appendChild(defaultOption);
    // Add new options for each voice
    voices.forEach(function(voice, index) {
      let option = document.createElement('option');
      option.value = index;
      option.textContent = voice.name + ' (' + voice.lang + ')';
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }
  // Populate voice dropdown on page load
  populateVoiceList();
  // Update voice list whenever voices change
  speechSynthesis.onvoiceschanged = function() {
    populateVoiceList();
  };
  const press = document.querySelector("button");
  press.addEventListener("click", function() {
    // Check if the default option is selected
    if (voiceSelect.value === 'select') {
      // No valid voice selected, return without speaking
      return;
    }
    speakText();
    updateImage();
  });
  function speakText() {
    let selectedVoice = voiceSelect.selectedIndex;
    let selectedOption = voiceSelect[selectedVoice].value;
    let utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    utterThis.voice = speechSynthesis.getVoices()[selectedOption];
    speechSynthesis.speak(utterThis);
    utterThis.addEventListener('end', function() {
      statusimg.src = "assets/images/smiling.png";
    });
  }
  function updateImage() {
    statusimg.src = "assets/images/smiling-open.png";
  }
}