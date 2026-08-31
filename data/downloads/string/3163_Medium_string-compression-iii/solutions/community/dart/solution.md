# Dart Solution

**Author:** _abhiramks
**Votes:** 5
**Link:** [https://leetcode.com/problems/string-compression-iii/solutions/6004589/](https://leetcode.com/problems/string-compression-iii/solutions/6004589/)

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
  String compressedString(String word) {
    StringBuffer comp = StringBuffer();
    int i = 0;

   while (i < word.length) {
        var currentChar = word[i];
        int count = 0;
        // Count up to 9 consecutive occurrences of the current character
          while (i < word.length && word[i] == currentChar && count < 9) {
            count++;
            i++;
        }
        comp.write('$count$currentChar');
    }
    return comp.toString();

  }
}

```