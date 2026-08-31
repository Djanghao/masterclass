# Python real O(nlogk) solution - easy to understand

**Author:** happy_little_pig
**Votes:** 66
**Link:** [https://leetcode.com/problems/sliding-window-median/solutions/806480/](https://leetcode.com/problems/sliding-window-median/solutions/806480/)

---

**Solution 1: `O(nk)`**
Maitain a sorted window.  We can use binary search for remove and insert. 
Because insert takes `O(k)`, the overall time complexity is `O(nk)`.

**Solution 2: `O(nk)`**
Similar with LC 295, we need to maintain two heaps in the window, leftHq and rightHq. 
To slide one step is actually to do two things: 
- Step 1: add a number, which is exactly the same as that in LC 295, which is `O(logk)`
- Step 2: remove the number that is outside the window; there is not a remove method in heapq, so it takes ```
O(k)
```.  So overall the heapq solution will take `O(nk)`.

**Solution 3: O(nlogk)**
Use a SortedList structure, which was implemented using self-balanced tree.  
SortedList enables `O(logk)` add and `O(logk)` remove.  So the total time complexity is `O(nlogk)`.

```
from sortedcontainers import SortedList

class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        lst = SortedList()    # maintain a sorted list
        
        res = []
        for i in range(len(nums)):
            lst.add(nums[i])            # O(logk)
            if len(lst) > k:
                lst.remove(nums[i-k])   # if we use heapq here, it will take O(k), but for sortedList, it takes O(logk)
            if len(lst) == k:
                median = lst[k//2] if k%2 == 1 else (lst[k//2-1] + lst[k//2]) / 2
                res.append(median)

        return res
```