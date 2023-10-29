document.addEventListener("DOMContentLoaded", () => {
    const imageDropdown = document.getElementById("imageDropdown");
    const selectedImage = document.getElementById("selectedImage");
  
    imageDropdown.addEventListener("change", () => {
      const selectedOption = imageDropdown.options[imageDropdown.selectedIndex];
      if (selectedOption.value) {
        selectedImage.style.display = "block"; // Show the image container
        selectedImage.innerHTML = `<img src="${selectedOption.value}" alt="Selected Image" width="300" height="200" />`;
  
        // Reset the dropdown to its default option (clear selection)
        imageDropdown.selectedIndex = 0;
      } else {
        selectedImage.style.display = "none"; // Hide the image container
        selectedImage.innerHTML = "";
      }
    });
    
    // Click event listener for the selected image
    selectedImage.addEventListener("click", () => {
      selectedImage.style.display = "none"; // Hide the image container
      selectedImage.innerHTML = "";
    });
  });
  