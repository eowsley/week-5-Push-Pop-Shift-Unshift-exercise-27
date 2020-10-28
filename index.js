const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

planets.shift();   // shift removes position zero
planets.push('Saturn')   // push adds new element to end of array
planets.unshift('Mercury')    // unshift adds position zero

console.log(planets)