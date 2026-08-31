# Easy solution!!!! Beats 99.3% Time & 100% Space

**Author:** kanghuynhba
**Votes:** 2
**Link:** [https://leetcode.com/problems/dinner-plate-stacks/solutions/4059168/](https://leetcode.com/problems/dinner-plate-stacks/solutions/4059168/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class DinnerPlates {
public:
    vector<int> stack;
    priority_queue<int, vector<int>, greater<int>> pq;
    int size;
    DinnerPlates(int capacity) {
        size=capacity;
    }
    
    void push(int val) {
        while(stack.empty() && !pq.empty()) {
            pq.pop();
        } 
        if(!pq.empty()) {
            stack[pq.top()]=val;
            pq.pop();
            return;
        }
        stack.push_back(val);
    }
    
    int pop() {
        if(stack.size()==0) {
            return -1;
        }
        while(stack[stack.size()-1]==-1) {
            stack.pop_back();
        }
        int temp=stack[stack.size()-1];
        stack.pop_back();

        return temp;
    }
    
    int popAtStack(int index) {
        int endId=index*size+size-1;
        if(endId>=stack.size()) {
            return -1;
        }
        int temp=-1;
        while(endId>=index*size && temp==-1) {
            temp=stack[endId--];
        }
        if(temp!=-1) {
            pq.push(endId+1);
            stack[endId+1]=-1;
        }
        return temp;
    }
};

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * DinnerPlates* obj = new DinnerPlates(capacity);
 * obj->push(val);
 * int param_2 = obj->pop();
 * int param_3 = obj->popAtStack(index);
 */
```