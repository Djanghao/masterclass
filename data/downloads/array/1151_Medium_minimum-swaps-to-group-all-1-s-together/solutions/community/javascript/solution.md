# JavaScript Solution - Sliding Window

**Author:** Deadication
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/1367021/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/1367021/)

---

```
var minSwaps = function(data) {
    const n = data.length;
    
    let totOnes = data.reduce((acc, bit) => acc + bit, 0);
    
    let min = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let winOnes = 0;
    
    for (let i = 0; i < n; i++) {   
        winOnes += data[i];
        
        const len = i + 1;

        if (len > totOnes) winOnes -= data[left++];
        if (len >= totOnes) min = Math.min(min, totOnes - winOnes);
    }
    
    return min;
};
```