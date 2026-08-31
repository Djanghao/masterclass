# JavaScript - Fast Pow

**Author:** Deadication
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/1980010/](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/1980010/)

---

```
var minNonZeroProduct = function(p) {
    p = BigInt(p);
    
    const MOD = BigInt(1e9 + 7);
    const first = ((1n << p) - 1n);
    
   const half = first / 2n;
    
    const second = powMOD(first - 1n, half); 
    
    return (first * second) % MOD;
    
    function powMOD(num, exp) {
        if (exp === 0n) return 1n; 
        
        const tmp = powMOD(num, exp >> 1n);
        
        let res = (tmp * tmp) % MOD;
        
        if (exp % 2n) res = (res * num) % MOD;
        
        return res;
    }
};  
```
