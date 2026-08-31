# Dart solution

**Author:** buildyourdream
**Votes:** 3
**Link:** [https://leetcode.com/problems/plus-one/solutions/3889759/](https://leetcode.com/problems/plus-one/solutions/3889759/)

---


# Code
```
class Solution {
  List<int> plusOne(List<int> digits) {
   for(int i = digits.length-1 ; i>=0 ; i--) {
     if(digits[i] < 9){
       digits[i] ++;
       return digits;
     }
       digits[i] = 0;
    }
    digits.insert(0, 1);
    return digits;
  }
}

```