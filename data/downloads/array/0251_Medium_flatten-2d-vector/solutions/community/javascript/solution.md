# JavaScript Two Pointer Solution w/ inline-code comments

**Author:** sad-squid
**Votes:** 4
**Link:** [https://leetcode.com/problems/flatten-2d-vector/solutions/1037880/](https://leetcode.com/problems/flatten-2d-vector/solutions/1037880/)

---

I didn't see any decent JavaScript posts that actually followed the second solution covered in the problem. 
Here is how we would solve the problem with constant space, using two pointers.

```
/**
 * @param {number[][]} v
 */
var Vector2D = function(v) {
  // create reference to 2d vector arg
  this.nums = v
  this.outer = 0;
  this.inner = 0;  
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
    // throw our error if we are unable to find a next valid number
    if (!this.hasNext()) throw new Error('No such element')
  
    // return the next number, then increment inner pointer
    return this.nums[this.outer][this.inner++]
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
  // This loop advances our pointers to the next valid integer
  // the first condition ensures we only loop within the outer bounds
  // the second condition skips past empty inner arrays
  while (this.outer < this.nums.length 
      && this.inner === this.nums[this.outer].length) {
    this.inner = 0;
    this.outer++
  }
  
  // still in bounds check
  return this.outer < this.nums.length
};

/** 
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(v)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
```