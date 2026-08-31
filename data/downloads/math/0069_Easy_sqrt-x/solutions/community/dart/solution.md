# not use any built-in exponent function or operator.   Dart solution and explanation

**Author:** _abhiramks
**Votes:** 4
**Link:** [https://leetcode.com/problems/sqrtx/solutions/5986570/](https://leetcode.com/problems/sqrtx/solutions/5986570/)

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
```dart []
class Solution {
  int mySqrt(int x) {
// base = 2;
   int start = 2;
// in the case of 1
  if(x <= 1) return x == 1? 1:0;
   while(start * start <= x){
     start++;
   }
// decresing
   return start - 1;
  }
}

// Loop Execution:

// // start = 2: 
// // 2\u22172=4
// // 2\u22172=4, which is less than \\U0001d465=10
// // x=10, so increment start to 3.
// // start = 3: 3\u22173=9
// // 3\u22173=9, which is still less than \\U0001d465=10
// // x=10, so increment start to 4.start = 4: 
// // 4\u22174=16
// // 4\u22174=16, which is greater than \\U0001d465=10
// // x=10, so we exit the loop.
```