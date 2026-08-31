# [Dart] - Simple solution

**Author:** karp_in_sky
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/5766177/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/5766177/)

---

# Intuition
We can always take the first element. Then, depending on its value (1 or 0) - we should take the opposite one.

# Code
```dart []
class Solution {
  List<String> getLongestSubsequence(List<String> words, List<int> groups) {
    List<String> result = [words[0]];
    int last = groups[0];
    for (int i = 1; i < groups.length; i++) {
        if (groups[i] != last) {
            result.add(words[i]);
            last = groups[i];
        }
    }
    return result;
  }
}
```