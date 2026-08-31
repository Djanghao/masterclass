# Clean O(logN) solution in Python

**Author:** aditya123
**Votes:** 59
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/133604/](https://leetcode.com/problems/find-k-closest-elements/solutions/133604/)

---


The O(logN) logic for this problem would dwell down to finding k elements by finding the starting element.

If the starting element is found, [start, start+k] elements can be returned. 

Given that **k << len(arr)**; we can always use the **hi index as length(arr)-k and lo=0**

For cases where the target is off the extremes we'll end up with k elements. 
But for the cases where the target is within exactly or sparsely equal to one of the elements in the array; we need to 
shuffle lo and hi accordingly

Consider binary search paradigm:

**if arr[mid] is farther from target than arr[mid+k] which is k places ahead of mid then we need to pull lo
to mid with 1 offset; otherwise we can pull hi at mid**. 
at the end we'll end up with a value contained by lo's index which can be the starting index of our solution

```py3
class Solution(object):
    def findClosestElements(self, arr, k, x):
        """
        :type arr: List[int]
        :type k: int
        :type x: int
        :rtype: List[int]
        """
        lo, hi = 0, len(arr)-k
        while lo<hi:
            mid = (lo + hi)//2
            if x-arr[mid]>arr[mid+k]-x:
                lo = mid + 1
            else:
                hi = mid
        return arr[lo:lo+k]
```