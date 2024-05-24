var Register = "none"
var Link4Code = window.location
var str = "" + Link4Code + ""
var Code = str.substr(-22);
console.log(Code)
var run = function myfunction() {
  function getCookieValue(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }
  var codeValue = getCookieValue("code");
  var OG = codeValue
  document.getElementById("copyText").value = OG
  document.getElementById("copyText").style.color = "Green";
send = function myfunction(){
        window.location = "/OTSMachines/Register.Html#" + OG 
}

  
}
var cookie = document.cookie;
// Check if the cookie contains the key with value "true"
if (cookie.includes("WasHere=true")) {
  console.log("this user was here");
  document.getElementById("copyText").value = Key
  run()
} else {
  document.cookie = "WasHere=true"
  document.cookie = "code=" + Key + ""
  document.getElementById("copyText").style.color = "Green";
}


