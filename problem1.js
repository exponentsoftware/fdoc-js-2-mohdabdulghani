// Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name






const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]
  
  
  
  const arr = [];
  
  for (var i=0;i<countries.length;i++){
    arr.push([countries[i],countries[i].slice(0,3),countries[i].length ])
  }
  
  console.table(arr);