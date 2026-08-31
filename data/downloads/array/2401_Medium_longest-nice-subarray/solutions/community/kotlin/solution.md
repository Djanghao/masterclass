# Two pointers

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-nice-subarray/solutions/5220056/](https://leetcode.com/problems/longest-nice-subarray/solutions/5220056/)

---

# Approach
Two pointers.
The subtlety here is that for an array fragment satisfying the problem conditions, the sum of elements must be equal to their XOR-sum.
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)
# Code
![image.png](./images/0.png)
```kt
class Solution {
    fun longestNiceSubarray(nums: IntArray): Int {
        val len = nums.size
        var max = 1
        var L = 0
        var R = 1
        var SUM = nums[0]
        var XOR = nums[0]
        while (R<=len) {
            // println("L=$L,R=$R,sum=$sum")
            if (SUM==XOR) {
                max = maxOf(max,R-L)
                if (max==30) break
                if (R<len) {
                    SUM += nums[R]
                    XOR = XOR xor nums[R]
                }
                R++
            }
            else {
                SUM -= nums[L]
                XOR = XOR xor nums[L]
                L++
                if (L>=R) {
                    if (R<len) {
                        SUM += nums[R]
                        XOR = XOR xor nums[R]
                   }
                    R++
                }
            }
        }
        return max
    }
}
```