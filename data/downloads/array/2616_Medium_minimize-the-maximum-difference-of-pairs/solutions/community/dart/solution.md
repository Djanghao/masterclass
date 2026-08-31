# 🔥 Binary Search 🔥 || Simple Fast and Easy || with Explanation 😈

**Author:** ayoubzulfiqar
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3885221/](https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3885221/)

---

# \uD83D\uDD25 Binary Search \uD83D\uDD25 || Simple Fast and Easy || with Explanation \uD83D\uDE08


## Intuition

Given a sorted list of integers `nums` and an integer `p`, the goal is to find the minimum maximum difference between any two elements when dividing the list into `p` subarrays. 

## Approach

The code uses a binary search strategy. It initializes `left` to 0 (minimum possible maximum difference) and `right` to the maximum possible difference between the largest and smallest element in the sorted list.

Inside the binary search loop, the code calculates the middle value `mid`. The `helper` function is then used to check if it's possible to divide the list into `p` subarrays with maximum difference less than or equal to `mid`.

The `helper` function iterates through the sorted `nums` list. It counts the number of pairs of adjacent elements whose difference is less than or equal to `mid`. If the count of such pairs is greater than or equal to `p`, it means it's possible to divide the list into `p` or fewer subarrays while maintaining the maximum difference constraint.

If `helper` returns `true`, the binary search narrows the search range to the left half by updating `right` to `mid`. Otherwise, the search range is narrowed to the right half by updating `left` to `mid + 1`.

This binary search process continues until `left` and `right` cross each other, at which point the loop stops, and `left` represents the minimum maximum difference that satisfies the condition.

## Time Complexity

The sorting step takes O(n * log n) time, and the binary search step takes O(log(maxVal)) time, where `n` is the length of the `nums` array and `maxVal` is the maximum possible difference between any two elements. Thus, the total time complexity is O(n * log n + log(maxVal)).

## Space Complexity

The algorithm uses a constant amount of additional space for variables, so the space complexity is O(1).

Overall, this approach is quite efficient in solving the problem by utilizing binary search to find the optimal solution that minimizes the maximum difference between any two elements while dividing the list into `p` subarrays or fewer.

```dart

class Solution {
  int minimizeMax(List<int> nums, int p) {
    nums.sort();
    int left = 0;
    int right = nums[nums.length - 1] - nums[0];

    while (left < right) {
      int mid =left + (right + left) ~/ 2;
      if (helper(nums, mid, p)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  bool helper(List<int> nums, int mid, int p) {
    int count = 0;
    for (int i = 0; i < nums.length - 1 && count < p;) {
      if (nums[i + 1] - nums[i] <= mid) {
        count++;
        i += 2;
      } else {
        i++;
      }
    }
    return count >= p;
  }
}
```

## [GitHub](https://github.com/ayoubzulfiqar/leetcode)