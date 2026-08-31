# Greedy

**Author:** sawanmind
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/solutions/5158824/](https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/solutions/5158824/)

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
    func maxPotholes(_ road: String, _ budget: Int) -> Int {
         var list = [Int]()
        var cur = 0
        for char in road {
            if char == "x" {
                cur += 1
            } else {
                if cur > 0 {
                    list.append(cur)
                }
                cur = 0
            }
        }
        if cur > 0 {
            list.append(cur)
        }
        list.sort(by: >)
        var res = 0
        var remainingB = budget
        for n in list {
            if remainingB <= 1 {
                break
            }
            if n + 1 <= remainingB {
                remainingB -= (n + 1)
                res += n
            } else {
                res += (remainingB - 1)
                remainingB = 0
            }
        }
        return res
    }
}
```