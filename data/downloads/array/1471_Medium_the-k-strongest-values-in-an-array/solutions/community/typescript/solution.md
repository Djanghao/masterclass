# TS solution

**Author:** jnkbldgn
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/3152638/](https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/3152638/)

---

```
function getStrongest(arr: number[], k: number): number[] {
  if(arr.length === 1) {
    return arr;
  }

  arr.sort((a: number, b: number) => b - a);

  const median: number = arr[Math.round((arr.length - 1) / 2)];

  arr.sort((a: number,b: number) => {
    const valA = Math.abs(a - median);
    const valB = Math.abs(b - median);

    if(valA !== valB) {
      return valB - valA;
    }

    return b - a;
  });


  return arr.slice(0, k);
};
```