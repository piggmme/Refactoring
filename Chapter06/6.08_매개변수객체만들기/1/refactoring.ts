export const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

export function readingsOutsideRange(station, range) {
  return station.readings.filter(
    (r) => r.temp < range.min || r.temp > range.max
  );
}

export class NumberRange {
  private _data: { min: any; max: any };
  constructor(min, max) {
    this._data = { min: min, max: max };
  }
  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
}

// const operatingPlan = {
//   temperatureFloor: 47,
//   temperatureCeil: 51,
// };

// const range = new NumberRange(
//   operatingPlan.temperatureFloor,
//   operatingPlan.temperatureCeil
// );

// const alerts = readingsOutsideRange(station, range);
