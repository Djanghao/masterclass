# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/5116498/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/5116498/)

---

# Complexity
- Time complexity: $$O(n * log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func earliestFullBloom(_ plantTime: [Int], _ growTime: [Int]) -> Int {
        let flowerTimes = zip(plantTime, growTime)
            .map { (plant: $0.0, grow: $0.1) }
            .sorted { $0.grow > $1.grow }

        var maxDays = 0
        var curDay = 0
        for flowerTime in flowerTimes {
            curDay += flowerTime.plant
            maxDays = max(maxDays, curDay + flowerTime.grow)
        }
        return maxDays
    }
}

```