# Using Recursion

**Author:** user7097xf
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-symbol-in-grammar/solutions/4669319/](https://leetcode.com/problems/k-th-symbol-in-grammar/solutions/4669319/)

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
import "dart:math";
class Solution {
  int kthGrammar(int n, int k) {
      //Using recursion
      if(n==1 && k==1){
          return 0;
      }

      int mid = pow(2,n-1)~/2;

      if(k<=mid){
          return kthGrammar(n-1,k);
      }else{
          if( kthGrammar(n-1,k-mid)==0){
              return 1;
          }else{
              return 0;
          }
      }
    
  }
}
```