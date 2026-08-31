# 🥷[Swift] Straightforward Solution

**Author:** EShuman007
**Votes:** 0
**Link:** [https://leetcode.com/problems/heaters/solutions/3679002/](https://leetcode.com/problems/heaters/solutions/3679002/)

---

# Complexity
- Time complexity: $$O(n * \\log n)$$ + $$O(m * \\log m)$$, where `n` is a number of houses and `m` is a number of heaters.
- Space complexity: $$O(n + m)$$

# Code
```
class Solution {
    func findRadius(_ houses: [Int], _ heaters: [Int]) -> Int {
        let houses = houses.sorted()
        let heaters = heaters.sorted()
        var currentHeaterIndex = 0
        var radius = 0
        for house in houses {
            var distanceToCurrentHeater = abs(heaters[currentHeaterIndex] - house)
            while currentHeaterIndex + 1 < heaters.count {
                let distanceToNextHeater = abs(heaters[currentHeaterIndex + 1] - house)
                if distanceToNextHeater <= distanceToCurrentHeater {
                    currentHeaterIndex = currentHeaterIndex + 1
                    distanceToCurrentHeater = distanceToNextHeater
                } else {
                    break
                }
            }
            radius = max(radius, distanceToCurrentHeater)
        }
        return radius
    }
}
```