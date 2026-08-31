# 493: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 18
**Link:** [https://leetcode.com/problems/reverse-pairs/solutions/3282992/](https://leetcode.com/problems/reverse-pairs/solutions/3282992/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Define a class Solution with a method reversePairs.
2. Within the reversePairs method, define a function merge_sort which takes in the starting and ending indices of a subarray and returns the count of reverse pairs within that subarray.
3. If the start index is greater than or equal to the end index, return 0 as there are no reverse pairs in a subarray of length 0 or 1.
4. Find the middle index of the subarray and recursively call merge_sort on the left and right halves of the subarray. Add the results of these recursive calls to count.
5. Initialize two pointers i and j to the start of the left and right halves, respectively. While both pointers are within their respective halves, compare the values at i and j. If the value at i is greater than twice the value at j, then increment count by the number of remaining elements in the left half (from i to mid). Increment j to move to the next element in the right half. Otherwise, increment i to move to the next element in the left half.
6. After counting the reverse pairs, merge the left and right halves of the subarray in sorted order.
7. Return count after all recursive calls have completed.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        def merge_sort(start: int, end: int) -> int:
            if start >= end:
                return 0
            mid = (start + end) // 2
            count = merge_sort(start, mid) + merge_sort(mid + 1, end)

            # Count the number of reverse pairs between two sorted halves
            i = start
            j = mid + 1
            while i <= mid and j <= end:
                if nums[i] > 2 * nums[j]:
                    count += mid - i + 1
                    j += 1
                else:
                    i += 1

            # Merge two sorted halves
            nums[start:end + 1] = sorted(nums[start:end + 1])

            return count

        return merge_sort(0, len(nums) - 1)

```