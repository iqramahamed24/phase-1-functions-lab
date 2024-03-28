// Code your solution in this file
const headquarter = 42
const block = 264
function distanceFromHqInBlocks(someValue) {
        return Math.abs(someValue - headquarter)
}
function distanceFromHqInFeet(someValue) {
    return Math.abs(someValue - headquarter ) * block
 }
distanceFromHqInFeet()
function distanceTravelledInFeet(start, destination) {
    return (Math.abs(destination - start) *264)   
}
distanceTravelledInFeet()
 
function calculatesFarePrice(start, destination) {
    const totalFeet = (Math.abs(destination - start) *264) 
    if (totalFeet < 400 ){
        return 0
    }else if (totalFeet < 2000) {
        return 2.56
    }else if (totalFeet < 2500) {
        return 25
    }else {
        return "cannot travel that far"
    }
    
}
calculatesFarePrice()
