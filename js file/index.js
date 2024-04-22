
    // Get a reference to the "Sign-up" button by its id
    const signupButton = document.getElementById('signup-btn');

    // Add a click event listener to the button
    signupButton.addEventListener('click', function() {
        // Redirect the user to the sign-up page
        window.location.href = 'sign up.html'; // Replace 'signup.html' with the actual URL of your sign-up page
    });



    // Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();