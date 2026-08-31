# C++ Simple code with one stack

**Author:** karandoshi
**Votes:** 511
**Link:** [https://leetcode.com/problems/min-stack/solutions/1209254/](https://leetcode.com/problems/min-stack/solutions/1209254/)

---

I came up with this simple solution using just a single stack.
Here I am using **Stack of Pair of Int**. The first value of the pair would store the element of the normal stack and the second value would store the minimum up to that point in the stack. 
So even if the minimum element of the stack is removed from the top, we still have a backup of the next minimum element in the pair. So for every element pushed in the stack, it stores its corresponding minimum value.

For example, let's do a **Dry Run** of an example.
```
["MinStack","push","push","push","push","push","getMin","pop","pop","top","push","getMin"]
[[],[5],[-2],[3],[-10],[20],[],[],[],[],[30],[]]
```
1. We push 5,-2,3,-10,20 in the stack.
2. If the stack is empty we push {val,val} in the stack
   else we push {val,min(s.top().second,val)} which is basically minimum upto that point.
3. Hence {5,5},{-2,-2},{3,-2},{-10,-10},{20,-10} are pushed in the stack.
4. To pop simply do stack.pop()
5. To get the top return stack.top().first;
6. Now we pop 20 and -10 from the stack
    The elements in the stack would be {5,5},{-2,-2},{3,-2}
7. On pushing 30 to the stack
   The elements in the stack would be {5,5},{-2,-2},{3,-2},{30,-2}.

The **Output** of the code would be:
```
[null,null,null,null,null,null,-10,null,null,3,null,-2]
```

All the operations are one liners expect the Push operation which is a 2 liner.
```
class MinStack {
public:
    vector< pair<int,int> > s;
	
    MinStack() { }
    
    void push(int val) {
        if(s.empty())
            s.push_back({val,val});
        else
            s.push_back({val,min(s.back().second,val)});    
    }
    
    void pop() { s.pop_back(); }
    
    int top() { return s.back().first; }
    
    int getMin() { return s.back().second; }
};
```
```
The Time complexity of each operation is O(1)
The Space complexity is O(N)
```

Guys, please give an **upvote** to acknowledge the efforts of the writer.
Do clarify your doubts in the comments section. Thank-you.