# Dart solution with explanation

**Author:** Caypoh23
**Votes:** 0
**Link:** [https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/5893038/](https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/5893038/)

---

# Intuition
The task is to find a peak element in a list where a peak element is greater than its neighbors. Since the list does not need to be sorted, a linear scan would work, but we can improve this by using a binary search approach. This allows us to leverage the fact that if one side is larger than the current middle, a peak must exist on that side.

# Approach
1. **Binary Search**:
   - We start with two pointers, `left` at the beginning and `right` at the end of the list.
   - In each iteration, calculate the middle index (`mid`).
   - Compare the middle element with its right neighbor (`nums[mid]` vs `nums[mid + 1]`):
     - If `nums[mid] > nums[mid + 1]`, then a peak must be on the left half, including `mid` itself, so we move `right` to `mid`.
     - If `nums[mid] <= nums[mid + 1]`, a peak must be in the right half, so we move `left` to `mid + 1`.
   - Continue until `left` equals `right`, at which point `left` will be the peak index.
   
2. **Guaranteed Peak**:
   - Since the list has no strict requirement of being sorted, the binary search works by ensuring we move towards the side with a potential peak based on comparisons. There will always be a peak, and we will find it when `left == right`.

# Complexity
- **Time Complexity**: 
   - Binary search takes \\(O(\\log n)\\), as the search space is halved in each iteration.
   
- **Space Complexity**: 
   - The space complexity is \\(O(1)\\), as we only use a few variables for tracking indices.

# Code
```dart
class Solution {
  int findPeakElement(List<int> nums) {
    int left = 0;
    int right = nums.length - 1;
    while(left < right) {
        final mid = (left + right) >> 1;
        if( nums[mid] > nums[mid + 1]) {
            right = mid;
        } else if (nums[mid] <= nums[mid + 1]) {
            left = mid + 1;
        }
    }
    return left;
  }
}
