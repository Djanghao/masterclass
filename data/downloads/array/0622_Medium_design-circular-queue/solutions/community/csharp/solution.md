# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 5
**Link:** [https://leetcode.com/problems/design-circular-queue/solutions/5811987/](https://leetcode.com/problems/design-circular-queue/solutions/5811987/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
<!-- Describe your first thoughts on how to solve this problem. -->
- ***JavaScript Code -->*** https://leetcode.com/problems/design-circular-queue/submissions/1396397844
- ***C++ Code -->*** https://leetcode.com/problems/design-circular-queue/submissions/1396321425
- ***Python3 Code -->*** https://leetcode.com/problems/design-circular-queue/submissions/1396340978
- ***Java Code -->*** https://leetcode.com/problems/design-circular-queue/submissions/1396331332
- ***C Code -->*** https://leetcode.com/problems/design-circular-queue/submissions/1396381457
- ***Python Code -->*** https://leetcode.com/problems/design-circular-queue/submissions/1396337106
- ***C# Code -->*** https://leetcode.com/problems/design-circular-queue/submissions/1396382691
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(1)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(N)
# Code
```javascript []
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.arr = []
    this.size = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.size === this.arr.length)
        return false
    this.arr.push(value)
    return true

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.arr.length === 0)
        return false
    this.arr.shift()
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.arr.length === 0)
        return -1
    return this.arr[0]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.arr.length === 0)
        return -1
    return this.arr[this.arr.length - 1]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.arr.length === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.arr.length === this.size
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
```
![th.jpeg](./images/1.jpeg)
