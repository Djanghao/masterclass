# [Dart] Not Easy Problem but tagged as Easy Zzz!!

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3204153/](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3204153/)

---

# Complexity
- Time complexity:
O(logN)

- Space complexity:
O(1)

# Code
```
class Solution {
  int minOperations(int n) {
    int cnt = 0;
    while (n > 0) {
      // This will give u the lowerbound exponential of n
      // If u don't understand, just find with bruteforce
      // the find previous nearest power of n and next greater
      int m = log(n) ~/ log(2);
      int prevPow = pow(2, m).toInt();
      int nextPow = pow(2, m + 1).toInt();
      // We can choose the larger one or smaller, so we choose the min
      // diff of them
      int diff1 = n - prevPow;
      int diff2 = nextPow - n;

      n = min(diff1, diff2);
      cnt++;
    }

    return cnt;
  }
}

```