# Typescript Simple Easy to understand

**Author:** Sameer177
**Votes:** 5
**Link:** [https://leetcode.com/problems/implement-stack-using-queues/solutions/1839709/](https://leetcode.com/problems/implement-stack-using-queues/solutions/1839709/)

---

```
class MyQueue {
    queue;
    constructor() {
        this.queue = []
    }
    push(n: number) {
        this.queue.push(n)
    }
    peek(): (number | null) {
        return this.queue[0]
    }
    pop() {
        let r = this.peek();
        this.queue.shift()
        return r;
    }
    size() {
        return this.queue.length
    }
    isEmpth() {
        return this.queue.length == 0
    }
}


class MyStack {
    public Q;
    constructor() {
        this.Q = new MyQueue()
    }

    push(x: number): void {
        let l = this.Q.queue.length;
        this.Q.push(x)
        for(let i = 1; i <= l; i++) {
            let r = this.Q.pop();
            this.Q.push(r)
        }
    }

    pop(): number {
        return this.Q.pop()
    }

    top(): number {
        return this.Q.peek()
    }

    empty(): boolean {
        return this.Q.queue.length == 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */