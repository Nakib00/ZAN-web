// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the form element from the document
  const form = document.querySelector("form");

  // Create a paragraph element to display the response message
  const responseMessage = document.createElement("p");

  // Append the response message paragraph to the form
  form.appendChild(responseMessage);

  // Add a submit event listener to the form
  form.addEventListener("submit", function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Create a FormData object from the form
    const formData = new FormData(form);

    // Get the URL to which the form data should be submitted
    const url = form.action;

    // Show a loading animation while waiting for the server response
    responseMessage.textContent = "Sending...";
    responseMessage.style.color = "blue";

    // Send a POST request with the form data to the specified URL
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        // Handle the response from the server
        if (data === "Success") {
          // If the response is "Success," display a success message in green
          responseMessage.textContent =
            "Your message has been sent. Thank you!";
          responseMessage.style.color = "green";
          form.reset(); // Reset the form fields
        } else {
          // If the response is not "Success," display an error message in red
          responseMessage.textContent =
            "your message failed. Please try again.";
          responseMessage.style.color = "red";
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        responseMessage.textContent =
          "An error occurred. Please try again later.";
        responseMessage.style.color = "red";
      });
  });
});

// Footer data
const facebook = document.querySelector(".facebook");
const instagram = document.querySelector(".instagram");
const linkedin = document.querySelector(".linkedin");

facebook.href = "https://www.facebook.com/zanitbd/";
instagram.href = "https://www.instagram.com/zanitbd/";
linkedin.href = "https://www.linkedin.com/company/zan-it/?viewAsMember=true";

// Services data
import serviceData from "./data/Servicedata.js";

// console.log(serviceData.service);
const services = serviceData.service;

function serviceDataload(){
  const createElement = document.querySelector('.service-main');

  createElement.innerHTML=` ${services.map(function(service){
    return `
    <div class="service-main">
    <div class="row pt-4">
      <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="150">
        <img src="${service.image}" class="img-fluid" alt="">
      </div>
      <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
        <h3>${service.title}</h3>
        <p class="fst-italic">
          ${service.description}
        </p>
      </div>
    </div>
  </div>
    `
  }).join('')}`;

}

serviceDataload()
