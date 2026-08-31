# C++ || 100.00%(2 Queues) || 100.00%(1 Queue) || Easy to understand

**Author:** Anonymous_Kumar
**Votes:** 83
**Link:** [https://leetcode.com/problems/implement-stack-using-queues/solutions/765739/](https://leetcode.com/problems/implement-stack-using-queues/solutions/765739/)

---

***Runtime: 0 ms, faster than 100.00% of C++ online submissions for Implement Stack using Queues.
Memory Usage: 7.1 MB, less than 24.45% of C++ online submissions for Implement Stack using Queues.***
```
class MyStack {
public:
    /** Initialize your data structure here. */
    queue<int> q1;
    queue<int> q2;
    MyStack() {
        
    }
    
    /** Push element x onto stack. */
    void push(int x) {
        q2.push(x);
        while(!q1.empty()){
            q2.push(q1.front());    q1.pop();
        }
        swap(q1, q2);
    }
    
    /** Removes the element on top of the stack and returns that element. */
    int pop() {
        int result = top();
        q1.pop();
        return result;
    }
    
    /** Get the top element. */
    int top() {
        return q1.front();
    }
    
    /** Returns whether the stack is empty. */
    bool empty() {
        return q1.empty();
    }
};
```

***Runtime: 0 ms, faster than 100.00% of C++ online submissions for Implement Stack using Queues.
Memory Usage: 6.9 MB, less than 84.44% of C++ online submissions for Implement Stack using Queues.***
```
class MyStack {
public:
    /** Initialize your data structure here. */
    queue<int> q1;
    MyStack() {
        
    }
    
    /** Push element x onto stack. */
    void push(int x) {
        int sz = q1.size();
        q1.push(x);
        while(sz--){
            q1.push(q1.front());
            q1.pop();
        }
    }
    
    /** Removes the element on top of the stack and returns that element. */
    int pop() {
        int result = top();
        q1.pop();
        return result;
    }
    
    /** Get the top element. */
    int top() {
        return q1.front();
    }
    
    /** Returns whether the stack is empty. */
    bool empty() {
        return q1.empty();
    }
};

```