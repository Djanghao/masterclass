# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement/solutions/4506751/](https://leetcode.com/problems/beautiful-arrangement/solutions/4506751/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    var count = 0;
    int countArrangement(int n) {
        final List<int> nums = List.filled(n + 1, 0);
        backtrack(nums, n, 1);
        return count;
    }

    void backtrack(List<int> nums, int n, int currNum) {
        if (currNum == n + 1) {
            count++;
            return;
        }

        for (int i = 1; i <= n; i++) {
            if (nums[i] == 0 && (currNum % i == 0 || i % currNum == 0)) {
                nums[i] = currNum;
                backtrack(nums, n, currNum + 1);
                nums[i] = 0;
            }
        }
    }
}
```