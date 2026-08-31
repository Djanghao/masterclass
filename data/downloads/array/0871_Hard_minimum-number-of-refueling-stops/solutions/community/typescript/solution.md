# Typescript solution using heap (heap implemented as array)

**Author:** shivangmistry
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/6001218/](https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/6001218/)

---

# Complexity
- Time complexity: O(NlogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(NlogN)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
class Heap {
  size: number;
  isSorted: boolean;
  arr: number[];
  constructor () {
    this.size = 0;
    this.isSorted = false;
    this.arr = [];
  }

  insert(val: number): void {
    this.size += 1
    this.isSorted = false;
    this.arr.push(val)
  }

  top() {
    if (!this.isSorted) {
      this.isSorted = true;
      this.arr.sort((a, b) => b - a);
    }
    const [top, ...rest] = this.arr;
    this.arr = rest;
    this.size -= 1;
    return top;
  }
}

function minRefuelStops(target: number, startFuel: number, stations: number[][]): number {
  if (startFuel >= target) {
    return 0;
  }
  if (!stations.length) {
    return startFuel >= target ? 0 : -1;
  }
  stations.push([target, 0])
  let fuel = startFuel;
  let stops = 0;
  let i = 0;
  let prev = 0
  const heap = new Heap();
  while (i < stations.length) {
    const station = stations[i]
    fuel = fuel - (station[0] - prev);
    while (heap.size > 0 && fuel < 0) {
      fuel += heap.top();
      stops++;
    }
    if (fuel < 0) {
      return -1;
    }
    prev = station[0];
    heap.insert(station[1]);
    i++;
  }
  return stops;
};
```