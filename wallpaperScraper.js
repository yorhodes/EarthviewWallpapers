var fs = require('fs')
var request = require('request')
var earthview = require('./earthview.json')

earthview.forEach((imageObj) => {
    var fileName = imageObj.image.replace(
        "https://www.gstatic.com/prettyearth/assets/full/",
        imageObj.country + "-" + imageObj.region + "-"
    );
    request(imageObj.image).pipe(
        fs.createWriteStream("assets/" + fileName)
    );
})
