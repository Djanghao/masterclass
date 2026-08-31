# Number of Digit One with 100% beats ❤️

**Author:** user5064v
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/4424907/](https://leetcode.com/problems/number-of-digit-one/solutions/4424907/)

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
  int countDigitOne(int n) {
   int count = 0;
  int step = 1 ;
do{
     int before = n ~/ (step*10 );
  
   int after = n % step;
  
   int current = (n ~/ step) % 10;
  
      if (current == 0) {
         count += before * step;
    } else if (current == 1) {
         count += before * step + after + 1;
  
    } else {
         count += (before + 1) * step;
    }
    step *=10;
  
}
  while(n ~/ step > 0);

  return count;
  }
}
```