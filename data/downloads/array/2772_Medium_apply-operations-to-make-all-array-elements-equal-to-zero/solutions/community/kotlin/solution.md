# Sliding window with subtraction.

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/5479518/](https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/5479518/)

---

# Approach
In the loop, I look for the first non-"0" first.
This value is used as the "subtractor" in a loop of length "k".
If there is a number smaller than the "subtractor" in this loop, no conversion is possible.
# Complexity
image.
![image.png](./images/0.png)
```
class Solution {
    fun checkArray(nums: IntArray, k: Int): Boolean {
        val len = nums.size
        var pos = 0
        while (pos<len) {
            while (pos<len && nums[pos] == 0) {
                pos++
            }
            if (pos==len) return true
            if (pos+k>len) return false
            val delta = nums[pos]
            for (i in 0 until k) {
                if (nums[pos+i]>=delta) nums[pos+i] -=delta
                else return false
            }
        }
        return true
    }
}
```