# [Typescript] O(N) two pass + map clean code

**Author:** kirsar
**Votes:** 1
**Link:** [https://leetcode.com/problems/intervals-between-identical-elements/solutions/1826420/](https://leetcode.com/problems/intervals-between-identical-elements/solutions/1826420/)

---

```
function getDistances(arr: number[]): number[] {
  const n = arr.length;
  const res = Array(n).fill(0);
  const map = new Map<number, number[]>();
  
  const processItem = (i: number): void => {
    const curr = arr[i]; 
    if (map.has(curr)) {
      const [acc, prev, count] = map.get(curr);
      const nextAcc = Math.abs(i - prev) * count + acc;
      res[i] += nextAcc;
      map.set(curr, [nextAcc, i, count + 1]);
    } else {
      map.set(curr, [0, i, 1]);
    }
  }
  
  for(let i=0; i<n; i++) processItem(i);
  map.clear();
  for(let i=n-1; i>=0; i--) processItem(i)
  
  return res;
};
```