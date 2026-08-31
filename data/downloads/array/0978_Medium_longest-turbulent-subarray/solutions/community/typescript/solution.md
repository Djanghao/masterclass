# JavaScript / TypeScript Easy to Understand O(n) time

**Author:** el_rookie
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-turbulent-subarray/solutions/4577615/](https://leetcode.com/problems/longest-turbulent-subarray/solutions/4577615/)

---

# Code
```
function maxTurbulenceSize(arr: number[]): number {
  let maxSize = 1;
  let size = 0;
  let sign = '';
  for (let i = 0; i < arr.length; i++) {
    let r = i + 1;
    size++;
    maxSize = Math.max(maxSize, size);
    if (arr[i] > arr[r]) {
      if (sign === 'less') size = 1;
      sign = 'less';
    } else if (arr[i] < arr[r]) {
      if (sign === 'greater') size = 1;
      sign = 'greater';
    } else {
      size = 0;
      sign = '';
    }
  }
  return maxSize;
};
```