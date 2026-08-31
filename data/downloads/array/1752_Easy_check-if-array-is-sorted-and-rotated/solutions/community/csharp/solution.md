# Simple And Easy Approach with Comments

**Author:** Sourabh-Status404
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/5334746/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/5334746/)

---


![CatUpvote.jpg](./images/0.jpeg)

# Code
```
public class Solution {
    public bool Check(int[] nums) {
        int count = 0;  // To count the number of drops
        int n = nums.Length;
        
        // Check the array for drops
        for (int i = 0; i < n - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                count++;
            }
        }
        
        // Check the wrap-around condition
        if (nums[n - 1] > nums[0]) {
            count++;
        }
        
        // If there is more than one drop, it is not a rotated sorted array
        if (count > 1) {
            return false;
        }
        
        // Otherwise, it is a rotated sorted array
        return true;
    }
}
```