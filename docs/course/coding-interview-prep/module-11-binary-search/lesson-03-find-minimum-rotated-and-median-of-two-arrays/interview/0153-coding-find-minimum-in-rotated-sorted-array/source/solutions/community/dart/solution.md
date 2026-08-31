# Dart Solution with explanation

**Author:** Caypoh23
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/5889472/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/5889472/)

---

# Intuition
The array is sorted but rotated, meaning the minimum element in the array can be found by exploiting its structure. A binary search approach is optimal here since the array is partially sorted, allowing us to reduce the search space logarithmically.

# Approach
- If the first element is less than or equal to the last element, the array has not been rotated, and the first element is the minimum.
- Use binary search to find the point of rotation. The minimum element will be at this rotation point. If the middle element is greater than or equal to the first element, the rotation point must lie to the right of the middle element. Otherwise, it lies to the left or at the middle.
- Arrays with only one element will return that element as the minimum.
- If no rotation occurs, the first element is the minimum.

# Complexity
- Time complexity: O(logn)

- Space complexity: O(1)

# Code
```dart []
class Solution {
  int findMin(List<int> nums) {
    final length = nums.length - 1;
    if (nums[0] <= nums[length]) return nums[0];
    int left = 0;
    int right = length;
    while(left < right) {
        final mid = left + (right - left) ~/ 2;
        if(nums[0] <= nums[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
  }
}
```