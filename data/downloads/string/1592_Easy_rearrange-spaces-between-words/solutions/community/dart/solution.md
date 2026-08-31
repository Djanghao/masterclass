# Dart solution

**Author:** abbos2101
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/5457190/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/5457190/)

---

```
class Solution {
  String reorderSpaces(String text) {
    int spsC = text.split('').fold(0, (v, e) => e == ' ' ? v + 1 : v);
    Iterable<String> words = text.split(' ').where((e) => e.isNotEmpty);
    if (words.length == 1) {
      return text.trim() + List.generate(spsC, (i) => ' ').join();
    }

    String sps = List.generate(spsC ~/ (words.length - 1), (i) => ' ').join();
    String res = words.elementAt(0);
    for (int i = 1; i < words.length; i++) {
      res += sps;
      res += words.elementAt(i);
    }
    res += List.generate(spsC % (words.length - 1), (i) => ' ').join();
    return res;
  }
}
```