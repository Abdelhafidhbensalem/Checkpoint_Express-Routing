var path=require("path");
var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    console.log(`Requested at: ${req.requestTime} `)
    var date = new Date();
    console.log(date)
    var hour = date.getHours();
    console.log(hour)
    var day = date.getDay();
    /*var minutes= date.getMinutes();
    console.log(minutes)
    0: sunday 1:monday  2: tuesday  3:wednesday  4:thursday  5: friday  6:saturday*/
    if (day === 0 || day === 6 || hour < 9 || hour > 23) {
        var parentDir = path.normalize(__dirname+"/..");
        res.sendFile(path.join(parentDir+'/public/closed.html'))
       console.log( parentDir+'/public/closed.html');
    }
    else next();
};
module.exports = requestTime;
