export const unitCategories = {
  length: {
    name: 'Length',
    units: {
      meter: { name: 'Meter', symbol: 'm', factor: 1 },
      kilometer: { name: 'Kilometer', symbol: 'km', factor: 1000 },
      centimeter: { name: 'Centimeter', symbol: 'cm', factor: 0.01 },
      millimeter: { name: 'Millimeter', symbol: 'mm', factor: 0.001 },
      micrometer: { name: 'Micrometer', symbol: 'μm', factor: 0.000001 },
      nanometer: { name: 'Nanometer', symbol: 'nm', factor: 0.000000001 },
      inch: { name: 'Inch', symbol: 'in', factor: 0.0254 },
      foot: { name: 'Foot', symbol: 'ft', factor: 0.3048 },
      yard: { name: 'Yard', symbol: 'yd', factor: 0.9144 },
      mile: { name: 'Mile', symbol: 'mi', factor: 1609.344 },
      nauticalMile: { name: 'Nautical Mile', symbol: 'nmi', factor: 1852 },
      angstrom: { name: 'Angstrom', symbol: 'Å', factor: 0.0000000001 },
      lightYear: { name: 'Light Year', symbol: 'ly', factor: 9.461e15 },
      parsec: { name: 'Parsec', symbol: 'pc', factor: 3.086e16 }
    }
  },
  
  mass: {
    name: 'Mass/Weight',
    units: {
      kilogram: { name: 'Kilogram', symbol: 'kg', factor: 1 },
      gram: { name: 'Gram', symbol: 'g', factor: 0.001 },
      milligram: { name: 'Milligram', symbol: 'mg', factor: 0.000001 },
      microgram: { name: 'Microgram', symbol: 'μg', factor: 0.000000001 },
      tonne: { name: 'Tonne', symbol: 't', factor: 1000 },
      pound: { name: 'Pound', symbol: 'lb', factor: 0.453592 },
      ounce: { name: 'Ounce', symbol: 'oz', factor: 0.0283495 },
      stone: { name: 'Stone', symbol: 'st', factor: 6.35029 },
      ton: { name: 'Ton (US)', symbol: 'ton', factor: 907.185 },
      carat: { name: 'Carat', symbol: 'ct', factor: 0.0002 },
      grain: { name: 'Grain', symbol: 'gr', factor: 0.0000648 }
    }
  },

  temperature: {
    name: 'Temperature',
    units: {
      celsius: { name: 'Celsius', symbol: '°C' },
      fahrenheit: { name: 'Fahrenheit', symbol: '°F' },
      kelvin: { name: 'Kelvin', symbol: 'K' },
      rankine: { name: 'Rankine', symbol: '°R' }
    }
  },

  volume: {
    name: 'Volume',
    units: {
      liter: { name: 'Liter', symbol: 'L', factor: 1 },
      milliliter: { name: 'Milliliter', symbol: 'mL', factor: 0.001 },
      cubicMeter: { name: 'Cubic Meter', symbol: 'm³', factor: 1000 },
      cubicCentimeter: { name: 'Cubic Centimeter', symbol: 'cm³', factor: 0.001 },
      gallon: { name: 'Gallon (US)', symbol: 'gal', factor: 3.78541 },
      quart: { name: 'Quart (US)', symbol: 'qt', factor: 0.946353 },
      pint: { name: 'Pint (US)', symbol: 'pt', factor: 0.473176 },
      cup: { name: 'Cup (US)', symbol: 'cup', factor: 0.236588 },
      fluidOunce: { name: 'Fluid Ounce (US)', symbol: 'fl oz', factor: 0.0295735 },
      tablespoon: { name: 'Tablespoon', symbol: 'tbsp', factor: 0.0147868 },
      teaspoon: { name: 'Teaspoon', symbol: 'tsp', factor: 0.00492892 },
      imperialGallon: { name: 'Gallon (Imperial)', symbol: 'imp gal', factor: 4.54609 },
      barrel: { name: 'Barrel (Oil)', symbol: 'bbl', factor: 158.987 }
    }
  },

  area: {
    name: 'Area',
    units: {
      squareMeter: { name: 'Square Meter', symbol: 'm²', factor: 1 },
      squareKilometer: { name: 'Square Kilometer', symbol: 'km²', factor: 1000000 },
      squareCentimeter: { name: 'Square Centimeter', symbol: 'cm²', factor: 0.0001 },
      squareMillimeter: { name: 'Square Millimeter', symbol: 'mm²', factor: 0.000001 },
      hectare: { name: 'Hectare', symbol: 'ha', factor: 10000 },
      acre: { name: 'Acre', symbol: 'ac', factor: 4046.86 },
      squareFoot: { name: 'Square Foot', symbol: 'ft²', factor: 0.092903 },
      squareInch: { name: 'Square Inch', symbol: 'in²', factor: 0.00064516 },
      squareYard: { name: 'Square Yard', symbol: 'yd²', factor: 0.836127 },
      squareMile: { name: 'Square Mile', symbol: 'mi²', factor: 2589988.11 }
    }
  },

  time: {
    name: 'Time',
    units: {
      second: { name: 'Second', symbol: 's', factor: 1 },
      millisecond: { name: 'Millisecond', symbol: 'ms', factor: 0.001 },
      microsecond: { name: 'Microsecond', symbol: 'μs', factor: 0.000001 },
      nanosecond: { name: 'Nanosecond', symbol: 'ns', factor: 0.000000001 },
      minute: { name: 'Minute', symbol: 'min', factor: 60 },
      hour: { name: 'Hour', symbol: 'h', factor: 3600 },
      day: { name: 'Day', symbol: 'd', factor: 86400 },
      week: { name: 'Week', symbol: 'wk', factor: 604800 },
      month: { name: 'Month', symbol: 'mo', factor: 2629746 },
      year: { name: 'Year', symbol: 'yr', factor: 31556952 },
      decade: { name: 'Decade', symbol: 'dec', factor: 315569520 },
      century: { name: 'Century', symbol: 'c', factor: 3155695200 }
    }
  },

  speed: {
    name: 'Speed',
    units: {
      meterPerSecond: { name: 'Meter per Second', symbol: 'm/s', factor: 1 },
      kilometerPerHour: { name: 'Kilometer per Hour', symbol: 'km/h', factor: 0.277778 },
      milePerHour: { name: 'Mile per Hour', symbol: 'mph', factor: 0.44704 },
      footPerSecond: { name: 'Foot per Second', symbol: 'ft/s', factor: 0.3048 },
      knot: { name: 'Knot', symbol: 'kn', factor: 0.514444 },
      mach: { name: 'Mach', symbol: 'Ma', factor: 343 },
      speedOfLight: { name: 'Speed of Light', symbol: 'c', factor: 299792458 }
    }
  },

  pressure: {
    name: 'Pressure',
    units: {
      pascal: { name: 'Pascal', symbol: 'Pa', factor: 1 },
      kilopascal: { name: 'Kilopascal', symbol: 'kPa', factor: 1000 },
      megapascal: { name: 'Megapascal', symbol: 'MPa', factor: 1000000 },
      bar: { name: 'Bar', symbol: 'bar', factor: 100000 },
      millibar: { name: 'Millibar', symbol: 'mbar', factor: 100 },
      atmosphere: { name: 'Atmosphere', symbol: 'atm', factor: 101325 },
      psi: { name: 'PSI', symbol: 'psi', factor: 6894.76 },
      torr: { name: 'Torr', symbol: 'Torr', factor: 133.322 },
      mmHg: { name: 'mmHg', symbol: 'mmHg', factor: 133.322 }
    }
  },

  energy: {
    name: 'Energy',
    units: {
      joule: { name: 'Joule', symbol: 'J', factor: 1 },
      kilojoule: { name: 'Kilojoule', symbol: 'kJ', factor: 1000 },
      calorie: { name: 'Calorie', symbol: 'cal', factor: 4.184 },
      kilocalorie: { name: 'Kilocalorie', symbol: 'kcal', factor: 4184 },
      wattHour: { name: 'Watt Hour', symbol: 'Wh', factor: 3600 },
      kilowattHour: { name: 'Kilowatt Hour', symbol: 'kWh', factor: 3600000 },
      btu: { name: 'BTU', symbol: 'BTU', factor: 1055.06 },
      therm: { name: 'Therm', symbol: 'thm', factor: 105506000 },
      footPound: { name: 'Foot-Pound', symbol: 'ft⋅lb', factor: 1.35582 },
      electronVolt: { name: 'Electron Volt', symbol: 'eV', factor: 1.602e-19 }
    }
  },

  power: {
    name: 'Power',
    units: {
      watt: { name: 'Watt', symbol: 'W', factor: 1 },
      kilowatt: { name: 'Kilowatt', symbol: 'kW', factor: 1000 },
      megawatt: { name: 'Megawatt', symbol: 'MW', factor: 1000000 },
      horsepower: { name: 'Horsepower', symbol: 'hp', factor: 745.7 },
      btuPerHour: { name: 'BTU per Hour', symbol: 'BTU/h', factor: 0.293071 },
      caloriePerSecond: { name: 'Calorie per Second', symbol: 'cal/s', factor: 4.184 }
    }
  },

  angle: {
    name: 'Angle',
    units: {
      degree: { name: 'Degree', symbol: '°', factor: 1 },
      radian: { name: 'Radian', symbol: 'rad', factor: 57.2958 },
      gradian: { name: 'Gradian', symbol: 'grad', factor: 0.9 },
      turn: { name: 'Turn', symbol: 'turn', factor: 360 },
      arcminute: { name: 'Arcminute', symbol: "'", factor: 0.0166667 },
      arcsecond: { name: 'Arcsecond', symbol: '"', factor: 0.000277778 }
    }
  },

  frequency: {
    name: 'Frequency',
    units: {
      hertz: { name: 'Hertz', symbol: 'Hz', factor: 1 },
      kilohertz: { name: 'Kilohertz', symbol: 'kHz', factor: 1000 },
      megahertz: { name: 'Megahertz', symbol: 'MHz', factor: 1000000 },
      gigahertz: { name: 'Gigahertz', symbol: 'GHz', factor: 1000000000 },
      rpm: { name: 'RPM', symbol: 'rpm', factor: 0.0166667 }
    }
  }
};

export function convertUnits(value, fromUnit, toUnit, category) {
  if (category === 'temperature') {
    return convertTemperature(value, fromUnit, toUnit);
  }
  
  const categoryData = unitCategories[category];
  if (!categoryData) return value;
  
  const fromFactor = categoryData.units[fromUnit]?.factor;
  const toFactor = categoryData.units[toUnit]?.factor;
  
  if (!fromFactor || !toFactor) return value;
  
  return (value * fromFactor) / toFactor;
}

function convertTemperature(value, fromUnit, toUnit) {
  let celsius;
  
  switch (fromUnit) {
    case 'celsius':
      celsius = value;
      break;
    case 'fahrenheit':
      celsius = (value - 32) * 5/9;
      break;
    case 'kelvin':
      celsius = value - 273.15;
      break;
    case 'rankine':
      celsius = (value - 491.67) * 5/9;
      break;
    default:
      return value;
  }
  
  switch (toUnit) {
    case 'celsius':
      return celsius;
    case 'fahrenheit':
      return celsius * 9/5 + 32;
    case 'kelvin':
      return celsius + 273.15;
    case 'rankine':
      return celsius * 9/5 + 491.67;
    default:
      return value;
  }
}