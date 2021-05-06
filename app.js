// this code is for showing a message for the user

/*alert ('wellcome Tourist')

var firsttime =prompt('Have you visited wadi ben hammad?')
if (firsttime == 'yes'){
  document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWEGi4Jk9vgO2Sdd12uRwvf5HAFLi1cLUnkg&usqp=CAU">')
}else if(firsttime ==='no'){
  document.write('<img src="https://pvt.jo/uploads/filemanager/Photos/Wadi%20Hammad/Wadi%20Ibn%20Hammad%203site_800x500.jpg">')
}else {
  alert ('ok you must visit it')
  }
*/  
////// i want to ask user how many time visit wadi ben hammad


var askuser = prompt('did you visit wadi ben hammad?')

while (askuser !=='yes' && askuser !=='no') {
  askuser = prompt('please answer yes or no')
}

var visitcount =prompt ('how many time you want visit wadi ben hammad? ')

var image = ''
for(var y = 0; y < visitcount ;y++){
  if (askuser === 'yes'){
    image = image + '<img src="https://www.terhaal.com/upload/media_Canyoning/Wadi_Ibin_Hammad_Canyon_Jordan_4.jpg">'
  }
  else if (askuser === 'no'){
    image = image + '<img src= "https://www.hiking-in-jordan.com/images/Wadi%20Bin%20Hammad%20Tropical%20Rain%20Forest%20Trail%20-%20In%20the%20Wadi%20-%20Hiking%20in%20Jordan.jpg.jpg">'
  }
}
document.write(image)