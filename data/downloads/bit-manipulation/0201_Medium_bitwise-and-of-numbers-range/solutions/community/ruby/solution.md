# Best Simple Solution Explained

**Author:** darian-catalin-cucer
**Votes:** 2
**Link:** [https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/3145371/](https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/3145371/)

---


```
public class Solution {
    public int rangeBitwiseAnd(int m, int n) {
        if(m == 0){
            return 0;
        }
        int moveFactor = 1;
        while(m != n){
            m >>= 1;
            n >>= 1;
            moveFactor <<= 1;
        }
        return m * moveFactor;
    }
}
```