# JavaScript Solution | faster than 95.12%

**Author:** asadullakkh
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-front-middle-back-queue/solutions/2735463/](https://leetcode.com/problems/design-front-middle-back-queue/solutions/2735463/)

---

```
var FrontMiddleBackQueue = function() {
    this.queue = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.queue.unshift(val);
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    let middle = Math.floor(this.queue.length / 2);
    this.queue.splice(middle, 0, val)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.queue.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    if(!this.queue.length) return -1;
    return this.queue.shift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    if(!this.queue.length) return -1;
    let middle = Math.floor(this.queue.length / 2);
    if(this.queue.length % 2 == 0) middle--;
    return this.queue.splice(middle, 1);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    if(!this.queue.length) return -1;
    return this.queue.pop();
};

/** 
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */ 
 ```