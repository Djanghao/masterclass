# [Java] Clean & Concise. Recursive multiplication

**Author:** AkezhR
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/1404022/](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/1404022/)

---

Idea
If you have n = 5. It means 2^5 = 32.
The largest `mx` value is 31.
The left numbers `sm` value is 30.
Since you can swap bits between the numbers and in total get fifteen `1` and fifteen `30` numbers multiplied by `mx` 31.

The main struggle in the problem is implementing the multiplication. This is usually handled by the recursive function.

```
class Solution {
    public int mod = 1_000_000_007;
    public int minNonZeroProduct(int p) {
        if (p == 1) return 1;
        
        long mx = (long)(Math.pow(2, p)) - 1;
        long sm = mx - 1;
        long n = sm/2;
        long sum = rec(sm, n);
        
        return (int)(sum * (mx % mod) % mod); 
    }
    
    public long rec(long val, long n) {
        if (n == 0) return 1;
        if (n == 1) return (val % mod);
        
        long newVal = ((val % mod) * (val % mod)) % mod;
        
        if (n % 2 != 0) {
            return ((rec(newVal, n/2) % mod) * (val % mod)) % mod;
        }
        
        return rec(newVal, n/2) % mod;
    }
}
```