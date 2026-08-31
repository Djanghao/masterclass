# Simple Dart Solution

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-two-integers/solutions/3572739/](https://leetcode.com/problems/divide-two-integers/solutions/3572739/)

---



# Code
```
class Solution {
  int divide(int dividend, int divisor) {
    if(divisor == 1){
    if(dividend > pow(2,31) - 1){
      return (pow(2,31) - 1).toInt();
    }
    if(dividend < pow(-2,31)){
      return pow(-2,31).toInt();
    }
      return dividend;
    }
    if(divisor == -1){
    if(-dividend < pow(-2,31)){
      return pow(-2,31).toInt();
    }
    if(-dividend > pow(2,31) - 1){
      return (pow(2,31) - 1).toInt();
    }
      return -dividend;
    }
    bool negative = false;
    if(dividend < 0){
      dividend = dividend.abs();
      negative = !negative;
    }
    if(divisor < 0){
      divisor = divisor.abs();
      negative = !negative;
    }
    int ret_val = 0;
    while(dividend >= divisor + divisor + divisor){
      dividend -= divisor + divisor + divisor;
      ret_val += 3;
    }
    while(dividend >= divisor){
      dividend -= divisor;
      ret_val += 1;
    }
    if(-ret_val < pow(-2,31)){
      return pow(-2,31).toInt();
    }
    if(ret_val > pow(2,31) - 1){
      return (pow(2,31) - 1).toInt();
    }
    if(negative){
      return -ret_val;
    }
      return ret_val;
  }
}
```