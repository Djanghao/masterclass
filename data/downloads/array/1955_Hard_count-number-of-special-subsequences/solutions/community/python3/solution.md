# Simple Python with comments. One pass O(n) with O(1) space

**Author:** IlyaL
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-number-of-special-subsequences/solutions/1387357/](https://leetcode.com/problems/count-number-of-special-subsequences/solutions/1387357/)

---

```
class Solution:
    def countSpecialSubsequences(self, nums: List[int]) -> int:
        total_zeros = 0 # number of subsequences of 0s so far
        total_ones = 0 # the number of subsequences of 0s followed by 1s so far
        total_twos = 0 # the number of special subsequences so far
        
        M = 1000000007
        
        for n in nums:
            if n == 0:
                # if we have found new 0 we can add it to any existing subsequence of 0s
                # or use only this 0
                total_zeros += (total_zeros + 1) % M
            elif n == 1:
                # if we have found new 1 we can add it to any existing subsequence of 0s or 0s and 1s
                # to get a valid subsequence of 0s and 1s
                total_ones += (total_zeros + total_ones) % M
            else:
                # if we have found new 2 we can add it to any existing subsequence of 0s and 1s 0r 0s,1s and 2s
                # to get a valid subsequence of 0s,1s and 2s
                total_twos += (total_ones + total_twos) % M
        
        return total_twos % M
```