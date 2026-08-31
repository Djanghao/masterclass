# swift easy solution

**Author:** Zhanadilll
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/5044834/](https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/5044834/)

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
    func checkIfCanBreak(_ s1: String, _ s2: String) -> Bool {
        var arr1 = Array(s1).sorted()
        var arr2 = Array(s2).sorted()
        var first = true
        var second = true
       
       for i in 0..<arr1.count {
            if arr1[i] < arr2[i] {
                first = false
            }
            if arr2[i] < arr1[i] {
                second = false
            }
        }

        return first || second
    }
}
```