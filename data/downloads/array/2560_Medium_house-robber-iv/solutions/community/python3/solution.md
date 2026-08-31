# [Python 3] Binary search with simple check

**Author:** gabhay
**Votes:** 4
**Link:** [https://leetcode.com/problems/house-robber-iv/solutions/3146028/](https://leetcode.com/problems/house-robber-iv/solutions/3146028/)

---



# Complexity
- Time complexity: O(Nlog(N))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def minCapability(self, nums: List[int], k: int) -> int:
        def check(cap):
            count=taken=0
            for x in nums:
                if taken:
                    taken=False
                elif x<=cap:
                    count+=1
                    taken=True
            return count>=k
        l,r=min(nums),max(nums)
        while l<=r:
            mid=l+(r-l)//2
            if check(mid):
                res=mid
                r=mid-1
            else:
                l=mid+1
        return res       
```

Another Problem that does not strike as binary search-https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/
