# swift easy solution (time 100%, space 100%)

**Author:** Zhanadilll
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/4412287/](https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/4412287/)

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
    func checkPowersOfThree(_ n: Int) -> Bool {
        var res = false
        helper(n, 16, &res)

        return res
    }

    func helper(_ n: Int, _ i: Int, _ res: inout Bool) {
       if n == 0 {
           res = true
           return
       }
       if i < 0 {
            return
       }
       if Int(truncating: pow(3, i) as NSNumber) > n {
           helper(n, i - 1, &res)
       } else {
           helper(n - Int(truncating: pow(3, i) as NSNumber), i - 1, &res)
           helper(n, i - 1, &res)
       }
    }
}
```