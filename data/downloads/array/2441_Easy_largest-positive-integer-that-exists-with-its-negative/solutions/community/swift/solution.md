# Swift solution

**Author:** azm819
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5099945/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5099945/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func findMaxK(_ nums: [Int]) -> Int {
        var numSet = Set<Int>()
        var result = -1
        for num in nums {
            numSet.insert(num)
            if abs(num) > result && numSet.contains(-num) {
                result = abs(num)
            }
        }
        return result
    }
}

```