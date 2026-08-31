# 💣 Minimize Product Sum of Two Arrays | O(n) Solution

**Author:** mokshancev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/3254963/](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/3254963/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(m)

# Code
```
internal class Solution {
    fun minProductSum(nums1: IntArray, nums2: IntArray): Int {
        var answer = 0
        var n = nums1.size
        var n1 = 1
        var n2 = 100
        val count1 = IntArray(101)
        val count2 = IntArray(101)
        for (i in 0 until n) {
            count1[nums1[i]]++
            count2[nums2[i]]++
        }
        while (0 < n) {
            while (count1[n1] == 0) n1++
            count1[n1]--
            while (count2[n2] == 0) n2--
            count2[n2]--
            answer += n1 * n2
            n--
        }
        return answer
    }
}
```