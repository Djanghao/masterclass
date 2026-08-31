# 💥[EXPLAINED] Runtime beats 95.00%

**Author:** r9n
**Votes:** 8
**Link:** [https://leetcode.com/problems/valid-triangle-number/solutions/5677111/](https://leetcode.com/problems/valid-triangle-number/solutions/5677111/)

---

# Intuition
Sort the array to simplify checking triangle validity. For each potential largest side, use two pointers to count valid triangles efficiently.

# Approach
1 - Sort the array.

2 - For each element as the largest side, use two pointers to find all pairs that form valid triangles.

3 - Count valid triangles using the sorted order and two-pointer technique.

This approach runs in O(n^2) time.

# Complexity
Time complexity:
O(n^2): Sorting takes O(n log n), and the two-pointer loop runs in O(n^2) in the worst case. This is the best time complexity achievable for this problem using this approach.

Space complexity:
O(1): No additional data structures are used, and the sorting is done in place.

# Code
```typescript []
function triangleNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let count = 0;

    for (let i = nums.length - 1; i >= 2; i--) {
        let left = 0;
        let right = i - 1;
        while (left < right) {
            if (nums[left] + nums[right] > nums[i]) {
                count += right - left;
                right--;
            } else {
                left++;
            }
        }
    }

    return count;
}

```