# (182ms) TreeSet

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6123523/](https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6123523/)

---

# Approach
TreeSet
# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
class Solution {
    fun minOperations(nums: IntArray, k: Int): Int {
        val map = TreeSet<Int>()
        for (N in nums) {
            if (N<k) return -1
            map.add(N)
        }
        if (map.first()==k) return map.size-1
        else return map.size
    }
}
```