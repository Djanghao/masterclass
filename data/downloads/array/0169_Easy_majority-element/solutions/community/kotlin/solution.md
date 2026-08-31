# Kotlin o(n) time and o(1) space

**Author:** adityashri
**Votes:** 11
**Link:** [https://leetcode.com/problems/majority-element/solutions/1947656/](https://leetcode.com/problems/majority-element/solutions/1947656/)

---

Taking hints from the Boyer-Moore Algorithm's solution.
Basically we keep a count of a running "candidate" in the loop, if the count goes back to zero, we start over at that index.
```
class Solution {
    fun majorityElement(nums: IntArray): Int {
        // Boyer-Moore Algorithm
        var count = 0
        var candidate: Int = 0
        nums.forEach { num ->
            if (count == 0) {
                candidate = num
            }
            count += if (num == candidate) 1 else -1
        }
        return candidate
    }
}
```