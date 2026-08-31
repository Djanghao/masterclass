# Python Simple Two Approaches

**Author:** constantine786
**Votes:** 14
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/2002965/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/2002965/)

---

1. ***Sorting***
The algorithm goes  like this:
	1. Create a sorted clone of the original list. 
	2. Compare the elements at same index in both the list. Once you encounter a mismatch, use that to find the lower and upper bounds of the unsorted subarray.


```
class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        sorted_nums = sorted(nums)
        
        l, u = len(nums) - 1,0
        for i in range(len(nums)):
            if nums[i]!=sorted_nums[i]:
                l=min(l, i)
                u=max(u, i)
        
        
        return 0 if l>=u else u-l+1
```

**Time = O(nlogn)** - for sorting 
**Space = O(n)** - for storing the sorted copy

2. ***Stack***

There is a follow-up question to solve this in **O(n)** time. For this, we can use stack to track the first inconsistencies and find the lower and upper bounds of the subarray.

```
class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        
        l,u = len(nums)-1, 0
        stck=[]
        for i in range(len(nums)):
            while stck and nums[stck[-1]]>nums[i]:
                l = min(l, stck.pop())
            stck.append(i)
        
        stck=[]        
        for i in range(len(nums)-1,-1, -1):
            while stck and nums[stck[-1]]<nums[i]:
                u = max(u, stck.pop())
            stck.append(i)
        
        return 0 if l>=u else u-l+1
```
**Time = O(n)**   
**Space = O(n)**

---

***Please upvote if you find it useful***