# Kotlin, array, beats 100%

**Author:** nazmulcuet11
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6117843/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6117843/)

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
```kotlin []
class Solution {
    fun maxCount(banned: IntArray, n: Int, maxSum: Int): Int {
        val bannedSet = Array<Boolean>(10005) { false }
        for (v in banned) {
            bannedSet[v] = true
        }   
        
        var count = 0
        var sum = 0
        for (i in 1..n) {
            if (sum + i <= maxSum && !bannedSet[i]) {
                count++
                sum += i
            }
        }
        return count
    }
}
```