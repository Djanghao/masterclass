# 🚀🚀 Fastest Dart solution!!! Binary Search😈😈?? Wow, O(N*logN) 😮🚀🚀

**Author:** LTDigor
**Votes:** 4
**Link:** [https://leetcode.com/problems/koko-eating-bananas/solutions/3272560/](https://leetcode.com/problems/koko-eating-bananas/solutions/3272560/)

---

# Complexity
- Time complexity: $$O(n*logn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int minEatingSpeed(List<int> piles, int h) {
      int minK = 1;
      int maxK = piles.reduce(max);

      while(minK <= maxK) {
          int middle = (minK + maxK) ~/ 2;

          //count hours
          int hours = 0;
          for (int pile in piles ) {
              hours += pile ~/ middle;
              hours += pile % middle == 0 ? 0 : 1;
          }
          
          if (hours <= h) {
              maxK = middle - 1;
          }
          else {
              minK = middle + 1;
          }
      }

      return minK;
  }
}
```