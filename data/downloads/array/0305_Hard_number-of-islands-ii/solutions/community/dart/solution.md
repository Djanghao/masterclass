# Dart: Union find solution with custom Tuple.

**Author:** Coaspe
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-islands-ii/solutions/2938392/](https://leetcode.com/problems/number-of-islands-ii/solutions/2938392/)

---

Dart converted version of [this code](https://leetcode.com/problems/number-of-islands-ii/solutions/75468/compact-python/?orderBy=most_relevant). (Remove rank and pass duplicated position cases)
# Code
```
class Tuple {
  const Tuple(this.x, this.y);
  final x;
  final y;

  @override
  bool operator ==(o) => o is Tuple && x == o.x && y == o.y;
  @override
  int get hashCode => Object.hash(x.hashCode, y.hashCode);
}

class Solution {
  List<int> numIslands2(int m, int n, List<List<int>> positions) {
    Map parent = {};

    Tuple find(Tuple x) {
      if (parent[x] != x) {
        parent[x] = find(parent[x]);
      }
      return parent[x];
    }

    int union(Tuple x, Tuple y) {
      x = find(x);
      y = find(y);
      if (x == y) {
        return 0;
      }
      parent[y] = x;
      return 1;
    }

    var counts = <int>[], count = 0;
    for (var p in positions) {
      var r = p[0], c = p[1];
      if (!parent.containsKey(Tuple(r, c))) {
        var x = Tuple(p[0], p[1]);
        parent[x] = x;
        count += 1;
        for (var y in [
          Tuple(r + 1, c),
          Tuple(r, c + 1),
          Tuple(r - 1, c),
          Tuple(r, c - 1)
        ]) {
          if (parent.containsKey(y)) {
            count -= union(x, y);
          }
        }
        counts.add(count);
      } else {
        counts.add(count);
      }
    }
    return counts;
  }
}

```