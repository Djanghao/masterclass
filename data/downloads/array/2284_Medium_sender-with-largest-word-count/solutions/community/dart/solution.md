# Simple solution | Dart

**Author:** _DREDD_
**Votes:** 0
**Link:** [https://leetcode.com/problems/sender-with-largest-word-count/solutions/5789956/](https://leetcode.com/problems/sender-with-largest-word-count/solutions/5789956/)

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
  String largestWordCount(List<String> messages, List<String> senders) {
    String result = '';
    Map<String, int> countWords = {};
    int words = 0;

    for (int i = 0; i < senders.length; i++) {
        if (countWords.containsKey(senders[i])) {
            countWords[senders[i]] = countWords[senders[i]]! + messages[i].split(' ').length;
        } else {
            countWords[senders[i]] = messages[i].split(' ').length;
        }
    }

    countWords.forEach((key, value) {
        if (words <= value) {
            if (words == value) {
                result = result.compareTo(key) == -1 ? key : result;
            } else {
                words = value;
                result = key;
            }
        }
    });

    return result;
  }
}
```