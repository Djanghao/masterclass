# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/4098646/](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/4098646/)

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
```
class Solution {
  int punishmentNumber(int n) {

    bool backtrack(String candidate, int target, int idx, List<int> cur) {
        if (idx == candidate.length) {
            final sum = cur.fold<int>(0, (a, b) => a + b);
            if (sum == target) {
                return true;
            }
            return false;
        }

        for (int i = idx; i < candidate.length; i++) {
            final current = int.parse(candidate.substring(idx, i + 1));
            cur.add(current);
            if (backtrack(candidate, target, i + 1, cur)) {
                return true;
            }
            cur.removeLast();
        }

        return false;
    }

    var total = 0;
    var squared = 1;
    for (int i = 1; i <= n; i++) {
        squared = i * i;
        if (backtrack(squared.toString(), i, 0, [])) {
            total += squared;
        }
    }

    return total;
  }
}
```