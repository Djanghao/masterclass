# sort + for

**Author:** rooque
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/4151526/](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/4151526/)

---



# Code
```
function maxConsecutive(bottom: number, top: number, special: number[]): number {
  let max = 0;
  let tempBottom = bottom;
  const sorted = special.sort((a,b) => a - b);

  for(let s of sorted) {
      const range = s - tempBottom;
      if(range > max) max = range;
      tempBottom = s + 1;
  }

  const last = (top - tempBottom) + 1;
  if(last > max) max = last;

  return max;
};
```