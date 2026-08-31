# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/4989133/](https://leetcode.com/problems/convert-the-temperature/solutions/4989133/)

---


# Code
```
# @param {Float} celsius
# @return {Float[]}
def convert_temperature(celsius)
    kelvin = celsius + 273.15
    fahrenheit = celsius * 1.80 + 32.00


    [kelvin, fahrenheit]
end
```