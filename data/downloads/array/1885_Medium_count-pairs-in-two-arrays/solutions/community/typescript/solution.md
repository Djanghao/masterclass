# TypeScript | Map-Sort-Reduce Structure

**Author:** Matt_HackerMan
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5064343/](https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5064343/)

---

Map-Sort-Reduce is a very powerful code structure that is used to process data at large scale. We can use this structure to calculate the differences in the array, sort the differences ascendingly, and then sum across the array the number of pairs of indices according to the question, utilising Binary Search:
```typescript
const countPairs = (n1: number[], n2: number[]): number => {
    const n = n1.length;
    return n1
        .map((x, i) => x - n2[i])
        .sort((a, b) => a - b)
        .reduce((acc, x, i, d): number => {
            if (x > 0) acc += n - i - 1;
            else {
                let l = i + 1;
                let r = n - 1;
                while (l <= r) {
                    let m = Math.floor(l + (r - l) / 2);
                    if (d[i] + d[m] > 0) {
                        r = m - 1;
                    }
                    else {
                        l = m + 1;
                    }
                }
                acc += n - l;
            }
            return acc;
        }, 0);
};
```