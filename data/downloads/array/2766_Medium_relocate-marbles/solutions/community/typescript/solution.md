# JS array to set to array

**Author:** tommyttf
**Votes:** 0
**Link:** [https://leetcode.com/problems/relocate-marbles/solutions/4531489/](https://leetcode.com/problems/relocate-marbles/solutions/4531489/)

---

```
function relocateMarbles(nums: number[], moveFrom: number[], moveTo: number[]): number[] {
  const set = new Set<number>(nums);
  const n = moveFrom.length;

  for (let i = 0; i < n; i++) {
    set.delete(moveFrom[i]);
    set.add(moveTo[i]);
  }

  return [...set].sort((a, b) => a - b)
}
```