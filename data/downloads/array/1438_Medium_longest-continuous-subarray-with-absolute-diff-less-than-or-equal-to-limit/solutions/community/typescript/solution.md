# MinMaxQueue using two MinMaxStacks O(n) Time O(n) space

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/2885557/](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/2885557/)

---

# Intuition
Find a data structure that can tell you O(1) Max and Min while also pushing and shifting elements out of it. This can be achieved with a stack always knows it's min and max values. With two stacks we can make a queue. Note: O(1) is amortized here for push() and shift().

# Approach
Write a MinMaxQueue that has O(1) push, shift, getMax, getMin

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
/*
    Stack that always knows the min and max values inside it O(1)
*/
class MinMaxStack {
    s: any[]
    constructor() {this.s = []}
    push(v:number) {
        return this.s.push([
          v,
          this.size() === 0 ? v : Math.max(this.getMax(), v),
          this.size() === 0 ? v : Math.min(this.getMin(), v),
          ]
        )
    }
    pop() {return this.s.pop()}
    getLast() {return this.s[this.s.length - 1]}
    getMax() {return (this.getLast())[1]}
    getMin() {return (this.getLast())[2]}
    size() {return this.s.length}
}
/*
    Queue that is build with two MinMaxStacks
*/
class MinMaxQueue {
  in = new MinMaxStack()
  out = new MinMaxStack()

  size() {return this.in.size() + this.out.size()}
  shift() {
    if (this.size() === 0) return undefined
    if (this.out.size() === 0) {
      while (this.in.size()) this.out.push(this.in.pop()[0])
    }
    return this.out.pop()
  }
  push(v: number) {return this.in.push(v)}
  getMin() {
    return Math.min(
      this.in.size() ? this.in.getMin() : Infinity,
      this.out.size() ? this.out.getMin() : Infinity
  )}
  getMax() {
    return Math.max(
      this.in.size() ? this.in.getMax() : -Infinity,
      this.out.size() ? this.out.getMax() : -Infinity
  )}
}


function longestSubarray(nums: number[], limit: number): number {
    let q = new MinMaxQueue(), len = 0
    for (const num of nums) {
      q.push(num)
      while (q.size() && Math.abs(q.getMax() - q.getMin()) > limit) q.shift()
      if (q.size() > len) len = q.size()
    }
    return len
};
```