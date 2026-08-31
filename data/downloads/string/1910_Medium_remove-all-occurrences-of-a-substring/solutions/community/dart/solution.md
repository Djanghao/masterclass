# Remove All Occurences of a Substring

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/6125595/](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/6125595/)

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
  String removeOccurrences(String s, String part) {
    while (s.contains(part)) {
        s = s.replaceFirst(part, "");
    }

    return s;
  }
}
```