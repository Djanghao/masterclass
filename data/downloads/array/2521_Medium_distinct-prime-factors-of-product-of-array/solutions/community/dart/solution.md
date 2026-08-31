# [Dart] Naive Approach with Set

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/3218948/](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/3218948/)

---

# Complexity
- Time complexity:
O(NLogN)

- Space complexity:
O(N)

# Code
```
import 'dart:collection';

class Solution {
  int distinctPrimeFactors(List<int> nums) {
    HashSet<int> set = HashSet();
    for (var x in nums.toSet()) {
        set.addAll(distinctPrimeFactorsForX(x));
    }
    return set.length;
  }
  
  HashSet<int> distinctPrimeFactorsForX(int n) {
    HashSet<int> factors = HashSet();
    int divisor = 2;
    while (n > 1) {
        if (n % divisor == 0) {
        factors.add(divisor);
        n ~/=
            divisor; // divide n by divisor and round down to the nearest integer
        } else {
        divisor++;
        }
    }
    return factors;
    }
}
```