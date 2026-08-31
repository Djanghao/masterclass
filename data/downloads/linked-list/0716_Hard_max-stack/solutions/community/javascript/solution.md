# JavaScript Using 2 Stacks

**Author:** control_the_narrative
**Votes:** 9
**Link:** [https://leetcode.com/problems/max-stack/solutions/1098445/](https://leetcode.com/problems/max-stack/solutions/1098445/)

---

Every operaction takes `O(1)` time except for `popMax()` which takes `O(N)` time
```javascript
class MaxStack {
    
    constructor() {
        this.stack = []
        this.maxStack = []
    }
    
    push(x) {
        this.stack.push(x)
        if(!this.maxStack.length) this.maxStack.push(x);
        else this.maxStack.push(Math.max(x, this.peekMax()))
    }
    
    pop() {
        this.maxStack.pop()
        return this.stack.pop()
    }
    
    top() {
        return this.stack[this.stack.length-1]
    }
    
    peekMax() {
        return this.maxStack[this.maxStack.length-1]
    }
    
    popMax() {
        const buffer = []
        const max = this.peekMax()
        
        while(this.top() !== max) buffer.push(this.pop())
        this.pop();
        while(buffer.length) this.push(buffer.pop());
        
        return max;
    }
}
```