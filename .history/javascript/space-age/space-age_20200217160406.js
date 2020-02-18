const earthYearInSec = 31_557_600

const orbitalPeriod = {
  "Mercury": earthYearInSec * 0.2408467,
  "Venus": earthYearInSec * 0.61519726,
  "Earth": earthYearInSec * 1.0,
  "Mars": earthYearInSec * 1.8808158,
  "Jupiter": earthYearInSec * 11.862615,
  "Saturn": earthYearInSec * 29.447498,
  "Uranus": earthYearInSec * 84.016846,
  "Neptune": earthYearInSec * 164.79132
}

export const age = (orbit,year) => {
  let temp = orbitalPeriod[orbit];
  return temp/year*10;
};
