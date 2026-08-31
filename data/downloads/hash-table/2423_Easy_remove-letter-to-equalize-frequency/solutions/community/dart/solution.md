# Oh god, This problem wasn't easy | Dart

**Author:** AnasAlnajjar
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/3165944/](https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/3165944/)

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
  bool equalFrequency(String word) {
  int min = 101;
  int max = 0;
  int maxNo = 0;
  int frequency = 0;
  int sum = 0;
  List ignore = <String>[];
  String order;
  String ii;

  mainLoop:
  for (int i = 0; i < word.length; i++) {
    order = ignore.join('');
    ii = word[i];

    for (int j = 0; j < word.length; j++) {
      if (i == j) {
        continue;
      } else if (order.contains(ii)) {
        continue mainLoop;
      } else {
        if (word[i] == word[j]) {
          frequency++;
        }
      }
    }
    ignore.add(word[i]);

    if (frequency > max) {
      maxNo = 0;
      max = frequency;
      maxNo = 1;
    } else if (frequency == max) {
      maxNo++;
    }
    sum = sum + frequency;

    if (i == 0) {
      min = frequency;
    }
    if (min > frequency) {
      min = frequency;
    }
    frequency = 0;
  }
  if (((max - min) > 1) && maxNo == 1 && (word.length - (max + 1) != 1) ||
      (max >= 1 && max != sum && sum * 2 == word.length) ||
      (max >= 1 && max != sum && max - min == 0) ||
      (maxNo > 1 && max >= 1 && (word.length - ((maxNo * max) + maxNo) != 1)) ||
      (maxNo == 1 && max > 1 && max-min!=1 && (word.length - (max + 1)) != 1 && (word.length - (max + 1)) != 0)) {
    return false;
  } else {
    return true;
  }
}
}

```