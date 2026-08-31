# Simple Typescript/Javascript Solution with Binary Search O(log(n))

**Author:** wentland
**Votes:** 1
**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3111832/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3111832/)

---

# Code
```typescript
class SummaryRanges {
  private intervals: number[][] = [];

  // O(log(n))
  public addNum(num: number, start = 0, end = this.intervals.length): void {
    const { intervals } = this;
    if (start === end) {
      intervals.splice(start, 0, [num, num]);
      return;
    }
    const middleIndex = start + Math.floor((end - start) / 2);
    const [min, max] = intervals[middleIndex];
    if (num < min - 1) this.addNum(num, start, middleIndex);
    if (num > max + 1) this.addNum(num, middleIndex + 1, end);
    const middleInterval = intervals[middleIndex];
    if (num === max + 1) {
      middleInterval[1] =
        intervals[middleIndex + 1]?.[0] === num + 1
          ? intervals.splice(middleIndex + 1, 1)[0][1]
          : num;
    }
    if (num === min - 1) {
      middleInterval[0] =
        intervals[middleIndex - 1]?.[1] === num - 1
          ? intervals.splice(middleIndex - 1, 1)[0][0]
          : num;
    }
  }

  // O(1)
  public getIntervals(): number[][] {
    return this.intervals;
  }
}
```