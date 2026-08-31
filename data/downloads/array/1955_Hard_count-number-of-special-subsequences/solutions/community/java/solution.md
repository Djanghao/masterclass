# Simple Solution Explained   O(n)

**Author:** Akshay0406
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-number-of-special-subsequences/solutions/1376601/](https://leetcode.com/problems/count-number-of-special-subsequences/solutions/1376601/)

---

# For Example : Let nums = {0,1,2,0,1,2}
# Now we will have 3 pointers:
# 1. zero will have the count of subsequences starting and ending with 0
# 2. zeroOne will have the count of subsequences starting with 0 and ending with 1
# 3. zeroOneTwo will have the count of subsequences starting with 0 and ending with 2 
#                       ---------- -----0        1       2         0        1        2
# zero	        --------- 1        1       1         3        3        3
# zeroOne           -----0        1       1         1        5        5
# zeroOneTwo    0         0       1         1        1       7
# For zero Formula : 2*zero + 1
# For zeroOne Formula : 2*zeroOne + zero
# For zero Formula : 2*zeroOneTwo + zeroOne

```
class Solution {
    public int countSpecialSubsequences(int[] nums) {
        long z = 0; //starting and ending with zero
        long zo = 0; //starting with zero and ending with One
        long zot = 0;//starting with zero and ending Two
        int mod = 1000000007;
        for (int i : nums) {
            if (i == 0) {
                z = ((2*z) % mod + 1) % mod;  //zero = 2*zero+1
            } else if (i == 1) {
                zo = ((2 * zo) % mod + z % mod) % mod; //zero = 2*zeroOne+zero
            } else {
                zot = ((2 * zot) % mod + zo % mod) % mod;  //zeroOneTwo = 2*zeroOneTwo+zeroOne
            }
        }
        return (int)(zot%mod);
	}
}
```




