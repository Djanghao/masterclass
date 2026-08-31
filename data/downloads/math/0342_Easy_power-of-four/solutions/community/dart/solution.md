# dart solution easy understandable

**Author:** 4khil_Raj
**Votes:** 2
**Link:** [https://leetcode.com/problems/power-of-four/solutions/4965478/](https://leetcode.com/problems/power-of-four/solutions/4965478/)

---



# Code
```
class Solution {
  bool isPowerOfFour(int n) {
    if(n<=0) return false;
    while(1<n){
        if(n%4!=0){
            return false;
        }n~/=4;
    }return true;
  }
}
```