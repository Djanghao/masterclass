# 🎯🔥 Easiest Approach |✅ Beats 100% in Dart, Python & TypeScript 🔥 |✅ Beginner-Friendly 📌🎯🔥

**Author:** tsharpsahil
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/6101375/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/6101375/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The array is sorted and rotated, meaning the ***minimum element*** is the pivot point where the rotation occurs. Using binary search, we can efficiently ***locate this minimum*** even when duplicates exist.

---
\uD83C\uDFAF\uD83D\uDD25 Easiest Approach |\u2705 Beats 100% in Dart, Python & TypeScript \uD83D\uDD25 |\u2705Beginner-Friendly \uD83D\uDCCC\uD83C\uDFAF\uD83D\uDD25

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initialize pointers**: `lo = 0` and `hi = len(nums) - 1`.

2. **Perform binary search**:
    - If `nums[mid] > nums[hi]`, the minimum is in the right half; set lo = mid + 1.
    - If `nums[mid] < nums[hi]`, the minimum is in the left half; set hi = mid.
    - If `nums[mid] == nums[hi]`, reduce the search space by setting hi -= 1.
3. Stop when `lo == hi`, and return `nums[lo]`.

---


# Complexity
- **Time complexity**: $$O(n)$$ in the worst case (when duplicates shrink the search space slowly), otherwise $$O(log n)$$ for distinct elements.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- **Space complexity**: $$O(1)$$ as no extra space is used.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

---


# Test Cases 
<!-- $$Where I got stuck$$ -->

```python []
test_cases = [
    # Test Cases where you likely get stuck
    (find_rotation_count, {'array': [1,3,3]}, 1),
    (find_rotation_count, {'array': [10,1,10,10,10]}, 1),
    # Single rotation with duplicates
    (find_rotation_count, {'array': [3, 3, 3, 1, 2, 3]}, 1),
    # No rotation (already sorted with duplicates)
    (find_rotation_count, {'array': [1, 1, 2, 3, 3, 3]}, 1),
    # Full rotation (back to sorted order with duplicates)
    (find_rotation_count, {'array': [1, 1, 2, 3, 3, 3]}, 1),
    # Rotation in the middle with duplicates
    (find_rotation_count, {'array': [3, 4, 4, 4, 1, 2]}, 1),
    # Rotation at the last element with duplicates
    (find_rotation_count, {'array': [2, 3, 3, 3, 3, 1]}, 1),
    # Large list with duplicates and small rotation
    (find_rotation_count, {'array': [103, 103, 103, 1, 2, 103]}, 1),
    # Rotated list with repeated numbers
    (find_rotation_count, {'array': [7, 8, 9, 1, 1, 3, 4, 5, 6]}, 1),
    # List of length 1
    (find_rotation_count, {'array': [1]}, 1),
    # List of length 2, no rotation with duplicates
    (find_rotation_count, {'array': [1, 1]}, 1),
    # List of length 2, with rotation and duplicates
    (find_rotation_count, {'array': [2, 1]}, 1),
    # Rotation with all elements being the same
    (find_rotation_count, {'array': [3, 3, 3, 3, 3]}, 3),
    # Multiple rotations with duplicates
    (find_rotation_count, {'array': [4, 4, 4, 4, 4, 1, 2, 3]}, 1),
]
```

---


# Code Implemention:

# Using Python
```python []
class Solution:
    def findMin(self, nums: list[int]) -> int:
        lo, hi = 0, len(nums) - 1
        while lo < hi:
            mid = (lo + hi) // 2
            if nums[mid] > nums[hi]:  # Minimum is in the right half
                lo = mid + 1
            elif nums[mid] < nums[hi]:  # Minimum is in the left half or at mid
                hi = mid
            else:  # nums[mid] == nums[hi], cannot determine; reduce the search space
                hi -= 1
        return nums[lo]
```

# Using Dart
```Dart []
class Solution {
  int findMin(List<int> nums) {
    int lo = 0;
    int hi = nums.length - 1;
    while (lo < hi) {
      int mid = (lo + hi) ~/ 2;
      // Minimum is in the right half
      if (nums[mid] > nums[hi]) {
        lo = mid + 1;
        // Minimum is in the left half or at mid
      } else if (nums[mid] < nums[hi]) {
        hi = mid;
        // nums[mid] == nums[hi], cannot determine; reduce the search space
      } else {
        hi -= 1;
      }
    }
    return nums[lo];
  }
}
```

# Using TypeScript
```typescript []
function findMin(nums: number[]): number {
    let lo: number = 0;
    let hi: number = nums.length - 1;
    while (lo < hi) {
        let mid: number = Math.floor((lo + hi) / 2);
        // Minimum is in the right half
        if (nums[mid] > nums[hi]) {
            lo = mid + 1;
        } else if (nums[mid] < nums[hi]) {  // Minimum is in the left half or at mid
            hi = mid;
        } else {    // nums[mid] == nums[hi], cannot determine; reduce the search space
            hi -= 1;
        }
    }
    return nums[lo];
};
```

---
# Let me know if you have any further queries :)

![image.png](./images/0.png)

