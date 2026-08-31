# Kotlin | Sliding Window Beats 100%

**Author:** jeffreyntue
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solutions/5414526/](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/solutions/5414526/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The smallest subsequence of a or is the smallest possible one, where all bits that came before is at least included once. Since there are only 32 Bits in an Integer it can be calculated in linear time.

# Approach
<!-- Describe your approach to solving the problem. -->
This solution uses the slinding window technique. The bits are counted in an array dp. If a value in the array is zero, that means this bit wasn't used before. The algorithm goes from right to left in order to store the numbers.

A number can be removed from the subsequence if all bits of the number are at least two times in the array. This can be used to check if the number of the outer right can be removed. If it is the case then remove the number and repeat the process. The smallest subsequence is the difference of the position of the number and the position of the right most number plus one. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class Solution {
    fun addElement(num:Int, dp:IntArray){
        for(i:Int in 0..31) if((1 shl i) and num > 0) dp[i] += 1
    }
    
    fun removeElement(num:Int, dp:IntArray): Boolean {
        for(i:Int in 0..31) if(dp[i] == 1 && (1 shl i) and num > 0) return false
        for(i:Int in 0..31) if((1 shl i) and num > 0) dp[i] -= 1

        return true
    }

    fun smallestSubarrays(nums: IntArray): IntArray {
        val n:Int = nums.size
        val dp:IntArray = IntArray(32){0}
        var r:Int = n-1

        val sol:IntArray = IntArray(n){0}

        for(i:Int in n-1 downTo 0){
            addElement(nums[i], dp)

            while(i<r && removeElement(nums[r], dp)) r--
            
            sol[i] = r-i+1
        }

        return sol
    }
}
```