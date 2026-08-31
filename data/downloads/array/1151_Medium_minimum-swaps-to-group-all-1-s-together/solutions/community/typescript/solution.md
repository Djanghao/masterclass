# TypeScript | Simple Sliding Window

**Author:** Matt_HackerMan
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/5399398/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/5399398/)

---

```typescript
function minSwaps(data: number[]): number {
    const winSize = data.reduce((c, x) => c += x, 0);
    let i = 0, cOnes = 0;
    for (; i < winSize; ++i) {
        cOnes += data[i];
    }
    
    let mOnes = cOnes;
    for (let j = 0; i < data.length; ++i, ++j) {
        if (data[j] === 1) --cOnes;
        if (data[i] === 1) ++cOnes;
        mOnes = Math.max(mOnes, cOnes);
    }
    return winSize - mOnes;
};
```