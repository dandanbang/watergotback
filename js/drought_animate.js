$( document ).ready(function() {
  var images = Array("js/cali_drought/20111220_ca_none.png", "js/cali_drought/20120306_ca_none.png", "js/cali_drought/20130219_ca_none.png", "js/cali_drought/20140527_ca_none.png", "js/cali_drought/20150120_ca_none.png")
  var display_dates = Array("2011", "2012", "2013", "2014", "2015", "2015")
  var imgc =0;
  setImage()

  function setImage() {
      var newimage = images[imgc];
      if (imgc < 5)  {
        imgc++;
        $('#drought').attr("src", newimage).fadeIn(50);
        $("#year").html('<h2>' + display_dates[imgc]+'<h2>');
      setTimeout(setImage, 1000);
      }
  };
});
