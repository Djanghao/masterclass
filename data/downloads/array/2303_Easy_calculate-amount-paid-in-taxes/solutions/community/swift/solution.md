# Beginner friendly - Beats 100% in Time and 100% in Space 🌌

**Author:** zoHouse
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/5093802/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/5093802/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func calculateTax(_ brackets: [[Int]], _ income: Int) -> Double {
        var sums: [Double] = []
        var prev = 0
        
        for bracket in brackets {
            var a = min(income, bracket[0])
            let ta = a - prev
            prev = a
            let endAmount = Double(ta) * (Double(bracket[1]) * 0.01)
            sums.append(endAmount)
        }
        
        return sums.reduce(0.0, +)
    }
}
```