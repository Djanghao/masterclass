# ✅fastest JAVA solution

**Author:** coding_menance
**Votes:** 580
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/3208460/](https://leetcode.com/problems/search-insert-position/solutions/3208460/)

---

Time complexity: $O(logn)$
Space Complexity: $O(1)$

## Explanation with examples & illustration

https://www.youtube.com/watch?v=h1LrRCYLZ7I

# JAVA CODE
``` JAVA []
class Solution {
    public int searchInsert(int[] nums, int target) {
        int start = 0;
        int end = nums.length-1;

        while (start <= end) {
            int mid = start + (end-start)/2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] > target) end = mid-1;
            else start = mid+1;
        }

        return start;
    }
}
```

![kitty.jpeg](./images/0.jpeg)
