# [Python] | Easy to Understand | Binary Search | with Explanation

**Author:** JimmyJammy1
**Votes:** 60
**Link:** [https://leetcode.com/problems/cutting-ribbons/solutions/1580490/](https://leetcode.com/problems/cutting-ribbons/solutions/1580490/)

---

The crux of the problem is implementing Binary Search.
The goal is to figure out what the maximum length of a ribbon could be so that we get k ribbons of that max length.
One way to think of it would be that the ribbon length could be anywhere from 1 to the max length of the a ribbon available in the list.

So what we do is go through the list (using Binary Search since we need to optimize linear search), find the mid of the given array and then iterate through the list testing the length with each element and summing the number of ribbons that can be made with the mid value. Then change mid accordingly

```
class Solution:
    def maxLength(self, ribbons: List[int], k: int) -> int:
        # The minumum length of the ribbon that we can cut is 1
        start = 1
        # The maximum length of the ribbon can be the maximum element in the list
        end = max(ribbons)
        
        # In this binary search, we are trying to go through the origin list and figure out which integer(from 1 -> ribbon of max length) is the deired length for the the target k pieces
        while(start <= end):
            mid = start + (end - start) // 2
            res = 0
            for i in ribbons:
                res += i // mid
            # If the value is >= target, we know that there could be a larger integer that will satisfy the same conditon
            if res >= k:
                start = mid+1
            else:
            # If lesser than k, then there could be a value lesser than the mid that could satisfy the condition
                end = mid -1
        return end
```
