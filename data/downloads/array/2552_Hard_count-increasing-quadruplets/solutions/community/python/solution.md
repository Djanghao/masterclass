# Simple solution using pre-computation and bisect (Python)

**Author:** shreyashnahar0
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-increasing-quadruplets/solutions/3111933/](https://leetcode.com/problems/count-increasing-quadruplets/solutions/3111933/)

---

# Intuition
All the numbers are between 1 and n. So there must be some pre-computation that needs to be done in O(n^2)

# Approach
- For each j(0<=j<n) precompute the count of numbers that appear to the right of j and are greater than nums[j]
- Consider pair j and k (0<=j<k<n and nums[k]<nums[j]). Find the count of numbers to the left of j and less than nums[k]. Similarly find the numbers that are between j and k and are greater than nums[j].

- Let l_cnt = count of numbers to the left of j and less than nums[k]
- let m_cnt = count of numbers in between j and k and greater than nums[j]
- Therefore r_cnt = pre_compute(nums[j]) - m_cnt 
- Add l_cnt*r_cnt to the result.

# Complexity
- Time complexity: O(n^2*log(n))

- Space complexity: O(n)

# Code
```
class Solution:
    def countQuadruplets(self, nums):
        n = len(nums)
        Cnt = [0 for _ in range(n+1)]
        
        for i in range(n):
            for j in range(i+1,n):
                if nums[j]>nums[i]:
                    Cnt[nums[i]]+=1
        
        L = []
        res = 0
        for i,x in enumerate(nums):
            curr = Cnt[x]
            
            for j in range(i+1,n):
                if x<nums[j]:
                    curr-=1
                    continue 
                l = bisect.bisect_left(L,nums[j])
                res+=l*curr
            bisect.insort_left(L,x)
        return res 
            
            
                
        
```