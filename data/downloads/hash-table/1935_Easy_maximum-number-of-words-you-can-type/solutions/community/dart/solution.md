# Semi Creative

**Author:** Youssef1911
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/5980102/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/5980102/)

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
  int canBeTypedWords(String text, String brokenLetters) {
    List<String> textList = text.split(' ');
    int canbeWrittenSum = textList.length;
    for (var i = 0; i < brokenLetters.length; i++) {
      for (var t = 0; t < textList.length; t++) {
        if (textList[t].contains(brokenLetters[i])) {
          canbeWrittenSum -= 1;
          textList[t] = ''; // Mark word as processed
        }
      }
    }
    return canbeWrittenSum;
  }

}
```