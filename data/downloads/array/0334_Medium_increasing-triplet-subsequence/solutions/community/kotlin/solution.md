# Kotlin short easy understood solution(Time: O(n), Space: O(1))

**Author:** shbazhenov
**Votes:** 13
**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solutions/1985226/](https://leetcode.com/problems/increasing-triplet-subsequence/solutions/1985226/)

---

```
class Solution {
    fun increasingTriplet(nums: IntArray): Boolean {
        var firstSmallest = Int.MAX_VALUE
        var secondSmallest = Int.MAX_VALUE

        nums.forEach { num ->
            if (num <= firstSmallest) firstSmallest = num
            else if (num <= secondSmallest) secondSmallest = num
            else return true
        }
        
        return false
    }
}
```
Please upvote, if you like the solution)