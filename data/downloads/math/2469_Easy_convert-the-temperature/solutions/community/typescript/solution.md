# Simple JavaScript/TypeScript solution (100% Faster)

**Author:** fahim_ash
**Votes:** 4
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/2809884/](https://leetcode.com/problems/convert-the-temperature/solutions/2809884/)

---

# Formula
Fahrenheit = 1.8 * celsius + 32
Kelvin = 273.15 + celsius


# Code
```
function convertTemperature(celsius: number): number[] {
    return [273.15 + celsius,1.8 * celsius + 32] 

};
```