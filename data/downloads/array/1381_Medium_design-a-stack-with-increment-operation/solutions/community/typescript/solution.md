# Beats 98% - Don't overthink.

**Author:** jkoudys
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/5850000/](https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/5850000/)

---

# Intuition
You store the max length. Then it's just an array.

# Approach
Pass through methods to the array inside. Increment the range when it tells you to.

There's an O(1) way to increment, where you store increments and only apply them once you .pop(). The performance boost from that is minor to often negative, so I didn't bother.

# Complexity
- Time complexity:
$$O(1)$$ $$O(k)$$

# Code
```typescript []
class CustomStack {
    maxSize: number;
    stack: number[];
    constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.stack = [];
    }

    push(x: number): void {
        if (this.stack.length < this.maxSize) {
            this.stack.push(x);
        }
    }

    pop(): number {
        return this.stack.pop() ?? -1;
    }

    increment(k: number, val: number): void {
        for (let i = 0; i < Math.min(this.stack.length, k); i++) {
            this.stack[i] += val;
        }
    }
}
```