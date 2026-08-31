# JavaScript Simple O(n) Solution

**Author:** atiq1589
**Votes:** 2
**Link:** [https://leetcode.com/problems/fancy-sequence/solutions/899269/](https://leetcode.com/problems/fancy-sequence/solutions/899269/)

---

##### Amortized Analysis
---
TIme Complexity: O(n)
Space Complexity: O(n)

[Where n is the number of operation]

---
##### Code
---
```

const MOD = 1e9 + 7;

var Fancy = function() {
  this.arr = [];
  this.operations = [];
  this.seq = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
Fancy.prototype.append = function(val) {
  this.arr.push({val: val % MOD, seq: this.seq});
  this.seq++;
};

/** 
 * @param {number} inc
 * @return {void}
 */
Fancy.prototype.addAll = function(inc) {
  this.operations.push({type:'add', val: inc % MOD, seq: this.seq});
  this.seq++;
};

/** 
 * @param {number} m
 * @return {void}
 */
Fancy.prototype.multAll = function(m) {
  this.operations.push({type:'mul', val: m % MOD, seq: this.seq});
  this.seq++;
};

/** 
 * @param {number} idx
 * @return {number}
 */
Fancy.prototype.getIndex = function(idx) {
  if(idx >= this.arr.length) {
    return -1;
  }
  let {val, seq} = this.arr[idx];
  for(let op of this.operations) {
    if(op.seq < seq) {
      continue;
    }
    if(op.type == 'add') {
      val  =  (val + op.val) % MOD;
    } else {
      val = (val * op.val) % MOD;
    }
  }
  this.arr[idx] = {val: val, seq: this.seq};
  this.seq++;
  return val;
};

/** 
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */ ```