# Dart solution

**Author:** ibrokhim_bek_
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-common-word/solutions/4420007/](https://leetcode.com/problems/most-common-word/solutions/4420007/)

---

# Code
```
class Solution {
  String mostCommonWord(String paragraph, List<String> banned) {
  final s1 = paragraph.toLowerCase().replaceAll(RegExp(r'\\W+'), ' ');
    List<String> words = s1.split(RegExp(r'\\s+'));
  Map<String, int> map = Map<String, int>();
  int max = 0;
  String result = '';
  for (var word in words) {
    if (!banned.contains(word)) {
      map[word] = (map[word] ?? 0) + 1;
      if (map[word]! > max) {
        max = map[word]!;
        result = word;
      }
    }
  }
  return result;
  }
}
```