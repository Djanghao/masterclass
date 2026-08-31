# [TypeScript, JavaScript] 100% fastest TypeScript solution

**Author:** denshell
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/2394813/](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/2394813/)

---

The task can be treated as summing up the products of amounts of devices in non-empty rows.
For the given example `["011001","000000","010100","001000"]` we have 3 devices in the first row, skip second one as it's empty, 2 in the third and 1 in the fourth row: `[3, 2, 1]` which is `3 * 2 + 2 * 1 = 8`.
This statement counts 1s in each row, then skips zeroes.
```
bank.map(e => (e.match(/1/g) || []).length).filter(a => a !== 0);
```
So we have
```
function numberOfBeams(bank: string[]): number {
  const devices: number[] = bank.map(e => (e.match(/1/g) || []).length).filter(a => a !== 0);
  
  if (!devices.length || devices.length === 1) {
    return 0;
  }

  let sum = 0;

  for (let i = 1; i < devices.length; i++) {
    sum += devices[i] * devices[i - 1];
  }
  
  return sum;
}
```
Let me know if you have any questions. Please hit upvote if you find it useful.