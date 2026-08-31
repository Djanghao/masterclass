# Simple JavaScript/TypeScript O(n) time & O(1) space with explanation

**Author:** mikezzb
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-hidden-sequences/solutions/4334732/](https://leetcode.com/problems/count-the-hidden-sequences/solutions/4334732/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function numberOfArrays(differences: number[], lower: number, upper: number): number {
    // use presum of differences to reconstruct val, find the MIN & MAX val
    const n = differences.length;
    let prediff = 0; // normalize the start as 0 to find min & max deviation from 0
    let minVal = 0, maxVal = 0;
    for (let i = 1; i < n + 1; i++) {
        prediff += differences[i - 1];
        minVal = Math.min(prediff, minVal);
        maxVal = Math.max(prediff, maxVal);
    }

    // determine number of valids based on min and max
    const validToSatMin = lower - minVal;
    const validToSatMax = upper - maxVal;

    // if the valid min is > max, then 0 pairs
    return Math.max(validToSatMax - validToSatMin + 1, 0);
};
```