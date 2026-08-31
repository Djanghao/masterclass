# Dart solution

**Author:** Dartist
**Votes:** 2
**Link:** [https://leetcode.com/problems/open-the-lock/solutions/5056909/](https://leetcode.com/problems/open-the-lock/solutions/5056909/)

---

# Code
```
import 'dart:collection';

class Solution {
  int openLock(List<String> deadends, String target) {
    var queue = Queue.of(['0000']);
    var visited = Set.of(deadends);
    for (int depth = 0; queue.isNotEmpty; depth++) {
      var qLength = queue.length;
      for (int i = 0; i < qLength; i++) {
        var node = queue.removeFirst();
        if (node == target) return depth;
        if (!visited.add(node)) continue;
        queue.addAll(getSuccessors(node));
      }
    }
    return -1;
  }

  List<String> getSuccessors(String str) {
    List<String> successors = [];
    for (var (i, char) in str.split('').indexed) {
      var digit = 10 + int.parse(char);
      var reverse = (digit - 1) % 10;
      var advance = (digit + 1) % 10;
      [reverse, advance]
          .map((digit) => str.replaceRange(i, i + 1, "$digit"))
          .forEach(successors.add);
    }
    return successors;
  }
}
```