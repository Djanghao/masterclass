# Very Easy || 100% || Fully Explained || Java, C++, Python, Python3

**Author:** PratikSen07
**Votes:** 221
**Link:** [https://leetcode.com/problems/implement-queue-using-stacks/solutions/2513639/](https://leetcode.com/problems/implement-queue-using-stacks/solutions/2513639/)

---

**Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).**

**Implement the MyQueue class:**

*  void push(int x) Pushes element x to the back of the queue.
*  int pop() Removes the element from the front of the queue and returns it.
*  int peek() Returns the element at the front of the queue.
*  boolean empty() Returns true if the queue is empty, false otherwise.


# **Java Solution:**
Runtime: 1 ms, faster than 92.42% of Java online submissions for Implement Queue using Stacks.
```
class MyQueue {
	 private Deque<Integer> in_stk = new ArrayDeque<>();
    private Deque<Integer> out_stk = new ArrayDeque<>();
    // Push element x to the back of queue...
    public void push(int x) {
        in_stk.push(x);
    }
    // Remove the element from the front of the queue and returns it...
    public int pop() {
        peek();
        return out_stk.pop();
    }
    // Get the front element...
    public int peek() {
        if (out_stk.isEmpty())
        while (!in_stk.isEmpty())
            out_stk.push(in_stk.pop());
        return out_stk.peek();
    }
    // Return whether the queue is empty.
    public boolean empty() {
        return in_stk.isEmpty() && out_stk.isEmpty();
    }

    private Deque<Integer> in_stk = new ArrayDeque<>();
    private Deque<Integer> out_stk = new ArrayDeque<>();
}
```

# **C++ Solution:**
```
class MyQueue {
public:
    // Push element x to the back of queue...
    void push(int x) {
        in_stk.push(x);
    }
	// Remove the element from the front of the queue and returns it...
    int pop() {
        peek();
        const int val = out_stk.top();
        out_stk.pop();
        return val;
    }
	// Get the front element...
    int peek() {
        if (out_stk.empty())
        while (!in_stk.empty())
            out_stk.push(in_stk.top()), in_stk.pop();
        return out_stk.top();
    }
	// Return whether the queue is empty...
    bool empty() {
        return in_stk.empty() && out_stk.empty();
    }
private:
    stack<int> in_stk;
    stack<int> out_stk;
};
```

# **Python/Python3 Solution:**
```
class MyQueue(object):
    def __init__(self):
        self.in_stk = []
        self.out_stk = []
	# Push element x to the back of queue...
    def push(self, x):
        self.in_stk.append(x)
	# Remove the element from the front of the queue and returns it...
    def pop(self):
        self.peek()
        return self.out_stk.pop()
	# Get the front element...
    def peek(self):
        if not self.out_stk:
            while self.in_stk:
                self.out_stk.append(self.in_stk.pop())
        return self.out_stk[-1]
	# Return whether the queue is empty...
    def empty(self):
        return not self.in_stk and not self.out_stk
```
**I am working hard for you guys...
Please upvote if you found any help with this code...**