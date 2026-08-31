# Python solution with comments, easy-understanding

**Author:** StopFuture
**Votes:** 23
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/2734230/](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/solutions/2734230/)

---

```
class Solution:
    def subarrayGCD(self, nums: List[int], k: int) -> int:
        
        # iterative function for finding gcd
        def gcd(a, b):
            while a and b:
                a, b = b, a % b
            return a or b
			# Time complexity - O(log(min(a, b)) = O(log n)

        
        cnt = 0
        n = len(nums)
        
        for i in range(n):
            tmp_gcd = 0 # gcd of zero with any number is equal to the number itself
            
            for j in range(i,n):
                tmp_gcd = gcd(tmp_gcd, nums[j])
                
                

                if tmp_gcd == k:
                    cnt += 1
                elif tmp_gcd < k: # gcd cannot get bigger
                    break
        
        return cnt
        
        # n = nums.length
        # m = max(nums[i])

        # O( n^2 * log(m) ) - Time
        # O(1) - Space
  
```