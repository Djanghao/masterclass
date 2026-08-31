# Solution Beat 94% in Time and 63% in Space Using DART.🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-repeating-character-replacement/solutions/5221912/](https://leetcode.com/problems/longest-repeating-character-replacement/solutions/5221912/)

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
  int characterReplacement(String s, int k) {
    List<int> arr = List.filled(26, 0);
    int ans = 0;
    int maxCount = 0;
    int i = 0;

    for (int j = 0; j < s.length; j++) {
      arr[s.codeUnitAt(j) - 'A'.codeUnitAt(0)]++;
      maxCount = max(maxCount, arr[s.codeUnitAt(j) - 'A'.codeUnitAt(0)]);

      if (j - i + 1 - maxCount > k) {
        arr[s.codeUnitAt(i) - 'A'.codeUnitAt(0)]--;
        i++;
      }
      ans = max(ans, j - i + 1);
    }
    return ans;
  }
}
```