# 324: Time 99.2% and Space 99.16%, Solution with step by step explanation

**Author:** Marlen09
**Votes:** 19
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/3242335/](https://leetcode.com/problems/wiggle-sort-ii/solutions/3242335/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. We first sort the array nums in ascending order.
2. We then find the median of the array (i.e., the middle element if the array has odd length, or one of the two middle elements if the array has even length). We can use (n - 1) // 2 to find the index of the median element.
3. We then create two subarrays: one containing the larger half of the sorted nums array, and one containing the smaller half. We can use slicing to achieve this: nums[mid::-1] gives us the elements from the median index backwards to the start of the array, and nums[:mid:-1] gives us the elements from the median index forwards to the end of the array, in reverse order.
4. Finally, we use slicing again to interleave the elements of the two subarrays. We use nums[::2] to get every second element starting from the first element, and nums[1::2] to get every second element starting from the second element. We assign the elements from the larger subarray to the even indices, and the elements from the smaller subarray to the odd indices.

Here's a step-by-step explanation of how the code works:

1. n = len(nums): Gets the length of the input array nums.

2. nums.sort(): Sorts the array in ascending order. This is necessary because the algorithm needs to rearrange the array in a specific pattern.

3. mid = (n - 1) // 2: Calculates the index of the middle element in the sorted array.

4. nums[::2], nums[1::2] = nums[mid::-1], nums[:mid:-1]: This is where the main algorithm takes place.

- nums[::2]: Slices the array starting from the first element and selects every second element (i.e. elements with even indices).
- nums[1::2]: Slices the array starting from the second element and selects every second element (i.e. elements with odd indices).
- nums[mid::-1]: Slices the array starting from the middle element and selects every element backwards (i.e. in descending order).
- nums[:mid:-1]: Slices the array starting from the element after the middle element and selects every element backwards (i.e. in descending order).
By doing this slicing and reassignment, we're essentially rearranging the array in a "wiggle" pattern. Specifically, the even-indexed elements are the larger half of the sorted array, and the odd-indexed elements are the smaller half of the sorted array. This ensures that adjacent elements alternate between being larger and smaller.

5. The original array nums is now sorted in a wiggle pattern.

Overall, the time complexity of this solution is O(n log n) due to the sorting operation. The space complexity is O(n) due to the slicing and reassignment of nums.

# Complexity
- Time complexity:
99.2%

- Space complexity:
99.16%

# Code
```
class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        n = len(nums)
        nums.sort()
        mid = (n - 1) // 2
        nums[::2], nums[1::2] = nums[mid::-1], nums[:mid:-1]

```