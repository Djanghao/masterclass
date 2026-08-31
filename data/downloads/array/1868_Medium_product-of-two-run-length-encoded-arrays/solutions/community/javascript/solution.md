# JavaScript Solution - Two Pointers

**Author:** Deadication
**Votes:** 2
**Link:** [https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/1911698/](https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/1911698/)

---

```
var findRLEArray = function(encoded1, encoded2) {
    const m = encoded1.length;
    const n = encoded2.length;
    
    const res = [];
    
    let p1 = 0;
    let p2 = 0;
    
    while (p1 < m && p2 < n) {
        let [val1, freq1] = encoded1[p1];
        let [val2, freq2] = encoded2[p2];

        const prod = val1 * val2;
        
        const minFreq = Math.min(freq1, freq2);
        
        encoded1[p1][1] -= minFreq;
        if (encoded1[p1][1] === 0) ++p1;
        
        encoded2[p2][1] -= minFreq;
        if (encoded2[p2][1] === 0) ++p2;

        const next = [prod, minFreq];

        if (res.length > 0 && res[res.length - 1][0] === prod) {
            const [topVal, topFreq] = res.pop();
            next[1] += topFreq;
        }
        
        res.push(next);
    }

    return res;
};
```