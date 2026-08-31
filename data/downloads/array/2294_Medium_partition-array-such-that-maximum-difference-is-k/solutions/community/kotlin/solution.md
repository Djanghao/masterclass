# Greedy

**Author:** UtkarshCh
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/4070186/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/4070186/)

---

Using Greedy technique

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nlogn)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(logn)
# Code
```
class Solution {
    fun partitionArray(nums: IntArray, k: Int): Int {
        nums.sort()
        var result = 1
        var x = nums[0]

        for(i in 1 until nums.size){
            if(nums[i] - x > k){
                x = nums[i]
                result++
            }
        }

        return result
    }
}
```