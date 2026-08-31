# Kotlin 1 line solution beats 88% of kotlin users / 143 ms

**Author:** mahmoud5airy2000
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/4081046/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/4081046/)

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
    

fun arithmeticTriplets(nums: IntArray, diff: Int): Int {
    return nums.fold(0){acc, it ->
        if (nums.contains(it + diff) && nums.contains(it + diff + diff)) {
            acc + 1
        } else {
            acc

        }
    }
}
}
```