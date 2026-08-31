# 16ms Beats 100%

**Author:** chenchewei
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/5621983/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/5621983/)

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
    func areaOfMaxDiagonal(_ dimensions: [[Int]]) -> Int {
        var tempResult: Int = 0
        var result = 0
        for dimension in dimensions {
            var temp: Int = 0
            for num in dimension {
                temp += num * num
            }
            if temp > tempResult {
                tempResult = temp
                result = dimension.reduce(1, *)
            } else if temp == tempResult {
                result = max(dimension.reduce(1, *), result)
            }
        }
        return result
    }
}
```