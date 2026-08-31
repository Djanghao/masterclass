# TypeScript solution using circular array

**Author:** exuanbo
**Votes:** 2
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/1561796/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/1561796/)

---

```typescript
class MovingAverage {
  private items: number[]
  private tailIndex: number
  private count: number
  private sum: number

  constructor(size: number) {
    this.items = new Array<number>(size)
    this.tailIndex = -1
    this.count = 0
    this.sum = 0
  }

  public next(val: number): number {
    this.tailIndex = (this.tailIndex + 1) % this.items.length
    if (this.count === this.items.length) {
      this.sum -= this.items[this.tailIndex]
    } else {
      this.count += 1
    }
    this.items[this.tailIndex] = val
    this.sum += val
    return this.sum / this.count
  }
}
```