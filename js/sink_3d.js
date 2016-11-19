Plotly.d3.csv('usa_2016_plotly_noheader.csv', function(err, rows){
  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var z_data=[ ]
  for(i=0;i<1374;i++)
  {
    z_data.push(unpack(rows,i));
    console.log(unpack(rows,i))
  }

  var data = [{
             z: z_data,
             type: 'surface'
          }];

  var layout = {
    title: 'Mt Bruno Elevation',
    autosize: true,
    width: 800,
    height: 800,
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    }
  };
  console.log(data)
  Plotly.newPlot('myDiv', data, layout);
  });
