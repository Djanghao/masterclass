# ✅C++ | ✅Use Array | ✅Easy approach

**Author:** Yash2arma
**Votes:** 11
**Link:** [https://leetcode.com/problems/longest-uploaded-prefix/solutions/2647167/](https://leetcode.com/problems/longest-uploaded-prefix/solutions/2647167/)

---

```
class LUPrefix {
public:
    
    vector<int> pre;
    int val=0;
    
    LUPrefix(int n) 
    {
        pre.resize(n+2, 0);
    }
    
    void upload(int video) 
    {
        pre[video] = 1;
        
    }
    
    int longest() 
    {
        while(pre[val+1]==1)
                val++;
        
        return val;
    }
};
```