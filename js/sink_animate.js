$( document ).ready(function() {
  var images = Array("js/cali_sink/2002_cropped.svg", "js/cali_sink/2003_cropped.svg", "js/cali_sink/2004_cropped.svg", "js/cali_sink/2005_cropped.svg", "js/cali_sink/2006_cropped.svg",
                     "js/cali_sink/2007_cropped.svg", "js/cali_sink/2008_cropped.svg", "js/cali_sink/2009_cropped.svg", "js/cali_sink/2010_cropped.svg", "js/cali_sink/2011_cropped.svg",
                     "js/cali_sink/2012_cropped.svg", "js/cali_sink/2013_cropped.svg", "js/cali_sink/2014_cropped.svg", "js/cali_sink/2015_cropped.svg", "js/cali_sink/2016_cropped.svg")
  var display_dates = Array("2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016")
  var imgc =0;
  setImage()

  function setImage() {
      var newimage = images[imgc];
      if (imgc < 100)  {
        $('#sink').attr("src", newimage).fadeIn(50);
        $("#sink_year").html('<h4>' + display_dates[imgc]+'<h4>');
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
