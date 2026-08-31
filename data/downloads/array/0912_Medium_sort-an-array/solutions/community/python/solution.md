# 7-line quicksort to write in interviews (Python)

**Author:** Twohu
**Votes:** 203
**Link:** [https://leetcode.com/problems/sort-an-array/solutions/277127/](https://leetcode.com/problems/sort-an-array/solutions/277127/)

---

This is my go-to solution when asked this question in interviews. It's short, simple to write, very bug free, and looks very clean and pythonic. Writing this version of quicksort is very effective in communicating your understanding of the algorithm and its concepts to the interviewer.

The only tradeoff in the code is it uses a bit of extra space. You can always write the messier in-place solution as a followup.
```
def quicksort(self, nums):
    if len(nums) <= 1:
        return nums

    pivot = random.choice(nums)
    lt = [v for v in nums if v < pivot]
    eq = [v for v in nums if v == pivot]
    gt = [v for v in nums if v > pivot]

    return self.quicksort(lt) + eq + self.quicksort(gt)
```
Runtime: O(nlogn) expected, O(n^2) worst case.
With a proper choice of pivot (using the median of medians algorithm), the runtime can be reduced to strict O(nlogn).
Space: O(n) expected, O(n^2) worst case