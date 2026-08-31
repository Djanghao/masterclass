# Simple JS Solution

**Author:** _Manav123
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/4914194/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/4914194/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function (value, k) {
    this.stream = [];
    this.matchingValue = value;
    this.size = k;
};

/** 
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function (num) {
    if (num !== this.matchingValue) {
        this.stream = [];
        return false;
    } else {
        this.stream.push(num);
        if (this.stream.length < this.size) {
            return false;
        }
        return true;
    }
};

/** 
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
```