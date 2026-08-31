# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/4037911/](https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/4037911/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
## Without Recursion
```
class Solution {
  int getKth(int lo, int hi, int k) {
    final List<Pair<int>> res = [];
    for (var i = lo; i <= hi; i++) {
      final power = powerLevel(i);
      res.add(Pair(i, power));
    }

    res.sort((a, b) {
      if (a.powerLevel == b.powerLevel) {
        return a.cand.compareTo(b.cand);
      } else {
        return a.powerLevel.compareTo(b.powerLevel);
      }
    });
    return res[k - 1].cand;
  }

  int powerLevel(int candidate) {
    var steps = 0;
    while (candidate != 1) {
      if (candidate.isEven) {
        candidate = candidate ~/ 2;
      } else {
        candidate = candidate * 3 + 1;
      }
      steps += 1;
    }

    return steps;
  }
}

class Pair<T extends Object> {
  Pair(this.cand, this.powerLevel);

  final int cand;
  final int powerLevel;
}
```

## With Recursion
```
class Solution {
  int getKth(int lo, int hi, int k) {
    final List<Pair<int>> res = [];
    for (var i = lo; i <= hi; i++) {
      final power = powerLevel(i, 0);
      res.add(Pair(i, power));
    }

    res.sort((a, b) {
      if (a.powerLevel == b.powerLevel) {
        return a.cand.compareTo(b.cand);
      } else {
        return a.powerLevel.compareTo(b.powerLevel);
      }
    });
    return res[k - 1].cand;
  }

  int powerLevel(int candidate, int steps) {
    while (candidate != 1) {
      if (candidate.isEven) {
        return powerLevel(candidate ~/ 2, steps += 1);
      } else {
        return powerLevel(candidate * 3 + 1, steps += 1);
      }
    }
    return steps;
  }
}

class Pair<T extends Object> {
  Pair(this.cand, this.powerLevel);

  final int cand;
  final int powerLevel;
}
```