# C++ | Nearest Power of 2 | Recursion | Easy | ~100% Time ~51% Space

**Author:** amanswarnakar
**Votes:** 40
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3203829/](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3203829/)

---

```
class Solution {
public:
    int minOperations(int n) {
      int x = 1, y = 1;
      if(n <= 0) return 0;  
      if(n == 1) return 1;
      while(x * 2 < n) x *= 2;
      y = x * 2 - n;
      x = n - x;
      int low = minOperations(x);
      int high = minOperations(y);
      return min(low, high) + 1;
    }
};
```