# Python 3 | Prefix Array, Two Pass, Quick Sort | Explanation

**Author:** idontknoooo
**Votes:** 10
**Link:** [https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/solutions/1398483/](https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/solutions/1398483/)

---

### Explanation
- The intuition is to find in what situation this function will work
- If you know **Quick Sort**, you will soon realize this problem is the same idea as find a pivot in Quick Sort. Check **[this Wikipedia - Quick Sort](https://en.wikipedia.org/wiki/Quicksort)** to know more about it.
- A `pivot` in Quick Sort guarantees that 
	- Every number on the left side of it are less than it
	- Every number on the right side of it are greater than it
	- And thus the `pivot` number is at the index, which is same as the index when the sequence is sorted
	- For example, `nums = [8, 5, 13, 26, 14]`
		- After sorting, `nums = [5, 8, 13, 14, 26]`
		- In this case, **`13` is a pivot and it will work for the function given by this question**
		- Because, `5, 8` on its left is less than `13`, and `14, 26` on its right is greater than `13`. `13` is at the sorted index
- To find `pivot` described as above, we simply need to do a prefix-maximum and a suffix-minimum number by using prefix array. For each index `i`, make sure that
	- Prefix-maximum is less than `nums[i]`
	- Suffix-minimum is greater than `nums[i]`
	- Count & return the total count of these `pivots`

> **NOTE**: Quick Sort is not absolutely necessary, but it does help you come up with the idea since it's somewhat familiar to you if you had experience with it.
### Implementation
```
class Solution:
    def binarySearchableNumbers(self, nums: List[int]) -> int:
        ans, n = 0, len(nums)
        prefix = [False] * n                  # Create prefix array and initialize them as False
        cur_max, cur_min = nums[0], nums[-1]  # Initialize prefix_max & suffix_min
        for i in range(n):                    # Update prefix from left to right
            prefix[i] = cur_max <= nums[i] 
            cur_max = max(cur_max, nums[i])
        for i in range(n-1, -1, -1):          # Update suffix and count from right to left
            prefix[i] &= cur_min >= nums[i]   # Use `&` operation (`and` is also fine) to make sure 2 condition hold at the same time
            ans += prefix[i]                  # +1 when `prefix[i]` is True, otherwise +0 (no change)
            cur_min = min(cur_min, nums[i])    
        return ans
```