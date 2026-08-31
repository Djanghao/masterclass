# Easy dart, one for

**Author:** grrad2
**Votes:** 0
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/6100747/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/6100747/)

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
```dart []
class Solution {
  List<String> uncommonFromSentences(String s1, String s2) {
    final list = '$s1 $s2'.split(" ");

    final map = {};

    for (var k in list) {
      map.update(k , (e) => e + 1, ifAbsent: () => 1);
    }

      return map.entries
        .where((e) => e.value == 1)
        .map<String>((e) => e.key)
        .toList();
  }
}
```