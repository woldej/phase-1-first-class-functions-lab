const returnFirstTwoDrivers=function(theArray){return theArray.slice(0,2)} ;

const returnLastTwoDrivers=function (theArray){return theArray.slice(-2)};

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(x){
    return function(){return x*5}
}
function fareDoubler(y){
    const createFareMultiplier=function(){return y*2}
    return createFareMultiplier()
}

function fareTripler(z){
    const createFareMultiplier=function(){return z*3}
    return createFareMultiplier()
}

const selectDifferentDrivers=function(theArray,returnLastTwoDrivers){

    return returnLastTwoDrivers(theArray)
}
