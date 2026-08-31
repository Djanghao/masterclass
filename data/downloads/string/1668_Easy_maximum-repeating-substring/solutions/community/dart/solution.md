# Solution with DP.

**Author:** farkhod98
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-repeating-substring/solutions/5941599/](https://leetcode.com/problems/maximum-repeating-substring/solutions/5941599/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to find max number of repeats of word in sequence.
# Approach
<!-- Describe your approach to solving the problem. -->
This problem has very easy solution with brute force or greedy approachs, but I wanted to solve it with DP. So, I used memorization approach, which memorazies each index repeat counts and returns maximum.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```dart []
class Solution {
  int maxRepeating(String sequence, String word) {
    int n = sequence.length;
    int m = word.length;
    List<int> dp = List.filled(n + 1, 0);
    int maxRepeat = 0;

    for (int i = m; i <= n; i++) {

      if (sequence.substring(i - m, i) == word) {
        dp[i] = dp[i - m] + 1;
        maxRepeat = maxRepeat > dp[i] ? maxRepeat : dp[i]; 
      }
    }
    return maxRepeat;
  }
}
```