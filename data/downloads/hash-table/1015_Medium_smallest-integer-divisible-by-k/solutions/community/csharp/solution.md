# C# Solution | Beats 100%

**Author:** anshulgarg904
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/3221160/](https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/3221160/)

---

# Code
```
public class Solution {
    public int SmallestRepunitDivByK(int k) {
        if((k&1) == 0 || k%5 == 0)
            return -1;

        int len = 1;
        int rem = 1%k;

        while(rem != 0){
            rem = rem*10 + 1;
            rem = rem%k;
            len++;
        }

        return len;
    }
}
```