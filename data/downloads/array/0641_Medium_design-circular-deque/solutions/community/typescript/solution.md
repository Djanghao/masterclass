# 🚀🔥 Very easy Soln using List methods push() , pop() , shift() , unshift() 🚀🔥

**Author:** gouravojha4321
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-circular-deque/solutions/3984561/](https://leetcode.com/problems/design-circular-deque/solutions/3984561/)

---

# Complexity
- Time complexity: O(1)

- Space complexity: O(n)

# Code
```
class MyCircularDeque {
    private queue:number[]
    private size:number
    constructor(k: number) {
        this.queue = []
        this.size = k
    }

    insertFront(value: number): boolean {
        if(this.isFull()){
            return false
        }
        this.queue.unshift(value)
        return true
    }

    insertLast(value: number): boolean {
        if(this.isFull()){
            return false
        }
        this.queue.push(value)
        return true
    }

    deleteFront(): boolean {
        if(this.isEmpty()){
            return false
        }
        this.queue.shift()
        return true
    }

    deleteLast(): boolean {
        if(this.isEmpty()){
            return false
        }
        this.queue.pop()
        return true
    }

    getFront(): number {
        if(this.isEmpty()){
            return -1
        }
        return this.queue[0]
    }

    getRear(): number {
        if(this.isEmpty()){
            return -1
        }
        return this.queue[this.queue.length-1]
    }

    isEmpty(): boolean {
        if(this.queue.length == 0){
            return true
        }
        return false
    }

    isFull(): boolean {
        if(this.queue.length == this.size){
            return true
        }
        return false
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
```