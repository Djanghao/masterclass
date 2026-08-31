# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/4899620/](https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/4899620/)

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
  int countPairs(List<int> nums, int k) {
    Map<int, int> m = {};
    var ans = 0;

    for (final num in nums) {
        final greatestCommonDivisor = gcd(k, num);
        for (final key in m.keys) {
            if ((key * greatestCommonDivisor) % k == 0) {
                ans += m[key]!;
            }
        }

        m[greatestCommonDivisor] = (m[greatestCommonDivisor] ?? 0) + 1;
    }

    return ans;
  }

  int gcd(int a, int b) {
    if (b == 0) {
        return a;
    }

    return gcd(b, a % b);
  }
}
```