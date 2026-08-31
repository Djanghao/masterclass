# O(1) solution using only standard containers

**Author:** henrydukart
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-front-middle-back-queue/solutions/5801765/](https://leetcode.com/problems/design-front-middle-back-queue/solutions/5801765/)

---

# Approach
We use two `Deque` for storing two halfs of the sequence. During push and pop operations we ensure invariant `leftDeque.count == rightHalf.Deque || leftDeque.count == rightHalf.Deque + 1`. 

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(n)$$

# Code
```swift []
import DequeModule

class FrontMiddleBackQueue {
    var leftDeque = Deque<Int>()
    var rightDeque = Deque<Int>()

    func moveLeftToRight() {
        rightDeque.prepend(leftDeque.popLast()!)
    }

    func moveRightToLeft() {
        leftDeque.append(rightDeque.popFirst()!)
    }

    func ensureInvariant() {
        if leftDeque.count - rightDeque.count > 1 {
            moveLeftToRight()
            return
        }

        if leftDeque.count < rightDeque.count {
            moveRightToLeft()
            return
        }
    }

    func pushFront(_ val: Int) {
        leftDeque.prepend(val)
        ensureInvariant()
    }
    
    func pushMiddle(_ val: Int) {
        if leftDeque.count > rightDeque.count {
            moveLeftToRight()
        }
        leftDeque.append(val)
    }
    
    func pushBack(_ val: Int) {
        rightDeque.append(val)
        ensureInvariant()
    }
    
    func popFront() -> Int {
        guard !leftDeque.isEmpty else { return -1 }
        let val = leftDeque.popFirst()!
        ensureInvariant()
        return val
    }
    
    func popMiddle() -> Int {
        guard !leftDeque.isEmpty else { return -1 }
        let val = leftDeque.popLast()!
        ensureInvariant()
        return val
    }
    
    func popBack() -> Int {
        guard !leftDeque.isEmpty else { return -1 }
        let val = (rightDeque.popLast() ?? leftDeque.popLast())!
        ensureInvariant()
        return val
    }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * let obj = FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * let ret_4: Int = obj.popFront()
 * let ret_5: Int = obj.popMiddle()
 * let ret_6: Int = obj.popBack()
 */
```