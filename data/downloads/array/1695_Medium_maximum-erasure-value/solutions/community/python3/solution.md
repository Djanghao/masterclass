# ✅  Python Easy 2 approaches

**Author:** constantine786
**Votes:** 19
**Link:** [https://leetcode.com/problems/maximum-erasure-value/solutions/2140512/](https://leetcode.com/problems/maximum-erasure-value/solutions/2140512/)

---

## \u2714\uFE0F*Solution I - Two pointers using Counter*
```
class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        counter=defaultdict(int) # track count of  elements in the window
        res=i=tot=0
		
        for j in range(len(nums)):
            x=nums[j]   
            tot+=x
            counter[x]+=1
            # adjust the left bound of sliding window until you get all unique elements
            while i < j and counter[x]>1: 
                counter[nums[i]]-=1
                tot-=nums[i]
                i+=1
            
            res=max(res, tot)            
        return res
```

## \u2714\uFE0F*Solution II - Two pointers using Visited*

```
class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        seen=set() # track visited elements in the window
        res=i=tot=0
        for j in range(len(nums)):
            x=nums[j]                   
			 # adjust the left bound of sliding window until you get all unique elements
            while i < j and x in seen: 
                seen.remove(nums[i])
                tot-=nums[i]
                i+=1                        
            tot+=x
            seen.add(x)
            res=max(res, tot)            
        return res
```

**Time - O(n)**
**Space - O(k)** - where` k` is number of unique elements in input `nums`.


---


***Please upvote if you find it useful***