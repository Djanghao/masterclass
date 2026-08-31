# Easy TypeScript O(logN)

**Author:** NKeil
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4344921/](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4344921/)

---

```
function minimumOneBitOperations(n: number): number {
    let total = 0;
    let adding = true;
    while (n > 0) {
        const highestBit = 2 ** Math.floor(Math.log2(n));
        if (adding) total += highestBit * 2 - 1;
        else total -= highestBit * 2 - 1;
        n -= highestBit;
        adding = !adding;
    }
    return total;
};
```