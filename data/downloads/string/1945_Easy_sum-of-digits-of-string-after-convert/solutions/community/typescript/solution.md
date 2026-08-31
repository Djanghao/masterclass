# Typescript | Javascript, 100% faster, 100% memory less

**Author:** tohasan
**Votes:** 5
**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/2643545/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/2643545/)

---

```
function getLucky(s: string, k: number): number {
    const base = 'a'.charCodeAt(0);
    
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const val = s.charCodeAt(i) - base + 1;
        sum += Math.floor(val / 10) + val % 10;
    }
    
    for (let i = 1; i < k; i++) {
        let numStr = sum.toString();
        sum = 0;
        for (let j = 0; j < numStr.length; j++) {
            sum += Number(numStr[j]);
        }
    }
    
    return sum;
}
```

<img alt="submission" src="https://assets.leetcode.com/users/images/c147f210-0da2-4677-8f84-221249d7339e_1664568243.9439604.png" width="600"/>