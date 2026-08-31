# Dart Iterative (Recursive will Stack Overflow)

**Author:** darv
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/solutions/3831825/](https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/solutions/3831825/)

---

Leetcode have serious limitation for Dart programmers.

So far, I have submitted the following posts to complain. Please help me upvote them:

* https://leetcode.com/discuss/feedback/3817020/lc-replied-todays-daily-problem-does-not-support-dart
* https://leetcode.com/discuss/feedback/3771971/language-dart-cannot-use-priorityqueue
* https://leetcode.com/discuss/feedback/3747689/can-you-please-add-dart-support-for-todays-daily-challenge-problem
* https://leetcode.com/discuss/feedback/3831815/Dart-recursion-result-into-Stack-overflow


# Code
```
import 'dart:collection';
class Data {
  final int idx, state;
  const Data(this.idx, this.state);
}

class Solution {
  int countPalindromePaths(List<int> parent, String s) {
    final int V = parent.length;
    final g = List.generate(V, (_) => <int>[]);
    for (int idx = 1; idx < V; idx++)
      g[parent[idx]].add(idx);

    final db = new HashMap<int, int>();
    List<Data> stack = [];
    var res = 0;
    stack.add(Data(0, 0));

    while (stack.isNotEmpty) {
      final cur = stack.removeLast();

      final int count = db[cur.state] ?? 0;
      res += count;
      for (int i = 0; i < 26; i++)
        res += db[cur.state ^ (1 << i)] ?? 0;
      db[cur.state] = count + 1;

      final children = g[cur.idx];
      for (int i = children.length - 1; i >= 0; i--) {
        final int next = children[i];
        final int next_state = cur.state ^ (1 << (s[next].codeUnitAt(0) - 'a'.codeUnitAt(0)));
        stack.add(Data(next, next_state));
      }
    }

    return res;
  }
}
```