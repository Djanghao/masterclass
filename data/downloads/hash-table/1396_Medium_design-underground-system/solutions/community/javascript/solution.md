# JavaScript, O(1) for all methods

**Author:** hon9g
**Votes:** 10
**Link:** [https://leetcode.com/problems/design-underground-system/solutions/554957/](https://leetcode.com/problems/design-underground-system/solutions/554957/)

---

- Time Complexity: O(1)
- Space Complexity: O(N + M) `size of this.avg and this.train`
```JavaScript
var UndergroundSystem = function() {
    this.avg = new Map();
    this.train = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, start, t) {
    this.train.set(id, [start, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, end, t) {
    const [start, s] = this.train.get(id);
    const key = [start, end].join();
    if (this.avg.has(key)) {
        let [avg, cnt] = this.avg.get(key);
        this.avg.set(key, [avg * (cnt/++cnt) + ((t - s)/cnt), cnt]);
    } else {
        this.avg.set(key, [(t - s), 1]);
    }
    this.train.delete(id);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(start, end) {
    return this.avg.get([start, end].join())[0];
};
```