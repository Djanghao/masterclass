# JS & TS 100% faster simple solution

**Author:** JinZihang
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/1823382/](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/1823382/)

---

Please refer to [this post](http://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/discuss/516968/JavaC%2B%2BPython-Easy-and-Concise) for explanations.
```
function countOrders(n: number): number {
    let res = 1, mod = 10**9 + 7;
    
    for (let i = 1; i <= n; i++)
        res = res * (i * 2 - 1) * i % mod;
    
    return res;
};
```