# javascript very shot approach

**Author:** charnavoki
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5159715/](https://leetcode.com/problems/maximum-points-inside-the-square/solutions/5159715/)

---


```
var maxPointsInsideSquare = function(points, s) {
    points = points.map(([x, y]) => Math.max(Math.abs(x), Math.abs(y)));
    const distances = {};
    [...s].forEach((char, i) => distances[char] ? distances[char].push(points[i]) : distances[char] = [points[i]]);
    const maxDistToDouble = Math.min(...Object.values(distances).filter(({length}) => length > 1).map(arr => arr.sort((x, y) => x - y)[1])) - 1;
    return points.filter(dist => dist <= maxDistToDouble).length;
};
```

### Plese, upvote. You motivate me to solve problems in original way