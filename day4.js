const fs = require("fs");
const data = fs.readFileSync("./data/day4.txt", "utf8");
const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const regHEX = /[0-9A-Fa-f]{6}/g;
const validEyesColor = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

//PartOne
class Passport {
  byr;
  iyr;
  eyr;
  hgt;
  hcl;
  ecl;
  pid;
  cid;

  constructor(str) {
    this.constructByString(str);
  }
  constructByString(str) {
    const props = str.replace(/(\r\n|\n|\r)/gm, " ").split(" ");

    props.forEach((prop) => {
      const propValue = prop.split(":");
      if (propValue[0] in this) this[propValue[0]] = propValue[1];
    });
  }
  //PartOne
  get isValid() {
    return requiredFields.every((field) => this[field] && this[field] !== "");
  }
  //PartTwo
  get isValidByr() {
    return (
      `${this.eyr}`.length === 4 &&
      parseInt(this.byr) >= 1920 &&
      parseInt(this.byr) <= 2002
    );
  }
  get isValidIyr() {
    return (
      `${this.eyr}`.length === 4 &&
      parseInt(this.iyr) >= 2010 &&
      parseInt(this.iyr) <= 2020
    );
  }
  get isValidEyr() {
    return (
      `${this.eyr}`.length === 4 &&
      parseInt(this.eyr) >= 2020 &&
      parseInt(this.eyr) <= 2030
    );
  }
  get isValidHgt() {
    if (this.hgt.includes("cm")) {
      const hgtNumber = parseInt(this.hgt.split("cm")[0]);
      return hgtNumber >= 150 && hgtNumber <= 193;
    } else if (this.hgt.includes("in")) {
      const hgtNumber = parseInt(this.hgt.split("in")[0]);
      return hgtNumber >= 59 && hgtNumber <= 76;
    }

    return false;
  }
  get isValidHcl() {
    return (
      this.hcl.length === 7 && this.hcl.startsWith("#") && regHEX.test(this.hcl)
    );
  }
  get isValidEcl() {
    return validEyesColor.some((color) => color === this.ecl);
  }
  get isValidPid() {
    return `${this.pid}`.length === 9 && parseInt(this.pid);
  }

  get isValidPartTwo() {
    try {
      if (
        !this.isValidByr ||
        !this.isValidEyr ||
        !this.isValidIyr ||
        !this.isValidHgt ||
        !this.isValidHcl ||
        !this.isValidEcl ||
        !this.isValidPid
      ) {
        return false;
      }

      return true;
    } catch {
      return false;
    }
  }
}
const parseData = () => {
  let result = [];
  result = data.split(/\n\s*\n/).map((pass) => new Passport(pass));

  return result;
};

const countValidPassports = () => {
  const passports = parseData();
  return passports.filter((pass) => pass.isValidPartTwo).length;
};

console.log(countValidPassports());
