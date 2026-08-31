# JAVA for Beginners with comments Bit Manipulation - 1 ms

**Author:** Its_Smriti
**Votes:** 7
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/2902450/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/2902450/)

---

a = last digit of n
**right shift n by 1;**
i.e 
**if n = 101
n>>1 = 010**   rightmost 1 will be discarded
b = last digit after shifting
# Code
```
class Solution {
    public boolean hasAlternatingBits(int n) {
        while(n!=0){
            int a=(n&1);
            n>>=1;
            int b=(n&1);
            if(a==b)
                return false;
        }
        return true;
    }
}
```