# simple solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-special-quadruplets/solutions/4972996/](https://leetcode.com/problems/count-special-quadruplets/solutions/4972996/)

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
fun countQuadruplets(nums: IntArray): Int {
var count: Int = 0
for (a in 0 until nums.size - 3) {
    for (b in a + 1 until nums.size - 2) {
        for (c in b + 1 until nums.size - 1) {
            for (d in c + 1 until nums.size) {
                if (nums[a] + nums[b] + nums[c] == nums[d]) count++
            }
        }
    }
}
return count;
}
}
```