(function (window) {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    for (var i in names) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      } else {
        helloSpeaker(names[i]);
      }
    }
  })(window);
  
  