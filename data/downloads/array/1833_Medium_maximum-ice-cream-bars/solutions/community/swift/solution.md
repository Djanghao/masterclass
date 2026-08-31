# Solution Swift [beats 100%]

**Author:** Nihad_s
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3008305/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3008305/)

---

# Complexity
- Time complexity: $$O(n\\log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maxIceCream(_ costs: [Int], _ coins: Int) -> Int {
        let costs = costs.sorted()
        var coins = coins

        for i in 0..<costs.count {
            if costs[i] > coins {
                return i
            }

            coins -= costs[i]
        }

        return costs.count
    }
}

```