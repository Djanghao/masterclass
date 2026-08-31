# C++ using two stacks, quite short and easy to understand

**Author:** zjchenRice
**Votes:** 552
**Link:** [https://leetcode.com/problems/min-stack/solutions/49016/](https://leetcode.com/problems/min-stack/solutions/49016/)

---

    class MinStack {
    private:
	    stack<int> s1;
	    stack<int> s2;
    public:
	    void push(int x) {
		    s1.push(x);
		    if (s2.empty() || x <= getMin())  s2.push(x);	    
        }
        void pop() {
		    if (s1.top() == getMin())  s2.pop();
		    s1.pop();
	    }
        int top() {
		    return s1.top();
	    }
        int getMin() {
		    return s2.top();
	    }
    };