# Dart simple O(1) solution

**Author:** Healingwave
**Votes:** 1
**Link:** [https://leetcode.com/problems/min-stack/solutions/3698716/](https://leetcode.com/problems/min-stack/solutions/3698716/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Create 2 lists of int type. One for main stack and one to keep track of minimun value of the main stack. When push method is called, we add value to main stack first. Then we check if min stack is not empty, we find the lower value and add into the min stack. This way min stack will always has the lowest value at the last index. If main stack is popped, then min stack is popped too to remove mininum value. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ 

# Code
```
class MinStack {
    List<int> stack = [];
    List<int> minStack = [];

    MinStack() {}

    void push(int val) {
        stack.add(val);

        if (minStack.isEmpty) {
            minStack.add(val);
        } else if (val < minStack.last) {
            minStack.add(val);
        } else {
            minStack.add(minStack.last);
        }
    }

    void pop() {
        stack.removeLast();
        minStack.removeLast();
    }

    int top() {
        return stack.last;
    }

    int getMin() {
        return minStack.last;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = MinStack();
 * obj.push(val);
 * obj.pop();
 * int param3 = obj.top();
 * int param4 = obj.getMin();
 */
```