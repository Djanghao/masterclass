# Simple C# Solution (With Explanation)

**Author:** inderbindra
**Votes:** 7
**Link:** [https://leetcode.com/problems/min-stack/solutions/3969801/](https://leetcode.com/problems/min-stack/solutions/3969801/)

---

# Approach 1

The provided code implements a `MinStack` class that supports push, pop, top, and retrieving the minimum element in constant time. It uses a stack to keep track of the elements along with their corresponding minimum values.

# Steps:

1. Initialize a stack to store tuples of values and their corresponding minimum values.
2. Initialize `minVal` to `int.MaxValue` as there is no minimum value initially.
3. Push new elements onto the stack along with the current minimum value.
4. When popping an element, update `minVal` by looking at the minimum value of the new top element.
5. The `Top` method returns the value of the top element in the stack.
6. The `GetMin` method returns the minimum value stored in the stack.

# Complexity
- **Time complexity: O(1)**
    - All operations (push, pop, top, and getMin) are performed in constant time, O(1).

- **Space complexity: O(n)**
    - The space complexity is O(n), where n is the number of elements pushed onto the stack.

# Code
```
public class MinStack {
    Stack<(int val, int minVal)> stack; 
    int minVal = int.MaxValue;
    public MinStack() {
        stack = new Stack<(int, int)>();
    }
    
    public void Push(int val) {
        if(minVal > val)
        {
            minVal = val;
        }
        stack.Push((val, minVal));
    }
    
    public void Pop() {
        stack.Pop();
        if(stack.Count > 0)
        {
            minVal = stack.Peek().minVal;
        }
        else
        {
            minVal = int.MaxValue;
        }
    }
    
    public int Top() {
        return stack.Peek().val;
    }
    
    public int GetMin() {
        return stack.Peek().minVal;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.Push(val);
 * obj.Pop();
 * int param_3 = obj.Top();
 * int param_4 = obj.GetMin();
 */
```

# Approach 2:
# Code
```
public class MinStack {
    Stack<int> stack = null;
    Stack<int> minStack = null;
    int minValue = 0;
    public MinStack() {
        stack = new Stack<int>();
        minStack = new Stack<int>();
    }
    public void Push(int val) {
        if(stack.Count == 0)
        {
            minValue = val;
        }
        stack.Push(val);
        minValue = Math.Min(minValue, val);
        minStack.Push(minValue);
    }
    public void Pop() {
        stack.Pop();
        minStack.Pop();
        if(minStack.Count > 0)
        {
            minValue = minStack.Peek();
        }
    }
    public int Top() {
        return stack.Peek();
    }
    
    public int GetMin() {
        return minValue;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.Push(val);
 * obj.Pop();
 * int param_3 = obj.Top();
 * int param_4 = obj.GetMin();
 */
```