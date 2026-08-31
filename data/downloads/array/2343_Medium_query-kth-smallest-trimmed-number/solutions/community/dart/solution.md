# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/4835144/](https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/4835144/)

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
    List<int> smallestTrimmedNumbers(List<String> nums, List<List<int>> queries) {
        final List<int> res = [];
        for (final query in queries) {
            final k = query.first;
            final trim = query.last;
            final List<Pair> pairs = [];
            for (int i = 0; i < nums.length; i++) {
                final numParsed = BigInt.parse(nums[i].substring(nums[i].length - trim));
                final pair = Pair(numParsed, i);
                pairs.add(pair);
            }
            pairs.sort((a, b) {
                final diff = a.numParsed.compareTo(b.numParsed);

                if (diff == 0) {
                    return a.index.compareTo(b.index);
                } else {
                    return diff;
                }
            });
            final atK = pairs[k - 1];
            res.add(atK.index);
        }

        return res;
    }
}

class Pair {
    BigInt numParsed;
    int index;

    Pair(this.numParsed, this.index);

    @override toString() {
        return '''$numParsed, $index''';
    }
}
```