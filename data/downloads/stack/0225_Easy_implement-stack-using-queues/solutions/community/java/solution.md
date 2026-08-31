# Concise 1 Queue - Java, C++, Python

**Author:** StefanPochmann
**Votes:** 316
**Link:** [https://leetcode.com/problems/implement-stack-using-queues/solutions/62516/](https://leetcode.com/problems/implement-stack-using-queues/solutions/62516/)

---

**Explanation:**

Just use a queue where you *"push to front"* by pushing to back and then rotating the queue until the new element is at the front (i.e., size-1 times move the front element to the back).

---

**C++:** 0 ms

    class Stack {
        queue<int> q;
    public:
        void push(int x) {
            q.push(x);
            for (int i=1; i<q.size(); i++) {
                q.push(q.front());
                q.pop();
            }
        }
    
        void pop() {
            q.pop();
        }
    
        int top() {
            return q.front();
        }
    
        bool empty() {
            return q.empty();
        }
    };

---

**Java:** 140 ms

    class MyStack {
    
        private Queue<Integer> queue = new LinkedList<>();
    
        public void push(int x) {
            queue.add(x);
            for (int i=1; i<queue.size(); i++)
                queue.add(queue.remove());
        }
    
        public void pop() {
            queue.remove();
        }
    
        public int top() {
            return queue.peek();
        }
    
        public boolean empty() {
            return queue.isEmpty();
        }
    }

---

**Python:** 36 ms

    class Stack:
    
        def __init__(self):
            self._queue = collections.deque()
    
        def push(self, x):
            q = self._queue
            q.append(x)
            for _ in range(len(q) - 1):
                q.append(q.popleft())
            
        def pop(self):
            return self._queue.popleft()
    
        def top(self):
            return self._queue[0]
        
        def empty(self):
            return not len(self._queue)