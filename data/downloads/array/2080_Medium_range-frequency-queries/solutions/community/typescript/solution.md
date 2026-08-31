# TypeScript Binary Search

**Author:** MenheraCapoo
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-frequency-queries/solutions/1589564/](https://leetcode.com/problems/range-frequency-queries/solutions/1589564/)

---

TC: O(qlog(n)) // q is query count, n is arr.length
SC: O(max(value))
```ts
class RangeFreqQuery {
  map: any = {};
  constructor(arr: number[]) {
    arr.forEach((item, index) => {
      if (!this.map[item]) {
        this.map[item] = [];
      }
      this.map[item].push(index);
    });
  }

  query(left: number, right: number, value: number): number {
    if (!this.map[value]) {
      return 0;
    }
    
    const l = this.lowerBound(value, left);
    const r = this.upperBound(value, right, l);
    return r - l;
  }

  lowerBound(value: number, index: number): number {
    const freq = this.map[value];
    let l = 0, r = freq.length;
    while (l < r) {
      const m = (l + r) >> 1;
      if (index <= freq[m]) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    
    return l;
  }

  upperBound(value: number, index: number, left: number): number {
    const freq = this.map[value];
    let l = left, r = freq.length;
    while (l < r) {
      const m = (l + r) >> 1;
      if (index < freq[m]) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    
    return l;
  }
}
```