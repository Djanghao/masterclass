# Queue Implemented with a Linked List for Constant-Time Insertion

**Author:** kkp123
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-recent-calls/solutions/4070043/](https://leetcode.com/problems/number-of-recent-calls/solutions/4070043/)

---

# Intuition
The same intuition is used here as in other queue solutions, the difference being a desire for constant time insertion at the beginning of the list. Using a linked list over an array grants us this constant-time insertion without the need for shifting and resizing the list. Array-based queue implementations have a worst-case time complexity of O(n^2), as each element of the array of size `n` will need to be shifted `n` times. In other words, the time complexity of JavaScript's `shift` function is O(n), and it is performed `n` times. 
# Approach
Create a node class and a linked list class and add methods for queueing and dequeueing nodes instead of an array implementation using `push()` and `shift()`, respectively. The size of the list will be stored in the `LinkedList` object and used as the return value from the `ping` function.

# Complexity
- Time complexity: O(n)
The time complexity is bound by the problem constraints that `n <= 3000` where `n` is the number of requests in the queue at one time (the size of the linked list). Ignoring the constraints defined in the problem statement, the time complexity is O(n). In the worst case, every previous call will need to be dequeued, resulting in n iterations. That is to say, the worst case runtime grows linearly with the size of the queue. 

- Space complexity: O(n)
The size of the linked list is bound by the maximum number of requests it can hold at one time, which is 3000. This is due to the problem statement description that each subsequent call to ping has a strictly larger value of `t` than previous calls. Again, outside of the constraints of this problem, the space complexity becomes O(n).
# Code
```
class Node {
    data: number;
    next: Node | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head: Node | null;
    tail: Node | null;
    size: number;
    constructor(node: Node | null) {
        this.head = node;
        this.tail = node;
        if (node) {
            this.size = 1;
        } else {
            this.size = 0;
        }
    }

    dequeue() {
        this.head = this.head.next;
        this.size--;
    }

    enqueue(node: Node) {
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
}

class RecentCounter {
    linkedList;
    constructor() {
        this.linkedList = new LinkedList(null);
    }

    ping(t: number): number {  
        let node = new Node(t);
        this.linkedList.enqueue(node);
        
        while (this.linkedList.head !== null && t - this.linkedList.head.data > 3000) {
            this.linkedList.dequeue(); // Remove requests outside the time frame.
        }

        return this.linkedList.size;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```