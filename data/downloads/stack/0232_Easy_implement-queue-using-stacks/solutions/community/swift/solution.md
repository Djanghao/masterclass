# [Swift] Readable Solution

**Author:** Legonaftik
**Votes:** 7
**Link:** [https://leetcode.com/problems/implement-queue-using-stacks/solutions/988566/](https://leetcode.com/problems/implement-queue-using-stacks/solutions/988566/)

---

Push - O(1)
Pop - Amortized O(1) 

```
class MyQueue {

    private var firstStack: [Int]
    private var secondStack: [Int]
    private var front: Int!

    /** Initialize your data structure here. */
    init() {
        self.firstStack = []
        self.secondStack = []
    }

    /** Push element x to the back of queue. */
    func push(_ x: Int) {
        if firstStack.isEmpty {
            front = x
        }
        firstStack.append(x)
    }

    /** Removes the element from in front of queue and returns that element. */
    func pop() -> Int {
        if secondStack.isEmpty {
            while !firstStack.isEmpty {
                let num = firstStack.removeLast()
                secondStack.append(num)
            }   
        }
        return secondStack.removeLast()
    }

    /** Get the front element. */
    func peek() -> Int {
        if secondStack.isEmpty {
            return front
        } else {
            return secondStack.last!
        }
    }

    /** Returns whether the queue is empty. */
    func empty() -> Bool {
        return firstStack.isEmpty && secondStack.isEmpty
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * let obj = MyQueue()
 * obj.push(x)
 * let ret_2: Int = obj.pop()
 * let ret_3: Int = obj.peek()
 * let ret_4: Bool = obj.empty()
 */
 ```