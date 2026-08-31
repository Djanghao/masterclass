# Kotlin O(1) math solution

**Author:** chayangkoon
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4918831/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4918831/)

---

![Screenshot 2024-03-24 173537.png](./images/0.png)

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun minOperations(k: Int): Int {
        if(k == 1) return 0
        val squareRootOfK = floor(sqrt(k.toDouble())).toInt()
        val increaseTime = (k / squareRootOfK) - 1
        val duplicateTime = squareRootOfK - 1
        val addtional = if(k % squareRootOfK != 0) 1 else 0
        return increaseTime + duplicateTime + addtional
     }
}
```