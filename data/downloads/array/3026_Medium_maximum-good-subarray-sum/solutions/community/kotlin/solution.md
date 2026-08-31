# Kotlin | Prefix Sum, HashMap and Greedy

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-good-subarray-sum/solutions/5396591/](https://leetcode.com/problems/maximum-good-subarray-sum/solutions/5396591/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Store the prefix sums of the previous operations in a hashmap. It is always beneficial to store the lowest prefix sum in case there is already a value stored in the hashmap.

For a given number a, you check the prefix sum to index i and substract it with the value in a+k and a-k if they exist. The solution is the maximum of that value. 

# Approach
<!-- Describe your approach to solving the problem. -->
Create a hashmap dp and a variable a for the prefix sum. Loop through all elements and check if p+k and p-k is inside of the hashmap. If they are inside then the solution is the maximum of the prefix sum + the value - the value stored inside the hashmap.

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
    fun maximumSubarraySum(nums: IntArray, k: Int): Long {
        val dp:HashMap<Int,Long> = HashMap()
        var a:Long = 0L
        var sol:Long = Long.MIN_VALUE

        for(p:Int in nums){
            if(dp.contains(p+k)) sol = max(sol, a+p - dp.getValue(p+k))
            if(dp.contains(p-k)) sol = max(sol, a+p - dp.getValue(p-k))

            dp[p] = min(dp[p] ?: Long.MAX_VALUE, a)
            a += p
        }

        return if(sol == Long.MIN_VALUE) 0 else sol
    }
}
```