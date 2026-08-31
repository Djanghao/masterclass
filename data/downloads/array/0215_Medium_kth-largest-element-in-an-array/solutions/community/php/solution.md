# Kth largest element in an array with PHP (easy way using PHP built-in function)

**Author:** rakiburrimon
**Votes:** 2
**Link:** [https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/3908849/](https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/3908849/)

---

# Intuition
Sort the array in descending order, and target the k'th value as return

# Approach
Sort the array in descending order, and target the k'th value as return

# Complexity
- Time complexity:
186 ms

- Space complexity:
31.7 MB

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function findKthLargest($nums, $k) {
        // Sort the given array
        rsort($nums);
        // Return k'th element in the sorted array
        return $nums[$k - 1];
    }
}
```