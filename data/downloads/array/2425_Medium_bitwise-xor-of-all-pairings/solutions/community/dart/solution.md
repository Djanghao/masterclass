# Simple solution | O(n)

**Author:** _DREDD_
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/5737640/](https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/5737640/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  int xorAllNums(List<int> nums1, List<int> nums2) {
    int ans = 0;
    bool isEvenNumsOne = nums1.length.isEven;
    bool isEvenNumsTwo = nums2.length.isEven;

    if (isEvenNumsOne && isEvenNumsTwo) return 0;

    if (isEvenNumsOne && !isEvenNumsTwo) {
        ans = xorSumArr(nums1, ans);
    } else if (!isEvenNumsOne && isEvenNumsTwo) {
        ans = xorSumArr(nums2, ans);
    } else if (!isEvenNumsOne && !isEvenNumsTwo) {
        ans = xorSumArr(nums1, ans);
        ans = xorSumArr(nums2, ans);
    }

    return ans;
  }

  int xorSumArr(List<int> nums, int ans) {
    int xorSumm = ans;

    for (int i = 0; i < nums.length; i++) {
        xorSumm ^= nums[i];
    }

    return xorSumm;
    }
}
```