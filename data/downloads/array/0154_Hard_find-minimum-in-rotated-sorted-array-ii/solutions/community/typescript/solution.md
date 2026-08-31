# 💥[EXPLAINED] Runtime beats 92.59% (TypeScript)

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/5679490/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/5679490/)

---

# Intuition
We need to find the smallest number in a rotated, sorted array that may have duplicate values.

# Approach
Binary Search: Use two pointers to search for the minimum.
Compare Values:

If the middle value is less than the end value, the minimum is in the left part.

If the middle value is greater, the minimum is in the right part.

If they are equal, move the end pointer left to handle duplicates.

# Complexity
- Time complexity:
O(log n) on average; O(n) in the worst case with many duplicates.

- Space complexity:
O(1), as no extra space is used.

# Code
```typescript []
function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] < nums[right]) {
            right = mid;
        } else if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right--; // Reduce search space linearly due to duplicates
        }
    }

    return nums[left];
}

// Example usage
const nums1 = [1, 3, 5];
console.log(findMin(nums1)); // Output: 1

const nums2 = [2, 2, 2, 0, 1];
console.log(findMin(nums2)); // Output: 0

```