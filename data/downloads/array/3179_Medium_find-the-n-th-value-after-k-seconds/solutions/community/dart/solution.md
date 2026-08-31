# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5333055/](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5333055/)

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
  int valueAfterKSeconds(int n, int k) {
    int mod = 1000000007;
    List<int> arr = List.filled(n, 1);

    while (k > 0) {
        for (int i = 1; i < n; i++) {
            arr[i] = (arr[i] + arr[i - 1]) % mod;
        }
        k--;
    }

    return arr.last;
  }
}
```