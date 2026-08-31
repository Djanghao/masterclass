# 100% beats

**Author:** iftixorrustamovv
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/5469436/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/5469436/)

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
    func numberOfCuts(_ n: Int) -> Int {
        if n == 1 {
            return 0
        }

    return n % 2 == 0 ? n / 2 : n
    }
}
```