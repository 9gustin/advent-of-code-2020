//Part 1

let values = [1535,
    1908,
    1783,
    1163,
    1472,
    1809,
    1566,
    1919,
    1562,
    1532,
    1728,
    1999,
    1942,
    337,
    1135,
    2006,
    1083,
    1483,
    1688,
    1511,
    1134,
    1558,
    1139,
    1790,
    1406,
    1255,
    1627,
    1941,
    1619,
    2009,
    1453,
    1806,
    1756,
    1634,
    1026,
    1847,
    1520,
    1914,
    1836,
    1440,
    1839,
    1527,
    1638,
    1642,
    1776,
    1148,
    1958,
    1616,
    1952,
    1092,
    1081,
    1898,
    1487,
    2000,
    1921,
    1579,
    54,
    1031,
    1842,
    1006,
    1781,
    1964,
    168,
    1339,
    1094,
    1997,
    1522,
    1962,
    1837,
    1730,
    1244,
    1593,
    1752,
    1400,
    1330,
    1649,
    1639,
    1493,
    1696,
    2003,
    1612,
    1717,
    1835,
    861,
    1950,
    1896,
    557,
    1926,
    571,
    1725,
    1229,
    1213,
    1625,
    1553,
    1204,
    1459,
    1666,
    1723,
    1118,
    1845,
    1663,
    1829,
    1929,
    1880,
    1738,
    1887,
    1605,
    1273,
    1759,
    1932,
    1156,
    1712,
    1767,
    1241,
    1159,
    1476,
    1705,
    1768,
    1680,
    1543,
    2010,
    1849,
    1289,
    1636,
    1894,
    1823,
    1706,
    1239,
    1802,
    1744,
    1584,
    1690,
    1758,
    1618,
    1749,
    1521,
    1594,
    1960,
    1479,
    1022,
    1559,
    1106,
    1755,
    1254,
    1878,
    1243,
    1418,
    1671,
    1895,
    1120,
    1673,
    1719,
    1904,
    724,
    1945,
    1940,
    1819,
    1939,
    1103,
    2008,
    1791,
    1874,
    1544,
    1892,
    1557,
    1617,
    1998,
    1641,
    1907,
    1563,
    1089,
    1086,
    1276,
    1591,
    1614,
    1216,
    1658,
    1514,
    1899,
    1760,
    1797,
    1831,
    277,
    1622,
    1795,
    1468,
    1537,
    1742,
    1709,
    1886,
    1846,
    1567,
    1492,
    1549,
    1587,
    1818,
    1687,
    1404,
    1778,
    1096];

const expectedValue = 2020;

/**
 * Taken the values variable and return the multiply of two numbers that summed are 2020
 *  */
const getMultiplyOf2020Numbers = () => {
    let result = values.map(val => {
        let complementary = values.find(val2 => (val + val2 === expectedValue));

        return complementary ? complementary * val : null;
    });

    return result.find(r => r !== null);
}

let value = getMultiplyOf2020Numbers();
console.log("🚀 ~ file: day1.js ~ line 216 ~ value: ", value);

//Part 2
const getThreeSum2020 = () => {
    let result = values.map(val1 => {
        let result = [val1];

        //Values when be summed with value 1 return expected lower than expected value
        let complementaries = values.filter(val2 => (result[0] + val2) < expectedValue);
        
        //Search a value that summed with any complementary and value 1 return the expected value
        result[2] = values.find(val3 => complementaries.some(val2 => (val2 + result[0] + val3) === expectedValue));
        
        //If exists that value find the complementary of this sum
        if (result[2]) {
            result[1] = complementaries.find(val2 => (val2 + result[0] + result[2]) === expectedValue);
        }

        return result && result[1] && result[2] ? result.reduce((v1, v2) => v1*v2) : null;
    });

    return result.find(r => r !== null);
}

let val = getThreeSum2020();
console.log("🚀 ~ file: day1.js ~ line 276 ~ val", val)


//Extra: the idea are get all possible combinations that returns an expected value
// class PossibleValue {
//     constructor(value, index) {
//         this.value = value;
//         this.index = index;
//     }
// }

// const get2020Acumulators = () => {
//     let results = [];

//     //Values that have a complementary value when summed return expectedValue or lower
//     let possibleValues = values.filter(val => values.some(vComplementary => vComplementary + val <= expectedValue));

//     for (let index = 0; index < possibleValues.length; index++) {
//         let actualValue = possibleValues[index];
//         let acummulator = [];

//         let checkingValidity = true;
//         do {
//             let compatibleValues = possibleValues;
//             delete compatibleValues[index];
//             compatibleValues = compatibleValues.filter(vComplementary => (vComplementary + actualValue) <= expectedValue);

//             if(compatibleValues && compatibleValues.length > 0){

//             }
//             else checkingValidity = false;
//         } 
//         while (checkingValidity);
//     }

//     return results;
// }

// let results = get2020Acumulators();
// console.log("🚀 ~ file: day1.js ~ line 257 ~ results", results)
