# Python Two pointer well explain solution quick and still mantain O(1) space complexity

**Author:** gsmulbah2500
**Votes:** 104
**Link:** [https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/4363338/](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/4363338/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution is to use a `two-pointer` approach on a sorted array. Sorting the array allows us to efficiently find pairs of numbers that sum up to the target value `k`. The two pointers (`left` and `right`) are initialized at the beginning and end of the sorted array, and we move them towards each other based on the sum of the numbers at those positions.

# Approach
<!-- Describe your approach to solving the problem. -->
**Sort the array:** We begin by sorting the input array nums. Sorting is essential for the two-pointer approach. using the `nums.sort()`

**Iterate with two pointers:**  Use a while loop to iterate until `left` pointer is less than `right` pointer.
    - If the sum of `nums[left]` and `nums[right]` is equal to the target k, we have found a pair, so we increment the operation count and move both pointers towards the center
    - If the sum is less than **k**, we need a larger sum, so we move the left pointer to the right.
    - If the sum is greater than **k**, we need a smaller sum, so we move the right pointer to the left.

**Return the count:** After the while loop completes, return the operation count, which represents the maximum number of pairs that can be formed to achieve the target sum.


 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is dominated by the sorting step, which is typically O(n log n) for the average case. The two-pointer traversal of the sorted array is O(n), so the overall time complexity is **O(n log n)**
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is **O(1)** because the algorithm uses a constant amount of extra space for the pointers and variables, regardless of the input size.
# Code
```
class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        nums.sort()

        left = 0 
        right = len(nums) - 1
        operation = 0 

        while left < right:
            if ((nums[left] + nums[right]) == k):
                operation += 1
                left +=1 
                right -=1
            elif((nums[left] + nums[right]) < k):
                left += 1
            else:
                right -= 1
        return operation

```

## Please upvote this solution if you enjoyed it
![Screenshot from 2023-12-04 23-45-12.png](./images/0.png)