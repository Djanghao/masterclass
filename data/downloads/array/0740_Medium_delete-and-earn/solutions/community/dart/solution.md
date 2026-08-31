# Dart Solution

**Author:** 8hQubQgYlX
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/5368369/](https://leetcode.com/problems/delete-and-earn/solutions/5368369/)

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
  int deleteAndEarn(List<int> nums) {
    if (nums.isEmpty) return 0;

    int maxVal = nums.reduce(max);

    List<int> points = List.filled(maxVal + 1, 0);

    for (int num in nums) {
        points[num] += num;
    }

    List<int> dp = List.filled(maxVal + 1, 0);

    dp[1] = points[1];
    
    for (int i = 2; i <= maxVal; i++ ){
        dp[i] = max(dp[i - 1], dp[i - 2] + points[i]);
    }
    
    return dp[maxVal];
  }
}
```