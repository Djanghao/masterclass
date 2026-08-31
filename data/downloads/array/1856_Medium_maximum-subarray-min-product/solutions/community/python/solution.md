# Python monotonic stack beats 100%

**Author:** xleafy
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-subarray-min-product/solutions/1200240/](https://leetcode.com/problems/maximum-subarray-min-product/solutions/1200240/)

---

a monotonic stack with index and prefix sum

```
class Solution:
    def maxSumMinProduct(self, nums: List[int]) -> int:
        mod=int(1e9+7)
        stack=[] # (index, prefix sum at index)
        rsum=0
        res=0
        
        nums.append(0)
        
        for i, v in enumerate(nums):
            while stack and nums[stack[-1][0]] >= v:
                index, _ = stack.pop()
				
				# if the stack is empty, the subarray sum is the current prefixsum
                arrSum=rsum
                
                if stack:
                    arrSum=rsum-stack[-1][1]
                
				# update res with subarray sum
                res=max(res, nums[index]*arrSum)
                
            rsum+=v
            stack.append((i, rsum))
        
        return res%mod