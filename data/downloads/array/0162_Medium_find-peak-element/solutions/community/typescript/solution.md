# Easy to understand solution with explanation beats 100%

**Author:** user5545De
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-peak-element/solutions/4589267/](https://leetcode.com/problems/find-peak-element/solutions/4589267/)

---

# Approach
Before approaching the problem, assume that the elements are currently making some valley and peaks.

The idea is to compare the adjacent elements to determine that on which side of the peak we are currently on.

If the current element is ```nums[mid]``` and:
- ```nums[mid] < nums[mid-1]``` then it means that we are on a decreasing slope and the peak lies somewhere on the left

- ```nums[mid] < nums[mid+1]``` then it means that we are on a increasing slope and the peak lies somewhere on the right

The edge cases are handled separately in order to have a clean code and avoid having complex logic inside the while loop ;)

# Complexity
- Time complexity: O(logn)

- Space complexity: O(1)

**PLEASE DO CONSIDER AN UPVOTE IF YOU LIKED AND UNDERSTOOD THE SOLUTION :)**

# Code
```
class Solution {
    public int findPeakElement(int[] nums) {
        int n = nums.length;
        if(n == 1)
            return 0;
        else if(nums[0] > nums[1])
            return 0;
        else if(nums[n-1] > nums[n-2])
            return n-1;
        int low = 1, high = n-2;
        while(low <= high) {
            int mid = low + (high - low)/2;
            if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1])
                return mid;
            else if(nums[mid] < nums[mid-1])
                high = mid-1;
            else
                low = mid+1;
        }
        return -1;
    }
}
```