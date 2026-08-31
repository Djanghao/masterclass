# 2849. Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4263524/](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4263524/)

---

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func isReachableAtTime(_ sx: Int, _ sy: Int, _ fx: Int, _ fy: Int, _ t: Int) -> Bool {
        let minDist = max(abs(sx - fx), abs(sy - fy))
        return minDist <= t && !(minDist == 0 && t == 1)
    }
}
```