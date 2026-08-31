# [Python] Short, boundary tracking for sets of ones, O(n)

**Author:** Ceay
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-latest-group-of-size-m/solutions/806946/](https://leetcode.com/problems/find-latest-group-of-size-m/solutions/806946/)

---

This solution keeps track of the right/left sides of each of the groups. The left side references the right side, the right side references the left side.

If a "1" at pace *i* is added that merges with one or two neighboring groups of ones, we update only the sides of the neighboring groups that are referenced at places *i-1* and *i+1*.

List *border* tracks the sides. It is zero if the element has not been met. If the element is at one side of a group of ones, it contains the index of another side. For a [1, 1, 1, 0, 1] state of ones, list *border* is [0, 3, ?, 1, 0, 5, 0] (note extra "0" at each side and "?" that is not important and depends on how we arrived at the state).

Memory: O(n)

Complexity: O(n)

```
class Solution:
    def findLatestStep(self, arr: List[int], m: int) -> int:
        
        if m==len(arr): return m
        
        border=[0]*(len(arr)+2)
        ans=-1
        
        for i in range(len(arr)):
            left=right=arr[i]
            if border[right+1]>0: right=border[right+1]
            if border[left-1]>0: left=border[left-1]
            border[left], border[right] = right, left
            if (right-arr[i]==m) or (arr[i]-left ==m): ans=i
        
        return ans
		
```