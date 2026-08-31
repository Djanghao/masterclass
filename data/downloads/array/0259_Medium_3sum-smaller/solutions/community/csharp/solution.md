# C# Two pointers

**Author:** nonox530
**Votes:** 0
**Link:** [https://leetcode.com/problems/3sum-smaller/solutions/5319585/](https://leetcode.com/problems/3sum-smaller/solutions/5319585/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    public int ThreeSumSmaller(int[] nums, int target) {
        Array.Sort(nums);
        // [-3, -2, 0, 1, 2, 3] 2 < target=3
        int ans = 0;
        int n = nums.Length;
        for (int i = 0; i < n-2; i++) {
            int targetJK = target - nums[i];
            // two pointers;
            int left = i + 1;
            int right = n - 1;
            while (left < right) {
                if (nums[left] + nums[left + 1] >= targetJK) break;
                // 1. move right unitl sum < target
                while (nums[left] + nums[right] >= targetJK) {
                    right --;
                }

                // 2. put all (i, left, k) into answer
                ans += right - left;

                // 3. Move left by 1
                left ++;
            }
        }

        return ans;
    }
}
```