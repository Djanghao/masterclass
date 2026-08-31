# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3839271/](https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3839271/)

---

# Code
```
class Solution {
  String minimumString(String a, String b, String c) {

    var best = "";
    var best_length = 10000;
    
    String produce2(String a, String b) {
      if (a.indexOf(b) != -1) return a;
      for (int begin = 0; begin < a.length; begin++) {
        if (b.startsWith(a.substring(begin)))
          return a + b.substring(a.length - begin);
      }
      return a + b;
    }
    
    void produce3(String a, String b, String c) {
      final cand = produce2(produce2(a, b), c);
      if (cand.length < best_length
        || (cand.length == best_length && cand.compareTo(best) < 0)
      ) {
        best_length = cand.length;
        best = cand;
      }
    }
    
    produce3(a, b, c);
    produce3(a, c, b);
    produce3(b, a, c);
    produce3(b, c, a);
    produce3(c, a, b);
    produce3(c, b, a);
    return best;
  }
}
```