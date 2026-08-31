# [C#] Simple binary search

**Author:** BusIgor
**Votes:** 4
**Link:** [https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3212895/](https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3212895/)

---

# Approach
Position of the searched element is always even. We can find the position by using binary search.

Time complexity: $$O(log(n))$$ Space complexity: $$O(1)$$

# Code
```
public class Solution {
    public int SingleNonDuplicate(int[] nums) {
        int l = 0, r = nums.Length / 2;
        while (l < r)
        {
            var mid = (l + r) / 2;
            if (nums[mid * 2] == nums[mid * 2 + 1])
                l = mid + 1;
            else
                r = mid;
        }

        return nums[l * 2];
    }
}
```