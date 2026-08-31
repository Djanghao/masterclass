# :: Kotlin :: Sort & Sliding Window

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4323187/](https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4323187/)

---


```
class Solution {
    fun maximumStrongPairXor(nums: IntArray): Int {
        var result = 0
        Arrays.sort(nums)

        var left = 0
        for (right in nums.indices) {
            while(left < right && (nums[right] - nums[left]) > nums[left]) {
                left += 1
            }

            for (i in left until right) {
                // print("$i ")
                result = maxOf(result, nums[i] xor nums[right])
            }
            // println()
        }

        return result
    }
}
```