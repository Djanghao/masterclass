# 🔥 Dart 🔥 || Simple Fast and Easy || with Explanation

**Author:** ayoubzulfiqar
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3050603/](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3050603/)

---

# \uD83D\uDD25 Dart \uD83D\uDD25 || Simple Fast and Easy || with Explanation


```dart
class UnionFind {
  List<int> parent = List.filled(26, 0);

  UnionFind() {
    for (int i = 0; i < 26; ++i) {
      parent[i] = i;
    }
  }

  int find(int a) {
    if (a != parent[a]) {
      parent[a] = find(parent[a]);
    }
    return parent[a];
  }

  void union(int a, int b) {
    int parentA = find(a);
    int parentB = find(b);

    if (parentA == parentB) return;

    if (parentA < parentB) {
      parent[parentB] = parentA;
    } else {
      parent[parentA] = parentB;
    }
  }
}

class Solution {
  String smallestEquivalentString(String s1, String s2, String baseStr) {
    UnionFind uf = UnionFind();
    for (int i = 0; i < s1.length; ++i) {
      uf.union(s1.codeUnitAt(i) - 'a'.codeUnitAt(0),
          s2.codeUnitAt(i) - 'a'.codeUnitAt(0));
    }

    StringBuffer sb = StringBuffer();
    for (String ch in baseStr.split("")) {
      sb.writeCharCode(
          ('a'.codeUnitAt(0) + uf.find(ch.codeUnitAt(0) - 'a'.codeUnitAt(0))));
    }
    return sb.toString();
  }
}
```

### [GitHub Link](https://github.com/ayoubzulfiqar/leetcode)
