# One-line solution [Swift]

**Author:** ArtyZenk
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/3347091/](https://leetcode.com/problems/convert-the-temperature/solutions/3347091/)

---


# Code
```
class Solution {
    func convertTemperature(_ celsius: Double) -> [Double] {
        [celsius + 273.15, celsius * 1.80 + 32.00]
    }
}
```