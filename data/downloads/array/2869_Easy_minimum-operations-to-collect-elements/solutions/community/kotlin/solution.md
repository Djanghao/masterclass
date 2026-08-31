# simple solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4997542/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4997542/)

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
    fun minOperations(nums: List<Int>, k: Int): Int {
    val set = HashSet<Int>()
    var step = 0
    for (i in 1..k) { set.add(i)}
    for (i in nums.size - 1 downTo 0) {
        if (set.contains(nums[i])) {
            set.remove(nums[i])
        }
        step++
        if (set.isEmpty()) {return step }
    }
    return step  
    }
}
```