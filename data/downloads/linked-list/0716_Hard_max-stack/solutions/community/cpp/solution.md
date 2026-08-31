# c++ two solutions, clean code

**Author:** l355c0d3
**Votes:** 38
**Link:** [https://leetcode.com/problems/max-stack/solutions/490946/](https://leetcode.com/problems/max-stack/solutions/490946/)

---

1) solution similar to https://leetcode.com/problems/max-stack/discuss/108962/C%2B%2B-O(logN)-for-write-ops-O(1)-for-reads (and to the official double-linked list+ TreeMap Solution)

time complexities: 
* push -O(log(n)) - due to insert in sorted map ( c++ map is RB tree/BST)
* pop , popMax- O(log(n) - due to each erase() in operation in sorted map requires rebalancing
* top, peekMax - O(1)


```
class MaxStack {
    list<int> dll; //double-linked list, O(1) for insert/delete
    map<int, vector<list<int>::iterator>, greater<int>> m; //sorted map, largest key at begin(); O(1) to find max, O(log(n)) to insert/delete
public:
    void push(int x) {
        dll.push_front(x);
        m[x].push_back(dll.begin());
    }
    int pop() {
        int x = dll.front();
        m[x].pop_back();
        if (m[x].empty()) m.erase(x);
        dll.pop_front();
        return x;
    }
    int top() { return dll.front(); }
    int peekMax() { return m.begin()->first; }
    int popMax() {
        int x = m.begin()->first;
        auto it = (m.begin()->second).back();
        dll.erase(it);
        m[x].pop_back();
        if (m[x].empty()) m.erase(x);
        return x;
    }
};
```

2) solution similar to the official two-stacks solution
time complexities: 
* push, pop, top, peekMax- O(1)
* popMax - O(n)- since in the worst case we need to pop all elements from the stack to get to the max if it was inserted first

```
class MaxStack {
    stack<int>s1;
    stack<int>s2;
public:
   void push(int x) {
       s1.push(x);
       if (s2.empty() || s2.top()<=x) s2.push(x);
    }
    int pop() {
        int x = s1.top();
        s1.pop();
        if (x==peekMax()) s2.pop();
        return x;
    }
    int top() { return s1.top(); }
    int peekMax() { return s2.top(); }
    int popMax() { 
        int x = peekMax();
        stack<int> tmp;
        while(top()!=x) tmp.push(pop());
        pop();
        while(!tmp.empty()) {
            push(tmp.top()); 
            tmp.pop();
        }
 
        return x;
    }
};

