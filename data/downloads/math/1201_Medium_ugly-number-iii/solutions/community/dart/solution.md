# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/ugly-number-iii/solutions/4543071/](https://leetcode.com/problems/ugly-number-iii/solutions/4543071/)

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
  int nthUglyNumber(int n, int a, int b, int c) {
    var low = min(a, min(b, c));
    var high = min(a, min(b, c)) * n;
    final ab = (a * b) ~/ a.gcd(b);
    final bc = (b * c) ~/ b.gcd(c);
    final ac = (a * c) ~/ a.gcd(c);
    final abc = (a * bc) ~/ a.gcd(bc);
    while (low < high) {
        var mid = (low + high) ~/ 2;
        final cnt = (mid ~/ a) + (mid ~/ b) + (mid ~/ c) - (mid ~/ ab) - (mid ~/ bc) - (mid ~/ ac) + (mid ~/ abc);
        if (cnt < n) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
  }
}
```