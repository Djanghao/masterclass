# JavaScript Simple Solution

**Author:** shengdade
**Votes:** 9
**Link:** [https://leetcode.com/problems/distance-between-bus-stops/solutions/520609/](https://leetcode.com/problems/distance-between-bus-stops/solutions/520609/)

---

```javascript
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  if (start > destination) [start, destination] = [destination, start];
  const total = distance.reduce((acc, cur) => acc + cur);
  const route = distance.slice(start, destination).reduce((acc, cur) => acc + cur);
  return Math.min(route, total - route);
};
```

* 37/37 cases passed (48 ms)
* Your runtime beats 96 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (33.7 MB)