# Javascript easy to understand OOP solution,

**Author:** AlloVince
**Votes:** 4
**Link:** [https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/323170/](https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/323170/)

---

```js
class Garden {
  constructor(n) {
    this.no = n;
    this.neighbors = [];
    this.flower = null;
  }
  
  connectTo(garden) {
    if (this.neighbors.includes[garden]) {
      return;
    }
    this.neighbors.push(garden);
  }
  
  canPlate(flower) {
    return this.flower === null && this.neighbors.every(n => n.flower !== flower);
  }
  
  hasFlower() {
    return this.flower !== null;
  }
  
  plate(flower) {
    this.flower = flower;
  }
}
/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
  const gardens = new Map();
  for (let i = 1; i <= N; i++) {
    gardens.set(i, new Garden(i));
  }
  for (const [g1, g2] of paths) {
    gardens.get(g1).connectTo(gardens.get(g2));
    gardens.get(g2).connectTo(gardens.get(g1));
  }
  const flowers = [];
  for (let [n, garden] of gardens) {
    let flower = 1;
    while (!garden.hasFlower()) {
      if (garden.canPlate(flower)) {
        garden.plate(flower);
        flowers.push(flower);
      } else {
        flower++;
      }
    }
  }
  return flowers;
};
```