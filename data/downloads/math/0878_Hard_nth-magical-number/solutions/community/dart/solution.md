# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/nth-magical-number/solutions/4543074/](https://leetcode.com/problems/nth-magical-number/solutions/4543074/)

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
  int nthMagicalNumber(int n, int a, int b) {
    var low = min(a, b);
    var high = min(a, b) * n;
    final ab = (a * b) ~/ a.gcd(b);
    final mod = pow(10, 9).toInt() + 7;
    while (low < high) {
        var mid = (low + high) ~/ 2;
        final cnt = (mid ~/ a) + (mid ~/ b) - (mid ~/ ab);
        if (cnt < n) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low % mod;
  }
}
```