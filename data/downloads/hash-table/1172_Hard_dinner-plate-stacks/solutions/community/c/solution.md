# [C++] Using vector of vector and few integers

**Author:** dev1988
**Votes:** 4
**Link:** [https://leetcode.com/problems/dinner-plate-stacks/solutions/367639/](https://leetcode.com/problems/dinner-plate-stacks/solutions/367639/)

---

I used vector of vector to simulate rows of stack.
Also used ```nextr and max``` to keep track of the ```leftmost stack which has space available and the right most non-empty stack to run pop upon```.

```
class DinnerPlates {
public:
    vector<vector<int>> v;
    int c, max, nextr;
    
    DinnerPlates(int capacity) {
        c = capacity;
        v = vector<vector<int>>(100002, vector<int>());
        nextr = 0;
        max = 0;
    }
    
    void push(int val) {
        v[nextr].push_back(val);

        while(nextr < v.size() && v[nextr].size() == c){
            nextr++;
        }
        if(nextr > max){
            //correctly set value for max;
            max = (v[nextr].size() > 0) ? nextr : nextr-1;
        }
    }
    
    int pop() {
        int s = v[max].size();
        if(max <= 0 && s == 0){
            return -1;
        }
        int t = v[max][s-1];
        v[max].pop_back();
        while(v[max].size() == 0 && max > 0){
            max--;
        }
        if(nextr > max) nextr = max;
        return t;
    }
    
    int popAtStack(int index) {
        int s = v[index].size();
        if(s == 0){
            return -1;
        }
        int t = v[index][s-1]; 
            v[index].pop_back();
        if(index < nextr) nextr = index;
        if(v[index].size() == 0 && index == max && max > 0){
            max--;
        }
        return t;
    }
};
```