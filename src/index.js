function init() {
  if (!window.addEventListener) return // Check for IE9+

  var options = INSTALL_OPTIONS

  function updateTarget() {
    document.title = options.title;

    var element = document.getElementById("redirect-frame");
    element.src = options.target;
  }

  // INSTALL_SCOPE is an object that is used to handle option changes without refreshing the page.
  window.INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions

      updateTarget()
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateTarget)
  } else {
    updateTarget()
  }
}

init()
