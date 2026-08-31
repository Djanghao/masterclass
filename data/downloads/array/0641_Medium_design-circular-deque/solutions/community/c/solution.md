# C++ Simplest Solution, Short and Clear

**Author:** YehudisK
**Votes:** 27
**Link:** [https://leetcode.com/problems/design-circular-deque/solutions/1141921/](https://leetcode.com/problems/design-circular-deque/solutions/1141921/)

---

```
class MyCircularDeque {
public:
    /** Initialize your data structure here. Set the size of the deque to be k. */
    MyCircularDeque(int k) : head(0), tail(0), capacity(k), size(0), q(vector<int>(k, 0)) {}
    
    /** Adds an item at the front of Deque. Return true if the operation is successful. */
    bool insertFront(int value) {
        if (isFull()) return false;
        head = head == 0 ? capacity - 1 : head - 1;
        q[head] = value;
        size++;
        return true;
    }
    
    /** Adds an item at the rear of Deque. Return true if the operation is successful. */
    bool insertLast(int value) {
        if (isFull()) return false;
        q[tail++] = value;
        tail %= capacity;
        size++;
        return true;
    }
    
    /** Deletes an item from the front of Deque. Return true if the operation is successful. */
    bool deleteFront() {
        if (isEmpty()) return false;
        head = (head + 1) % capacity;
        size--;
        return true;
    }
    
    /** Deletes an item from the rear of Deque. Return true if the operation is successful. */
    bool deleteLast() {
        if (isEmpty()) return false;
        tail = tail == 0 ? capacity - 1 : tail - 1;
        size--;
        return true;
    }
    
    /** Get the front item from the deque. */
    int getFront() {
        return isEmpty() ? -1 : q[head];
    }
    
    /** Get the last item from the deque. */
    int getRear() {
        return isEmpty() ? -1 : tail == 0 ? q[capacity-1]: q[tail-1];
    }
    
    /** Checks whether the circular deque is empty or not. */
    bool isEmpty() {
        return size == 0;
    }
    
    /** Checks whether the circular deque is full or not. */
    bool isFull() {
        return size == capacity;
    }
    
private:
    int head, tail, size, capacity;
    vector<int> q;
};
```
**Like it? please upvote!**