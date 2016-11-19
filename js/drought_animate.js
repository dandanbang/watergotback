$( document ).ready(function() {
  var images = Array("js/cali_drought/201001.png", "js/cali_drought/201002.png", "js/cali_drought/201101.png", "js/cali_drought/201102.png", "js/cali_drought/201201.png",
                     "js/cali_drought/201202.png", "js/cali_drought/201301.png", "js/cali_drought/201302.png", "js/cali_drought/201401.png", "js/cali_drought/201402.png",
                     "js/cali_drought/201501.png", "js/cali_drought/201502.png", "js/cali_drought/201601.png", "js/cali_drought/201602.png")
  var display_dates = Array("2010", "2010", "2011", "2011", "2012", "2012", "2013", "2013", "2014", "2014", "2015", "2015", "2016", "2016", "2016", "2016")
  var imgc =0;
  setImage()

  function setImage() {
      var newimage = images[imgc];
      if (imgc < 100)  {
        $('#drought').attr("src", newimage).fadeIn(50);
        $("#year").html('<h4>' + display_dates[imgc]+'<h4>');
        imgc++;

      setTimeout(function() {
        setImage()
        ;}, 500);
        if (imgc > 15) {
          imgc = 0;
        }
      }
  };
});
