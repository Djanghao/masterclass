# Kotlin consise

**Author:** agent-10
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5898887/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/5898887/)

---

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(n)$$ 

# Code
```kotlin []
class Solution {
    fun getSneakyNumbers(nums: IntArray): IntArray {
        return nums.toMutableSet().let { set->
            nums.filter { !set.remove(it) }
        }.toIntArray()
    }
}
```