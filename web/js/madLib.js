function fun()
{
  var name1 = document.getElementById("name1").value;
  var animal = document.getElementById("animal").value;
  var verb1 = document.getElementById("verb1").value;
  var adjective = document.getElementById("adjective").value;
  var noun = document.getElementById("noun").value;
  var verb2 = document.getElementById("verb2").value;
  var conjunction = document.getElementById("conjunction").value;
  var name2 = document.getElementById("name2").value;
  var verb3= document.getElementById("verb3").value;
  var noun2 = document.getElementById("noun2").value;
  
  var storyDiv = document.getElementById("story");

  storyDiv.innerHTML=name1 + " has a " + animal + " and "+ verb1 + "ed it." +  " It is " + adjective + " because the " + noun + 
  " " + verb2 + "ed " + conjunction + " " + name2 + " " +  verb3 + "ed " + noun2 + ".";  

};

var useButton = document.getElementById('use-button');
useButton.addEventListener('click', fun)