# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/4258719/](https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/4258719/)

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
  int findPairs(List<int> nums, int k) {
    Map<String, int> d = {};
    var count = 0;
    for (int i = 0; i < nums.length - 1; i++) {
        for (int j = i + 1; j < nums.length; j++) {
            final x = nums[i];
            final y = nums[j];
            if (i != j && ((x - y).abs() == k)) {
                final pair = Pair(x, y);
                final reversedPair = Pair(y, x);
                if (!d.containsKey(pair.toString()) || !d.containsKey(reversedPair.toString())) {
                    d[pair.toString()] = 1;
                    d[reversedPair.toString()] = 1;
                    count += 1;
                }
            }
        }
    }

    return count;
  }
}

class Pair {
    Pair(this.x, this.y);

    final int x;
    final int y;

    @override
    String toString() {
        return '''$x,$y''';
    }
}
```