
(window.locales = window.locales || {}).weblab_locale = {
  addCSSButton: function(d) { return "Add CSS"; },
  addImageButton: function(d) { return "Add Image"; },
  addHTMLButton: function(d) { return "Add HTML"; },
  closeFullscreenPreview: function(d) { return "Close fullscreen preview"; },
  currentProjectCapacity: function(d) { return d.currentMegabytes + "MB of " + d.totalMegabytes + "MB used"; },
  disallowedHtml: function(d) { return "The file \"" + d.filename + "\" contains HTML elements that are not allowed: `" + d.disallowedTags + "`. They will be removed when this dialog is closed."; },
  errorSavingProject: function(d) { return "Something didn't work while auto-saving your project. Check your internet connection and try manually saving. If this problem persists, try reloading the page to start over."; },
  fatalError: function(d) { return "Fatal Error: " + d.message + ". If you're in Private Browsing mode, data can't be written."; },
  loadFailure: function(d) { return "We're sorry, Web Lab failed to load for some reason. Error: " + d.message; },
  openFullscreenPreview: function(d) { return "Open fullscreen preview"; },
  refreshPreview: function(d) { return "Refresh and Save"; },
  reloading: function(d) { return "Reloading..."; },
  reset: function(d) { return "Reset Web Lab"; },
  resetComplete: function(d) { return "Web Lab Reset Complete"; },
  resetFailure: function(d) { return "Failed to reset Web Lab: " + d.message + "."; },
  toggleInspectorOn: function(d) { return "Inspector: Off"; },
  toggleInspectorOff: function(d) { return "Inspector: On"; },
  troubleshootingSupport: function(d) { return "Please see our support article [\"Troubleshooting Web Lab problems\"](" + d.url + ") for more information."; },
  uploadError: function(d) { return "Upload Error"; }
};