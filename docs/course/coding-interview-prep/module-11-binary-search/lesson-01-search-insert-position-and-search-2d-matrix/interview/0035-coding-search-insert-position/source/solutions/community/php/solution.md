# Binary Search for Insert Position in PHP

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/5105428/](https://leetcode.com/problems/search-insert-position/solutions/5105428/)

---

# Intuition
Given a sorted array, we can utilize the binary search algorithm to find the index of the target element or the position where the target element should be inserted to maintain the sorted order.

# Approach
We initialize two pointers, left and right, representing the start and end indices of the array, respectively. We perform binary search iteratively until left is less than or equal to right. At each iteration, we calculate the middle index mid and compare the element at this index with the target element:
- If the element at mid is equal to the target, we return mid.
- If the element at mid is less than the target, we update left to mid + 1.
- If the element at mid is greater than the target, we update right to mid - 1.

After the binary search, if the target element is not found in the array, we return the left pointer, which represents the position where the target element should be inserted to maintain the sorted order.

# Complexity
- Time complexity:
O(log n) - Binary search reduces the search space by half in each iteration.

- Space complexity:
O(1) - We use only a constant amount of extra space for variables.

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function searchInsert($nums, $target) {
        $left = 0;
        $right = count($nums) - 1;
        
        while ($left <= $right) {
            $mid = $left + intval(($right - $left) / 2);
            
            if ($nums[$mid] == $target) {
                return $mid;
            } elseif ($nums[$mid] < $target) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }
        
        return $left;
    }
}
```