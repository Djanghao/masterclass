# Union Find

**Author:** aospiridonov
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4779296/](https://leetcode.com/problems/greatest-common-divisor-traversal/solutions/4779296/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(\\log m \\cdot n)$$

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  bool canTraverseAllPairs(List<int> nums) {
    final int n = nums.length;
    if (n == 1) {
      return true;
    }
    final f = List<int>.generate(n, (i) => i);
    final num = List<int>.filled(n, 1);

    final have = <int, int>{};
    for (int i = 0; i < n; ++i) {
      int x = nums[i];
      if (x == 1) {
        return false;
      }
      for (int d = 2; d * d <= x; ++d) {
        if (x % d == 0) {
          if (have.containsKey(d)) {
            merge(f, num, i, have[d]!);
          } else {
            have[d] = i;
          }
          while (x % d == 0) {
            x ~/= d;
          }
        }
      }
      if (x > 1) {
        if (have.containsKey(x)) {
          merge(f, num, i, have[x]!);
        } else {
          have[x] = i;
        }
      }
    }
    return num[getf(f, 0)] == n;
  }

  int getf(List<int> f, int x) {
    return f[x] == x ? x : (f[x] = getf(f, f[x]));
  }

  void merge(List<int> f, List<int> num, int x, int y) {
    x = getf(f, x);
    y = getf(f, y);
    if (x == y) {
      return;
    }
    if (num[x] < num[y]) {
      int t = x;
      x = y;
      y = t;
    }
    f[y] = x;
    num[x] += num[y];
  }
}
```