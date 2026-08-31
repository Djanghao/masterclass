# Ezy Soluction...

**Author:** saslo0165
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/4334213/](https://leetcode.com/problems/reverse-integer/solutions/4334213/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
First, we need to check whether the number is negative or positive, then convert the number to positive, reverse that number, and check if the integer value is signed in 32 bits or not.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:ffi';

class Solution {
  int reverse(int x) {
    int a = x<0 ? -(int.parse((-x).toString().split('').reversed.join())):
        int.parse(x.toString().split('').reversed.join());
    return a >= 2147483648 || a < -2147483648 ? 0:a;
  }
}
```