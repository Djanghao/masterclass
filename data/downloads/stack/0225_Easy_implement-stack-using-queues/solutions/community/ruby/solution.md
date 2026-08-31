# 🟢 Implementing a Stack Using a Single Queue || Full Explanation || Mr. Robot

**Author:** LakshayBrejwal_1_0
**Votes:** 3
**Link:** [https://leetcode.com/problems/implement-stack-using-queues/solutions/3970409/](https://leetcode.com/problems/implement-stack-using-queues/solutions/3970409/)

---

---

## Implementing a Stack Using a Single Queue in C++

**Introduction:**
Stacks are fundamental data structures used in programming for managing data in a last-in, first-out (LIFO) manner. In this blog post, we'll delve into an interesting challenge: implementing a stack using just a single queue. We'll explore an ingenious approach that leverages the power of rotations to achieve this feat.

**Problem Statement:**
The challenge is to create a stack data structure that supports the basic stack operations (`push`, `pop`, `top`, and `empty`) using only a single queue. This might sound counterintuitive, but with the right strategy, it's definitely possible.

**Approach Overview:**
Our approach involves simulating the stack behavior by manipulating the queue through rotations. We'll maintain the top element of the stack in a separate variable and use rotations to ensure that the top element is always at the front of the queue.

**Implementation Walkthrough:**
Let's dive into the implementation details of each method in the `MyStack` class:

1. **Constructor (`MyStack() {}`):**
   - Initialize an empty queue (`q`) to store the stack elements.

2. **`push(int x)`:**
   - Enqueue element `x` into the queue.
   - Update the `topp` variable to hold the value of the newly pushed element.
   - Perform a rotation of the queue by dequeuing elements from the front and enqueuing them back. This ensures that the newly pushed element becomes the front element.

3. **`pop()`:**
   - Dequeue the front element of the queue and store it in the `remo` variable.
   - If the queue is not empty, update the `topp` variable with the new front element.
   - Return the removed element.

4. **`top()`:**
   - Return the value of the `topp` variable, which holds the top element of the stack.

5. **`empty()`:**
   - Check if the queue is empty using the `empty()` method of the queue.

**Algorithm Analysis:**
The time complexity of the `push`, `pop`, `top`, and `empty` operations is O(n) in the worst case, where n is the number of elements in the queue. This approach is slightly less efficient than traditional stack implementations but offers a unique perspective on data manipulation.

**Advantages and Limitations:**
- Advantages: This approach utilizes a single queue and is simple to understand and implement.
- Limitations: It might not be the most efficient solution for large queues due to the rotation process, which takes linear time.

**Comparisons with Other Approaches:**
Comparing this approach with the standard stack and two-queue approaches, our implementation sacrifices some efficiency for simplicity and an interesting use of rotations.

**Use Cases and Examples:**
This implementation can be useful in scenarios where you want to explore unique stack implementations. Let's look at some examples:

```cpp
MyStack stack;
stack.push(5);
stack.push(10);
cout << stack.top() << endl; // Output: 10
stack.pop();
cout << stack.top() << endl; // Output: 5
cout << stack.empty() << endl; // Output: 0 (false)
```

**Conclusion:**
Implementing a stack using a single queue is a fascinating exercise that demonstrates the power of creative problem-solving. While this approach might not be the most efficient, it showcases how rotations can be used to achieve stack behavior using a unique twist on a classic data structure.

Experiment with the code, run your own test cases, and consider how this approach aligns with different programming challenges. This implementation serves as a valuable addition to your arsenal of programming techniques.

---

# Code 
```C++ []
#include <queue>

class MyStack {
public:
    queue<int> q;
    int topp = -1;

    MyStack() {}

    void push(int x) {
        q.push(x);
        topp = x;
        int size = q.size();
        while (size > 1) {
            int front = q.front();
            q.pop();
            q.push(front);
            size--;
        }
    }

    int pop() {
        int remo = q.front();
        q.pop();
        if (!q.empty()) {
            topp = q.front();
        }
        return remo;
    }

    int top() {
        return topp;
    }

    bool empty() {
        return q.empty();
    }
};
```
```python []
from queue import Queue

class MyStack:
    def __init__(self):
        self.q = Queue()
        self.topp = -1

    def push(self, x):
        self.q.put(x)
        self.topp = x
        size = self.q.qsize()
        while size > 1:
            front = self.q.get()
            self.q.put(front)
            size -= 1

    def pop(self):
        remo = self.q.get()
        if not self.q.empty():
            self.topp = self.q.queue[0]
        return remo

    def top(self):
        return self.topp

    def empty(self):
        return self.q.empty()

# Example usage
#stack = MyStack()
#stack.push(5)
#stack.push(10)
#print(stack.top())  # Output: 10
#stack.pop()
#print(stack.top())  # Output: 5
#print(stack.empty())  # Output: False

```
```java []
import java.util.LinkedList;
import java.util.Queue;

class MyStack {
    private Queue<Integer> q = new LinkedList<>();
    private int topp = -1;

    public void push(int x) {
        q.offer(x);
        topp = x;
        int size = q.size();
        while (size > 1) {
            int front = q.poll();
            q.offer(front);
            size--;
        }
    }

    public int pop() {
        int remo = q.poll();
        if (!q.isEmpty()) {
            topp = q.peek();
        }
        return remo;
    }

    public int top() {
        return topp;
    }

    public boolean empty() {
        return q.isEmpty();
    }
}

// Example usage
//MyStack stack = new MyStack();
//stack.push(5);
//stack.push(10);
//System.out.println(stack.top());  // Output: 10
//stack.pop();
//System.out.println(stack.top());  // Output: 5
//System.out.println(stack.empty());  // Output: false

```
``` ruby []
class MyStack
    def initialize
        @q = []
        @topp = -1
    end

    def push(x)
        @q.push(x)
        @topp = x
        (@q.length - 1).times { @q.push(@q.shift) }
    end

    def pop
        remo = @q.shift
        @topp = @q[0] || -1
        remo
    end

    def top
        @topp
    end

    def empty
        @q.empty?
    end
end

# Example usage
# stack = MyStack.new
# stack.push(5)
# stack.push(10)
# puts stack.top  # Output: 10
# stack.pop
# puts stack.top  # Output: 5
# puts stack.empty  # Output: false
```
``` Javascript []
class MyStack {
    constructor() {
        this.q = [];
        this.topp = -1;
    }

    push(x) {
        this.q.push(x);
        this.topp = x;
        for (let i = 0; i < this.q.length - 1; i++) {
            this.q.push(this.q.shift());
        }
    }

    pop() {
        const remo = this.q.shift();
        if (this.q.length > 0) {
            this.topp = this.q[0];
        }
        return remo;
    }

    top() {
        return this.topp;
    }

    empty() {
        return this.q.length === 0;
    }
}

// Example usage
// const stack = new MyStack();
// stack.push(5);
// stack.push(10);
// console.log(stack.top());  // Output: 10
// stack.pop();
// console.log(stack.top());  // Output: 5
// console.log(stack.empty());  // Output: false

```
```C# []
using System;
using System.Collections.Generic;

class MyStack
{
    private Queue<int> q = new Queue<int>();
    private int topp = -1;

    public void Push(int x)
    {
        q.Enqueue(x);
        topp = x;
        int size = q.Count;
        while (size > 1)
        {
            int front = q.Dequeue();
            q.Enqueue(front);
            size--;
        }
    }

    public int Pop()
    {
        int remo = q.Dequeue();
        if (q.Count > 0)
        {
            topp = q.Peek();
        }
        return remo;
    }

    public int Top()
    {
        return topp;
    }

    public bool Empty()
    {
        return q.Count == 0;
    }
}

// Example usage
// MyStack stack = new MyStack();
// stack.Push(5);
// stack.Push(10);
// Console.WriteLine(stack.Top());  // Output: 10
// stack.Pop();
// Console.WriteLine(stack.Top());  // Output: 5
// Console.WriteLine(stack.Empty());  // Output: False

```
# Consider UPVOTING\u2B06\uFE0F

![image.png](./images/0.png)


# DROP YOUR SUGGESTIONS IN THE COMMENT

## Keep Coding\uD83E\uDDD1\u200D\uD83D\uDCBB

 -- *MR.ROBOT SIGNING OFF*