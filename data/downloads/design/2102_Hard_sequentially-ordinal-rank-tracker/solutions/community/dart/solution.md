# Dart, 2 splayTreeSet

**Author:** Dartist
**Votes:** 0
**Link:** [https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/5064687/](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/5064687/)

---

# Code
```
import 'dart:collection';

typedef Scenic = ({int score, String name});

class SORTracker {
  static int sortByScenic(a, b) =>
      a.score == b.score ? a.name.compareTo(b.name) : b.score - a.score;

  final minPq = SplayTreeSet<Scenic>((b, a) => sortByScenic(a, b));
  final maxPq = SplayTreeSet<Scenic>(sortByScenic);

  void add(String name, int score) {
    var scenic = (score: score, name: name);
    minPq.add(scenic);
    maxPq.add(minPq.first);
    minPq.remove(minPq.first);
  }

  String get() {
    var scenic = maxPq.first;
    maxPq.remove(scenic);
    minPq.add(scenic);
    return scenic.name;
  }
}
```