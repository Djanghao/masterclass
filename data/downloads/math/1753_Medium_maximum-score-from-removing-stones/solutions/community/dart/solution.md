# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/4459241/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/4459241/)

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
  int maximumScore(int a, int b, int c) {
    final List<int> piles = [a, b, c];
    var count = 0;
    while (true) {
        piles.sort();
        final pileSize = piles.where((e) => e != 0).length;
        if (pileSize > 1) {
            piles[1] -= 1;
            piles[2] -= 1;
            count += 1;
        } else {
            break;
        }
    }

    return count;
  }
}

```