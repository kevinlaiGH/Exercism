const earthYearInSec = 31557600

// const orbitalPeriod = {
//   "mercury": earthYearInSec * 0.2408467,
//   "venus": earthYearInSec * 0.61519726,
//   "earth": earthYearInSec * 1.0,
//   "mars": earthYearInSec * 1.8808158,
//   "jupiter": earthYearInSec * 11.862615,
//   "saturn": earthYearInSec * 29.447498,
//   "uranus": earthYearInSec * 84.016846,
//   "neptune": earthYearInSec * 164.79132
// }


export const age = (orbit,year) => {
  let temp = orbitalPeriod[orbit];
  let answer = temp/year*1000;
  return answer;
};

// console.log(typeof(orbitalPeriod["Mercury"]))
