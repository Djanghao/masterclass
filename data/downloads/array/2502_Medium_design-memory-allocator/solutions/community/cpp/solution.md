# C++ Simple Iterative  using Vector || Very Simple and Easy to Understand

**Author:** kreakEmp
**Votes:** 11
**Link:** [https://leetcode.com/problems/design-memory-allocator/solutions/2899383/](https://leetcode.com/problems/design-memory-allocator/solutions/2899383/)

---


```
class Allocator {
public:
    
    vector<int> v;
    Allocator(int n) {
        v.resize(n, 0);
    }
    
    int allocate(int size, int mID) {
        int start = -1, count = 0;
        for(int i = 0; i < v.size(); ++i){
            if(v[i] == 0){
                if(count == 0) start = i;
                count++;
                if(count >= size ) {
                    for(int j = 0; j < count; ++j){
                        v[start + j] = mID;
                    }
                    return start;
                }
            }else{
                start = -1;
                count = 0;
            }
        }
        return -1;
    }
    
    int free(int mID) {
        int sz = 0;
        for(int i=0; i < v.size(); ++i){
            if(v[i] == mID) {
                sz++;
                v[i] = 0;
            }
        }
        return sz;
    }
};

/**
 * Your Allocator object will be instantiated and called as such:
 * Allocator* obj = new Allocator(n);
 * int param_1 = obj->allocate(size,mID);
 * int param_2 = obj->free(mID);
 */
```