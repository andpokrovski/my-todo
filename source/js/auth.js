;
(function () {
  var authPopup = new Modal('.auth');

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
  function onClientLoad() {
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
      authorizeButton.onclick = onAuthClick;
      signoutButton.onclick = onSignoutClick;
    }, function (error) {
      console.log(JSON.stringify(error, null, 2));
    });
  }

  /**
   *  Called when the signed in status changes, to update the UI
   *  appropriately. After a sign-in, the API is called.
   */
  function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      list.setDefaultDate();
      list.update(new Date);
      authPopup.close();
    }
  }

  /**
   *  Sign in the user upon button click.
   */
  function onAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
  }

  /**
   *  Sign out the user upon button click.
   */
  function onSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
    list.resetDefaultDate();
    items.clear();
    storage.clear();
    authPopup.open();
    font.reset();
  }


  document.addEventListener("DOMContentLoaded", function () {
    onClientLoad();
  });

})();
