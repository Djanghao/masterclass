# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/5072749/](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/5072749/)

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
  int findMinFibonacciNumbers(int k) {
    final List<int> fib = [];
    fib.addAll([0, 1]);
    var count = 0;

    for (int i = 2; i < k + 2; i++) {
        fib.add(fib[i - 1] + fib[i - 2]);
        if (fib.last > k) {
            break;
        }
    }

    for (int i = fib.length - 1; i >= 0; i--) {
        if (fib[i] <= k) {
            k -= fib[i];
            count++;
        }

        if (k == 0) {
            break;
        }
    }

    return count;
  }
}
```