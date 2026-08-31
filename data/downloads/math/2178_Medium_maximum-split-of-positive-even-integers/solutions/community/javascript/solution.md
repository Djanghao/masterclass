# [Javascript] Greedy with set

**Author:** _savely
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/1784208/](https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/1784208/)

---

```
 var maximumEvenSplit = function(finalSum) {

    if(finalSum % 2) return [];

    const set = new Set();

    let n = 2, sum = 0;

    while(sum < finalSum) {
        sum += n;
        set.add(n);
        n += 2;
    }

    set.delete(sum - finalSum);

    return [...set];
};
```