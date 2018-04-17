function opencours(evt, cothestype) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cothestype).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 30.045915,lng: 31.224290},
          zoom: 13
        });
        var tribeca = {lat: 30.045915,lng: 31.224290};
        var marker = new google.maps.Marker({
          position: tribeca,
          map: map,
          title: 'First Marker!'
        });
      }