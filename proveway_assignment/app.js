// Function to handle the click event on radio buttons
function toggleRadioButton(radioButtonId, radioDivClass) {
    // Get the clicked radio button and its corresponding div
    const radioButton = document.getElementById(radioButtonId);
    const radioDiv = document.getElementsByClassName(radioDivClass);
  
    // Array of radio button div classes
    const divClasses = ["first_radio_button", "second_radio_button", "third_radio_button"];
  
    // Iterate through each radio button div class
    divClasses.forEach((divClass) => {
      const currentDiv = document.getElementsByClassName(divClass);
  
      // Highlight the clicked radio button div, reset others
      currentDiv[0].style.backgroundColor =
        radioDivClass === divClass ? "rgba(244, 251, 249, 1)" : "initial";
      currentDiv[0].style.borderColor =
        radioDivClass === divClass ? "rgba(0, 127, 97, 1)" : "initial";
    });
  
    // Log the class of the clicked radio button div
    console.log(radioDivClass);
  
    // If radio button exists, check it and toggle its options
    if (radioButton) {
      radioButton.checked = true;
      toggleOptions(radioButtonId);
    }
  }
  
  // Function to toggle display of options based on selected radio button
  function toggleOptions(radioButtonId) {
    // Select all elements with the class 'label_left_select_option_div'
    const allOptionsDivs = document.querySelectorAll(".label_left_select_option_div");
  
    // Iterate through each options div
    allOptionsDivs.forEach((optionsDiv) => {
      // Find the associated radio button input using closest() method
      var associatedInput = optionsDiv.closest(".radio_buttons").querySelector('input[type="radio"]');
  
      // Check if associated input element is found
      if (associatedInput) {
        // Get the id attribute of the input element
        var inputId = associatedInput.id;
  
        // Log or use the inputId as needed
        console.log("ID of the associated input element:", inputId);
  
        // Set the display style based on the condition
        optionsDiv.style.display = inputId === radioButtonId ? "flex" : "none";
      } else {
        // Log an error if associated input element is not found
        console.error("Associated input element not found.");
      }
    });
  }