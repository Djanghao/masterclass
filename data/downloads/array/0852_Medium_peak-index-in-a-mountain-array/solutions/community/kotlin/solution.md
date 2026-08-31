# Easy to understand Binary search

**Author:** bhaskarudit8
**Votes:** 1
**Link:** [https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/5536616/](https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/5536616/)

---

# Intuition
##### The peak of the mountain array is where elements increase then decrease, binary search can exploit this by comparing midpoints to find the peak.

# Approach
##### Initialize start and end, then iteratively narrow down the search range using binary search until start exceeds end, with start ultimately pointing to the peak.


# Complexity
- Time complexity:
$$O(log n)$$
- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    fun peakIndexInMountainArray(arr: IntArray): Int {
        var start = 0
        var end = arr.size - 1

        while(start <= end) {
            var mid = start + (end - start) / 2
            if(arr[mid] > arr[mid + 1]) end = mid - 1
            else start = mid + 1
        }
        return start
    }
}
```