# Simple DP Solution

**Author:** AhmadKaddour
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5389542/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5389542/)

---

# Intuition
To satisfy the given condition, we can choose the elements in the subsequence in one of the following ways:
1. By selecting only even numbers.
2. By selecting only odd numbers.
3. By alternating between even and odd, where every odd number should be followed by an even number and vice versa.

# Approach
The idea is to try all of the previous ways and return the maximum result.

For the last way, I used a memo to keep track of the longest subsequence in the prefix $$i$$ of the array, and for each prefix $$i$$ the result is either leaving the current number or picking it, so we add 1 to the result of the last prefix that ends with an even number if the current number is odd, or the last prefix that ends with an odd number if the current number is even. 

# Complexity
- Time complexity:
O(n).

- Space complexity:
O(n).

# Code
```
class Solution {
    fun maximumLength(nums: IntArray): Int {
        val dp = IntArray(nums.count() + 1){ 0 }
        var lastEven = 0
        var lastOdd = 0
        var evenCount = 0
        var oddCount = 0
        
        for(i in 1..nums.count()){
            if(nums[i - 1] % 2 == 0){
                dp[i] = max(dp[i - 1], dp[lastOdd] + 1)
                lastEven = i
                evenCount += 1
            }else{
                dp[i] = max(dp[i - 1], dp[lastEven] + 1)
                lastOdd = i
                oddCount += 1
            }
        }
        

        return max(dp[nums.count()], max(oddCount, evenCount))
    }
}
```