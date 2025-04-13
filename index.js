//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work


const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

function convertFToC(tempInFahrenheit) {
    return (tempInFahrenheit - 32) * 5 / 9
}

function convertCToF(tempInCelsius) {
    return ((tempInCelsius * 9 / 5) + 32)
}


const tot_temperature_in_celsius = convertFToC(day1TempF) + convertFToC(day3TempF) + convertFToC(day5TempF) + convertFToC(day7TempF) + convertFToC(day9TempF)
    + convertFToC(day11TempF) + convertFToC(day13TempF) + convertFToC(day15TempF) + convertFToC(day17TempF) + convertFToC(day19TempF)
    + convertFToC(day21TempF) + convertFToC(day23TempF) + convertFToC(day25TempF) + convertFToC(day27TempF) + convertFToC(day29TempF)
    + day2TempC + day4TempC + day6TempC + day8TempC + day10TempC + day12TempC + day14TempC + day16TempC + day18TempC + day20TempC + day22TempC
    + day24TempC + day26TempC + day28TempC + day30TempC

const tot_temperature_in_fahrenheit = convertCToF(day2TempC) + convertCToF(day4TempC) + convertCToF(day6TempC) + convertCToF(day8TempC) + convertCToF(day10TempC)
    + convertCToF(day12TempC) + convertCToF(day14TempC) + convertCToF(day16TempC) + convertCToF(day18TempC) + convertCToF(day20TempC)
    + convertCToF(day22TempC) + convertCToF(day24TempC) + convertCToF(day26TempC) + convertCToF(day28TempC) + convertCToF(day30TempC)
    + day1TempF + day3TempF + day5TempF + day7TempF + day9TempF + day11TempF + day13TempF
    + day15TempF + day17TempF + day19TempF + day21TempF + day23TempF + day25TempF + day27TempF + day29TempF




const avg_temperature_in_celsius = tot_temperature_in_celsius / 30
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30

console.log(tot_temperature_in_celsius)
console.log(tot_temperature_in_fahrenheit)

console.log(avg_temperature_in_celsius)
console.log(avg_temperature_in_fahrenheit)


module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};


// const tot_temperature_in_fahrenheit = day1TempF + day3TempF + day5TempF + day7TempF + day9TempF + day11TempF + day13TempF
//     + day15TempF + day17TempF + day19TempF + day21TempF + day23TempF + day25TempF + day27TempF + day29TempF

// const tot_temperature_in_celsius = day2TempC + day4TempC + day6TempC + day8TempC + day10TempC
//     + day12TempC + day14TempC + day16TempC + day18TempC + day20TempC + day22TempC
//     + day24TempC + day26TempC + day28TempC + day30TempC