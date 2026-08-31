# [Python] Bitmasking + DP solution

**Author:** rohanmathur91
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/1558240/](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/solutions/1558240/)

---

```
class Solution:
    def minimumXORSum(self, nums1: List[int], nums2: List[int]) -> int:
        """
        Brute-force: permutation of nums2 (n => n! permutations) from all those try every 
                     possible combination with nums1 and calculate xor sum.
                     
        Optimal: Using dp with bitmasking.
        Time Complexity: n * 2^n
        Space Complexity: 2^n 
        """
		
        n = len(nums1)
        dp = [-1] * (1 << n)  
        def solve(i, mask):
            if i == n: 
                return 0
            
            if dp[mask] != -1:
                return dp[mask]
            
            ans = float('inf')
            for j in range(n):
                if (mask & 1 << j) == 0: # check for unused element
                    ans = min(ans, (nums1[i]^nums2[j]) + solve(i+1, mask | (1 << j))) 
            
            dp[mask] = ans
            return dp[mask]
        return solve(0, 0)
     
```
