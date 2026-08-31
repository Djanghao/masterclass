# Simple Solution using STL || C++ JAVA PYTHON JAVASCRIPT || beats 99%

**Author:** Garv_Virmani
**Votes:** 10
**Link:** [https://leetcode.com/problems/design-circular-deque/solutions/5842075/](https://leetcode.com/problems/design-circular-deque/solutions/5842075/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Do whatever they want
# Approach
<!-- Describe your approach to solving the problem. -->
Inbuilt DEQUE


# Code
```cpp []
class MyCircularDeque {
public:
    deque<int>dq;
    int n;
    MyCircularDeque(int k) {
        n=k;
    }
    
    bool insertFront(int value) {
        if(dq.size()<n){
            dq.push_front(value);
            return 1;
        }
        return 0;
    }
    
    bool insertLast(int value) {
        if(dq.size()<n){
            dq.push_back(value);
            return 1;
        }
        return 0;
    }
    
    bool deleteFront() {
        if(dq.size()>0){
            dq.pop_front();
            return 1;
        }
        return 0;
    }
    
    bool deleteLast() {
        if(dq.size()>0){
            dq.pop_back();
            return 1;
        }
        return 0;
    }
    
    int getFront() {
        if(dq.size()>0){
            return dq.front();
        }
        return -1;
    }
    
    int getRear() {
        if(dq.size()>0){
            return dq.back();
        }
        return -1;
    }
    
    bool isEmpty() {
        return dq.empty();
    }
    
    bool isFull() {
        return dq.size()==n;
    }
};
```

```javascript []
class MyCircularDeque {
    constructor(k) {
        this.dq = [];
        this.n = k;
    }

    insertFront(value) {
        if (this.dq.length < this.n) {
            this.dq.unshift(value);
            return true;
        }
        return false;
    }

    insertLast(value) {
        if (this.dq.length < this.n) {
            this.dq.push(value);
            return true;
        }
        return false;
    }

    deleteFront() {
        if (this.dq.length > 0) {
            this.dq.shift();
            return true;
        }
        return false;
    }

    deleteLast() {
        if (this.dq.length > 0) {
            this.dq.pop();
            return true;
        }
        return false;
    }

    getFront() {
        return this.dq.length > 0 ? this.dq[0] : -1;
    }

    getRear() {
        return this.dq.length > 0 ? this.dq[this.dq.length - 1] : -1;
    }

    isEmpty() {
        return this.dq.length === 0;
    }

    isFull() {
        return this.dq.length === this.n;
    }
}

```

```python []
from collections import deque

class MyCircularDeque(object):
    def __init__(self, k):
        self.dq = deque()
        self.n = k

    def insertFront(self, value):
        if len(self.dq) < self.n:
            self.dq.appendleft(value)
            return True
        return False

    def insertLast(self, value):
        if len(self.dq) < self.n:
            self.dq.append(value)
            return True
        return False

    def deleteFront(self):
        if self.dq:
            self.dq.popleft()
            return True
        return False

    def deleteLast(self):
        if self.dq:
            self.dq.pop()
            return True
        return False

    def getFront(self):
        return -1 if not self.dq else self.dq[0]

    def getRear(self):
        return -1 if not self.dq else self.dq[-1]

    def isEmpty(self):
        return len(self.dq) == 0

    def isFull(self):
        return len(self.dq) == self.n

```

```java []
import java.util.LinkedList;

class MyCircularDeque {
    private LinkedList<Integer> dq;
    private int n;

    public MyCircularDeque(int k) {
        dq = new LinkedList<>();
        n = k;
    }

    public boolean insertFront(int value) {
        if (dq.size() < n) {
            dq.addFirst(value);
            return true;
        }
        return false;
    }

    public boolean insertLast(int value) {
        if (dq.size() < n) {
            dq.addLast(value);
            return true;
        }
        return false;
    }

    public boolean deleteFront() {
        if (!dq.isEmpty()) {
            dq.removeFirst();
            return true;
        }
        return false;
    }

    public boolean deleteLast() {
        if (!dq.isEmpty()) {
            dq.removeLast();
            return true;
        }
        return false;
    }

    public int getFront() {
        return dq.isEmpty() ? -1 : dq.getFirst();
    }

    public int getRear() {
        return dq.isEmpty() ? -1 : dq.getLast();
    }

    public boolean isEmpty() {
        return dq.isEmpty();
    }

    public boolean isFull() {
        return dq.size() == n;
    }
}

```
![image.png](./images/0.png)

Please Upvote ^
              |


