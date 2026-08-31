# Kotlin Solution

**Author:** Abhimanyu14
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solutions/6180349/](https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solutions/6180349/)

---

```
fun countSubarrays(nums: IntArray): Int {
    var result = 0
    for (i in 1..(nums.lastIndex - 1)) {
        if (nums[i] == (nums[i - 1] + nums[i + 1]) * 2) {
            result++
        }
    }
    return result
}
```