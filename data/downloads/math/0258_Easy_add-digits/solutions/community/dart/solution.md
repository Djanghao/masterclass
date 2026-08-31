# Dart Solution

**Author:** meetmerahul
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-digits/solutions/3797352/](https://leetcode.com/problems/add-digits/solutions/3797352/)

---


# Code
```
class Solution {
  int addDigits(int num) {
  int temp = 0;
  while (num > 0) {
    temp = temp + num % 10;
    num = num ~/ 10; 
    
    if (num == 0 && temp > 9) {
      num = temp;
      temp = 0;
    }
  }
  return temp;
}
}


  
```