# typescript / javascript solution

**Author:** hossam93
**Votes:** 0
**Link:** [https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/2613755/](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/2613755/)

---

```
function concatenatedBinary(n: number): number {
    
    
    let next = 1;
    let result = 0;
    for (let i = 0; i <= n; i++) {
        if (i == next) {
            next *= 2;
        }
            
        result = (result * next + i) % (10**9 + 7);
        
    }
    return result;

};
```