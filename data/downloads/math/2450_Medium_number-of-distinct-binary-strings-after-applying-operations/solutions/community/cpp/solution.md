# My Solution

**Author:** hope_ma
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/2753306/](https://leetcode.com/problems/number-of-distinct-binary-strings-after-applying-operations/solutions/2753306/)

---

```
/**
 * Time Complexity: O(log(n - k + 1))
 * Space Complexity: O(1)
 * where `n` is the length of the string `s`
 */
class Solution {
 public:
  int countDistinctStrings(const string &s, const int k) {
    constexpr int base = 2;
    constexpr int mod = 1000000007;
    const int n = static_cast<int>(s.size());
    int ret = 1;
    for (int p = n - k + 1, b = base; p > 0; p >>= 1) {
      if ((p & 0b1) == 0b1) {
        ret = static_cast<int>((static_cast<long long>(ret) * b) % mod);
      }
      b = static_cast<int>((static_cast<long long>(b) * b) % mod);
    }
    return ret;
  }
};
```