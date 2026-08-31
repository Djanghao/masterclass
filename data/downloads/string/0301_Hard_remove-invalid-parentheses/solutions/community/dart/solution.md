# Dart solution

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-invalid-parentheses/solutions/3766631/](https://leetcode.com/problems/remove-invalid-parentheses/solutions/3766631/)

---

# Code
```
class Solution {
  List<String> split(String s) {
    List<String> res = [];
    for (int i = 0; i < s.length; i++) {
      final begin = i;
      while (i + 1 < s.length && s[i + 1] == s[begin]) i++;
      res.add(s.substring(begin, i + 1));
    }
    return res;
  }

  List<String> removeInvalidParentheses(String s) {
    List<String> list = split(s);
    var length = 0;
    final List<String> res = [];
    void dfs(int idx, int bal, List<String> work) {
      if (bal < 0) return;

      if (idx == list.length) {
        if (bal == 0) {
          final tmp = work.join();
          if (tmp.length == length) {
            res.add(tmp);
          } else if (tmp.length > length) {
            length = tmp.length;
            res.clear();
            res.add(tmp);
          }
        }
        return;
      }

      if (list[idx][0] == '(') {
        dfs(idx + 1, bal, work);
        for (int i = 1; i <= list[idx].length; i++) {
          work.add(list[idx].substring(0, i));
          dfs(idx + 1, bal + i, work);
          work.removeLast();
        }
      } else if (list[idx][0] == ')') {
        dfs(idx + 1, bal, work);
        for (int i = 1; i <= list[idx].length; i++) {
          work.add(list[idx].substring(0, i));
          dfs(idx + 1, bal - i, work);
          work.removeLast();
        }
      } else {
        work.add(list[idx]);
        dfs(idx + 1, bal, work);
        work.removeLast();
      }
    }
    dfs(0, 0, []);
    return res;
  }
}
```