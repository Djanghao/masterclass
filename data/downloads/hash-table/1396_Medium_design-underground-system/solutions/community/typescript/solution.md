# Clear solution with all operation in O(1) - JavaScript / TypeScript

**Author:** adriansky
**Votes:** 9
**Link:** [https://leetcode.com/problems/design-underground-system/solutions/793768/](https://leetcode.com/problems/design-underground-system/solutions/793768/)

---

Here's a solution with two Maps. One for keeping track of customers id and other for averages by start/end station.

In JavaScript:

```js
class UndergroundSystem {
  customer = new Map();
  avg = new Map();
  
  checkIn(id, stationName, t) {
    this.customer.set(id, { stationName, t });
  }
  checkOut(id, stationName, t) {
    const checkIn = this.customer.get(id);
    if (!checkIn) throw new Error(`Customer ${id} didn't checked in`);
    const key = `${checkIn.stationName}-${stationName}`;
    const { sum, count } = this.avg.get(key) ?? { sum: 0, count: 0 };
    this.avg.set(key, { sum: sum + (t - checkIn.t), count: count + 1 });
  }
  getAverageTime(startStation, endStation) {
    const { sum, count } = this.avg.get(`${startStation}-${endStation}`) ?? { sum: 0, count: 0 };
    return sum / count;
  }
}

```

If you prefer types:

```ts
interface Trip {
  stationName: string;
  t: number;
}

interface AvgData {
  sum: number;
  count: number;
}

class UndergroundSystem {
  customer = new Map<number, Trip>();
  avg = new Map<string, AvgData>();

  checkIn(id: number, stationName: string, t: number): void { // O(1)
    this.customer.set(id, {stationName, t});
  }

  checkOut(id: number, stationName: string, t: number): void { // O(1)
    const checkIn = this.customer.get(id);
    if (!checkIn) throw new Error(`Customer ${id} didn't checked in`);
    const key = `${checkIn.stationName}-${stationName}`;
    const {sum, count} = this.avg.get(key) ?? {sum: 0, count: 0};
    this.avg.set(key, {sum: sum + (t - checkIn.t), count: count + 1});
  }

  getAverageTime(startStation: string, endStation: string): number { // O(1)
    const { sum, count } = this.avg.get(`${startStation}-${endStation}`) ?? {sum: 0, count: 0};
    return sum / count;
  }
}
```