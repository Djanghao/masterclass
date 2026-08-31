# [Dart] Straight Forward, Just used Binary Search to find next element && Explained

**Author:** shinewanna97
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/3225624/](https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/3225624/)

---

# Intuition
Sort the char reverse, find limit exceeding by loop, if so search next index with Binary Search and swap it. If not found, set empty string. That's it!!

# Complexity
- Time complexity:
O(NLogN)

- Space complexity:
O(N)

# Code
```
class Solution {
  String repeatLimitedString(String s, int repeatLimit) {
    List<String> chars = s.split('');
    chars.sort((a, b) => b.compareTo(a));

    int n = s.length;
    int c = 1;
    for (var i = 1; i < n; i++) {
      if (chars[i - 1] == chars[i]) {
        c++;
        if (c >= repeatLimit + 1) {
          int index = reverseUpperBound(chars, chars[i].codeUnits[0], start: i);
          if (index == n) {
            chars[i - 1] = '';
            continue;
          }
          var temp = chars[i];
          chars[i] = chars[index];
          chars[index] = temp;
        }
      } else {
        c = 1;
      }
    }

    return chars.join();
  }
}

//* always return next greater element pos
  int reverseUpperBound(List<String> sortedList, int value,
      {int start = 0, int? end}) {
    var min = start;
    var max = end ?? sortedList.length;
    while (min < max) {
      var mid = min + ((max - min) >> 1);
      var element = sortedList[mid].codeUnits[0];
      var comp = element.compareTo(value);
      if (comp >= 0) {
        min = mid + 1;
      } else {
        max = mid;
      }
    }
    return min;
  }
```