# javascript solution beats 100% submission

**Author:** marsprince
**Votes:** 133
**Link:** [https://leetcode.com/problems/min-stack/solutions/288686/](https://leetcode.com/problems/min-stack/solutions/288686/)

---

```
var MinStack = function() {
  this.elements = [];
};

/**

 @param {number} x
 @return {void}
 */
MinStack.prototype.push = function(x) {
  this.elements.push({
    value: x,
    min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
  });
};
/**

 @return {void}
 */
MinStack.prototype.pop = function() {
  this.elements.pop();
};
/**

 @return {number}
 */
MinStack.prototype.top = function() {
  return this.elements[this.elements.length - 1].value;
};
/**

 @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.elements[this.elements.length - 1].min;
};
```