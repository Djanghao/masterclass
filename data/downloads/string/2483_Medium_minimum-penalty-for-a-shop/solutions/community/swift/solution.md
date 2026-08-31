# Simple swift solution

**Author:** kushaltyagi
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/5613285/](https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/5613285/)

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
    func bestClosingTime(_ customers: String) -> Int {
        var n = customers.count
        var customers = Array(customers)
        var preN = Array(repeating: 0, count: n + 1)
        var postY = Array(repeating: 0, count: n + 1)

        for i in 1...n{
            preN[i] = preN[i - 1]
            if customers[i - 1] == "N"{
                preN[i] += 1
            }
        }

        for i in stride(from: n - 1, through: 0, by: -1){
            postY[i] = postY[i + 1]
            if customers[i] == "Y"{
                postY[i] += 1
            }
        }
        var minPen = Int.max
        var res = 0

        for i in 0...n{
            var curr = preN[i] + postY[i]
            if curr < minPen{
                minPen = curr
                res = i
            }
        }
        return res
    }
}
```