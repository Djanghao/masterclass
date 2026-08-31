# Dart dfs solution

**Author:** Sungoria
**Votes:** 0
**Link:** [https://leetcode.com/problems/similar-string-groups/solutions/5281025/](https://leetcode.com/problems/similar-string-groups/solutions/5281025/)

---

# Intuition
Like all others I tried to combine similar words into a connected graph. Cause the number of such graphs is the answer.

# Approach
To build trees from the original array, I use DFS to find for a new node any similar node in the already built trees. And I make a new node as the root of all similar trees found, which replaces them in the list of constructed ones.

# Complexity
- Time complexity: $$O(n^2)$$
Actually for every new node I only need to check all previous (in worst)

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
One node by every string
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart
class Solution {
  int numSimilarGroups(List<String> strs) {
    final Set<SameNode> roots = {};

    for (var str in strs) {
      final node = SameNode(str);
      addToSomeTree(roots, node);
    }

    return roots.length;
  }

  void addToSomeTree(Set<SameNode> roots, SameNode node) {
    final sameTreeRoots = <SameNode>[];
    for (var root in roots) {
      if (root.val == node.val) {
        return;
      }
      if (root.val.isSame(node.val)) {
        sameTreeRoots.add(root);
        continue;
      }
      final sameUnder = root.sameUnderWith(node);
      if (sameUnder == null) {
        return;
      }
      if (sameUnder) {
        sameTreeRoots.add(root);
      }
    }

    node.same.addAll(sameTreeRoots);
    roots.removeWhere((element) => sameTreeRoots.contains(element));
    roots.add(node);
  }
}

class SameNode {
  final String val;
  final List<SameNode> same = [];

  SameNode(this.val);

  bool? sameUnderWith(SameNode node) {
    for (var root in same) {
      if (root.val.isSame(node.val)) {
        if (root.val == node.val) {
          return null;
        }
        return true;
      }
      final sameUnder = root.sameUnderWith(node);
      if (sameUnder != false) {
        return sameUnder;
      }
    }

    return false;
  }

  @override
  String toString() {
    return '$val, same: $same';
  }
}

extension Ext on String {
  bool isSame(String s) {
    if (this == s) {
      return true;
    }
    final listS = s.codeUnits;
    int diff = 0;
    for (int i = 0; i < length; i++) {
      if (codeUnits[i] != listS[i]) {
        diff++;
      }
      if (diff > 2) {
        break;
      }
    }
    return diff <= 2;
  }
}
```