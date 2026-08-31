# Javascript feels like cheating here (96% better time 100% better space)

**Author:** librun
**Votes:** 4
**Link:** [https://leetcode.com/problems/map-sum-pairs/solutions/432439/](https://leetcode.com/problems/map-sum-pairs/solutions/432439/)

---

```
var MapSum = function() {
    this.map = {};
};

MapSum.prototype.insert = function(key, val) {
    this.map[key] = val;
};

MapSum.prototype.sum = function(prefix) {
    return Object.keys(this.map)
        .filter(key=>key.startsWith(prefix))
        .map(key=>this.map[key])
        .reduce((total, curr)=>total+curr, 0);
};
```