let statistics = {
    redCars: 21, 
    bluecars: 45, 
    greencars: 12, 
    racecars: 5, 
    blackCars: 40, 
    rareCars: 2
}

/* Given the above Object, write a for...in loop that will iterate through it 
and print out the value of the property if the property starts with the letter r, 
or if the value of that property is an odd number.  
(This should be in a JS file part2-question16.js)*/

for (let property in statistics) {
    if (property.startsWith('r') || statistics[property] % 2 !== 0) {
        console.log(statistics[property]);
    }
}

/* Output:
21
45
5
2
*/