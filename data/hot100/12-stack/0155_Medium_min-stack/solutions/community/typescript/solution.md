# Typescript stack {val, min} solution

**Author:** alexgavrilov
**Votes:** 10
**Link:** [https://leetcode.com/problems/min-stack/solutions/3385582/](https://leetcode.com/problems/min-stack/solutions/3385582/)

---

# Code
```
class MinStack {
    private stack;
    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        this.stack.push({
            val,
            min: this.stack.length == 0 ? val: Math.min(val, this.getMin())
        });
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1].val;
    }

    getMin(): number {
        return this.stack.length == 0 ? 0: this.stack[this.stack.length - 1].min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```