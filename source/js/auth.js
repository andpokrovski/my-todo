var authPopup = new Modal({
  modal: '.auth',
});

// var popup = document.querySelector('.my-todo__authorization');

// var authOpen = function () {
//   popup.classList.toggle('d-none', false);
// }

// var authClose = function () {
//   popup.classList.toggle('d-none', true);
//   // popup.classList.add('d-none');
// }



// Client ID and API key from the Developer Console
var CLIENT_ID = '275521875892-icq30gfodvskd45gmn0gkaebeuqko36d.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAMYDRrik_DUzxORRSm5BJFUuzjiJkZlO8';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar";

var authorizeButton = document.getElementById('auth-button');
var signoutButton = document.getElementById('signout-button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}


/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function (error) {
    alert.show(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    // authorizeButton.style.display = 'none';
    // signoutButton.style.display = 'block';
    myTodo.list();
    authPopup.close();
  } else {
    // authorizeButton.style.display = 'block';
    // signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
  authPopup.open();
}




window.auth = {
  // open: authOpen,
  // close: authClose,
  handleClientLoad: handleClientLoad,
}


document.addEventListener("DOMContentLoaded", function () {
  handleClientLoad();
});
