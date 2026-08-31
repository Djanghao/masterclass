# Kotlin solution with O(n) time and O(1) space

**Author:** chayangkoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/4938705/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/4938705/)

---

![Screenshot 2024-03-29 001528.png](./images/0.png)

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun findKDistantIndices(nums: IntArray, key: Int, k: Int): List<Int> {
        val resultList = mutableListOf<Int>()
        var left = 0
        var right = 0
        var visitedLeftIndex = 0

        while(right < nums.size) {
            while(right < nums.size && nums[right] != key) {
                right++
            }

            if(right == nums.size) break
            left = (right - k).coerceAtLeast(visitedLeftIndex)
            while(left < nums.size && left <= right + k) {
                resultList.add(left)
                left++
            }

            visitedLeftIndex = left
            right++
        }
        return resultList
    }
}
```