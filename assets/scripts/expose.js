document.addEventListener('DOMContentLoaded', function(){

    function init() {
      let dropdown = document.getElementById("horn-select");
      let image = document.getElementById("horn-image");
      let audio = document.querySelector("audio");
      let selectedOpt;
      let volumeSlider = document.getElementById("volume");
      let volumeIcon = document.querySelector("#volume-controls img");
      let playButton = document.querySelector("button");
    
      dropdown.addEventListener("change", function(){
        selectedOpt = dropdown.value; // assign selected option to selectedOpt variable
        let imagePath = "";
    
        if(selectedOpt == "air-horn"){
          imagePath = "assets/images/air-horn.svg"
        }
        else if(selectedOpt == "car-horn"){
          imagePath = "assets/images/car-horn.svg";
        }
        else if(selectedOpt == "party-horn"){
          imagePath = "assets/images/party-horn.svg";
        }
        else{
          imagePath = "assets/images/no-image.png"; 
        }
        image.src = imagePath;
        
        // Update audio source here as well
        updateAudio();
      });
    
      function updateAudio() {
        let audioPath = ""
        if(selectedOpt == "air-horn"){
          audioPath = "assets/audio/air-horn.mp3"
        }
        else if(selectedOpt == "car-horn"){
          audioPath = "assets/audio/car-horn.mp3";
        }
        else if(selectedOpt == "party-horn"){
          audioPath = "assets/audio/party-horn.mp3";
        }
        audio.src = audioPath;
      }
    
      volumeSlider.addEventListener("input", function() {
        updateVolumeIcon();
        updateAudioVolume();
      });
    
      function updateVolumeIcon() {
        let volume = volumeSlider.value;
    
        if (volume == 0) {
          volumeIcon.src = "assets/icons/volume-level-0.svg";
          volumeIcon.alt = "Volume level 0";
        } else if (volume <= 33) {
          volumeIcon.src = "assets/icons/volume-level-1.svg";
          volumeIcon.alt = "Volume level 1";
        } else if (volume <= 66) {
          volumeIcon.src = "assets/icons/volume-level-2.svg";
          volumeIcon.alt = "Volume level 2";
        } else {
          volumeIcon.src = "assets/icons/volume-level-3.svg";
          volumeIcon.alt = "Volume level 3";
        }
      }
    
      playButton.addEventListener("click", function() {
        if (volumeSlider.value > 0) { // Check if volume is greater than 0
          if(selectedOpt == "party-horn") {
            const jsConfetti = new JSConfetti()
            jsConfetti.addConfetti({
              emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
            });
          }
          audio.play();
        }
      });
    
      function updateAudioVolume() {
        let volume = volumeSlider.value;
        audio.volume = volume / 100; // Convert volume value to a range between 0 and 1
      }
    }
    
    window.addEventListener('DOMContentLoaded', init);
  });  