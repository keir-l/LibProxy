{

  "manifest_version": 1,
  "name": "LibProxy",
  "version": "1.0",

  "description": "Automatically loads Publications and Articles through a OpenURL Library proxy",

  "icons": {
    "128": "icon128.png"
  },

  "content_scripts": [
    {
      "matches": ["https://link.springer.com/", "https://www.link.springer.com/", "https://www.journals.sagepub.com/", "https://www.cambridge.org/", "https://www.tandfonline.com/", "https://www.jstor.org/", "https://www.heinonline.org/", "https://www.academic.oup.com/"],
      "js": ["proxy.js"]
    }
  ]

}
