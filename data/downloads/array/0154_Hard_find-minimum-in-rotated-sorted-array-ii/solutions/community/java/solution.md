# Beats 100 % | Binary search with clear explanation

**Author:** AshwathSpark
**Votes:** 136
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/1535534/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/1535534/)

---

First, we take 
**low** (lo) as 0
**high** (hi) as nums.length-1

By default, if **nums[lo]<nums[hi]** then we return nums[lo] because the array was never rotated, or is rotated **n** times

After entering while loop, we check
 **if** nums[mid] > nums[hi] **=>** lo = mid + 1 because the minimum element is in the **right** half of the array
**else if** nums[mid] < nums[hi] **=>** hi = mid because the minimum element is in the **left** half of the array
**else** **=>**  hi-- dealing with **duplicate** values
then we **return** nums[hi]


```
class Solution {
    public int findMin(int[] nums) {
        int lo = 0, hi = nums.length - 1;
        
        if (nums[lo] < nums[hi]) return nums[lo];
        
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            
            if (nums[mid] > nums[hi]) {
                lo = mid + 1;
            } else if (nums[mid] < nums[hi]) {
                hi = mid;
            } else {
                hi--;
            }
        }
        
        return nums[hi];
    }
}
```

Upvoting helps a lot, Thank You \u2665