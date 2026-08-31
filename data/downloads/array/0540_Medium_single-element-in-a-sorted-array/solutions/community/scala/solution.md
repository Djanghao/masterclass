# Easy to understand Binary Search solution with Explanation beats 100%

**Author:** user5545De
**Votes:** 2
**Link:** [https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/4583825/](https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/4583825/)

---

# Approach
For the input ```[1,1,2,2,3,4,4,5,5]```, we can observe that
- for pair of elements which falls on the left side of the single element, the first occurrence is at even index and the second occurrence is at odd index.

- Similarly, for pair of elements which falls on the right side of the single element, the first occurrence is at odd index and the second occurrence is at even index.

We can use these properties of the single element is our binary search to determine that towards which half we need to move

Also, its better to check for the edge cases at the start itself or else our code will become a bit messier if we try to handle all the scenarios inside the while loop itself.

# Complexity
- Time complexity: O(logn)

- Space complexity: O(1)

**PLEASE DO A DRY RUN FOR BETTER UNDERSTANDING!!**

**PLEASE DO CONSIDER AN UPVOTE IF YOU UNDERSTOOD & LIKED THE SOLUTION :)**

# Code
```
class Solution {
    public int singleNonDuplicate(int[] nums) {
        int n = nums.length;
        if(n == 1)
            return nums[0];
        else if(nums[0] != nums[1])
            return nums[0];
        else if(nums[n-1] != nums[n-2])
            return nums[n-1];
        int low = 1, high = n-2;
        while(low <= high) {
            int mid = low + (high - low)/2;
            if(nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1])
                return nums[mid];
            else if((mid % 2 == 0 && nums[mid] == nums[mid+1]) || (mid % 2 == 1 && nums[mid] == nums[mid-1])) 
                low = mid + 1;
            else
                high = mid - 1;
        }
        return -1;
    }
}
```