# Javascript map

**Author:** acassara
**Votes:** 15
**Link:** [https://leetcode.com/problems/time-based-key-value-store/solutions/425691/](https://leetcode.com/problems/time-based-key-value-store/solutions/425691/)

---

```javascript
var TimeMap = function() {
    this.map = new Map();
};

TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.has(key)) this.map.set(key, []);
    this.map.get(key)[timestamp] = value;
};

TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map.has(key)) return '';
    const item = this.map.get(key);
    if (item[timestamp]) return item[timestamp];
    while (timestamp-- > -1) {
        if (item[timestamp]) return item[timestamp];
    }
    return '';
};
```