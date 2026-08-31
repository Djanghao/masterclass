# one of the easiest soln.

**Author:** Alto-b
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/4444454/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/4444454/)

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
  int mostWordsFound(List<String> sentences) {
    int max = 0;

    for (String sentence in sentences) {
      List<String> words = sentence.split(' ');
      int wordCount = words.length;

      if (wordCount > max) {
        max = wordCount;
      }
    }

    return max;
  }
}

```