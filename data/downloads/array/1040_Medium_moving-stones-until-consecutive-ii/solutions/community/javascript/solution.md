# Easy to understand JavaScript solution

**Author:** tzuyi0817
**Votes:** 1
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive-ii/solutions/3200293/](https://leetcode.com/problems/moving-stones-until-consecutive-ii/solutions/3200293/)

---

```
var numMovesStonesII = function(stones) {
    stones.sort((a, b) => a - b);
    const { length: size } = stones;
    const max = Math.max(stones[size - 1] - stones[1] - size + 2, stones[size - 2] - stones[0] - size + 2);
    let start = 0;
    let min = size;

    for (let end = 1; end < size; end++) {
        while (stones[end] - stones[start] + 1 > size) start += 1;
        const already = end - start + 1;

        if (already === size - 1 && stones[end] - stones[start] + 1 === size - 1) {
            min = Math.min(min, 2);
        } else {
            min = Math.min(min, size - already);
        }
    }
    return [min, max];
};
```