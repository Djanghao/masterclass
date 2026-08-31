# Simple Swift Solution

**Author:** hoseiocean
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/2764157/](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/2764157/)

---

# Code
```
class Solution {
    func countOdds(_ low: Int, _ high: Int) -> Int {
      let difference = high - low
      var oddsCount = difference / 2

      if low % 2 != 0 || high % 2 != 0 {
        oddsCount += 1
      }

      return oddsCount      
    }
}
```

Please comment and/or like!