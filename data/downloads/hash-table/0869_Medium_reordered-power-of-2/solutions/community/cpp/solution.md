# C++ Easy Solution of Vector

**Author:** Conquistador17
**Votes:** 9
**Link:** [https://leetcode.com/problems/reordered-power-of-2/solutions/2481179/](https://leetcode.com/problems/reordered-power-of-2/solutions/2481179/)

---

```
class Solution {
public:
    vector<int> Helper(long n){
        vector<int>num(10);
        
        while(n){
            num[n%10]++;
            n=n/10;
        }
        return num;
    }
    bool reorderedPowerOf2(int n) {
        vector<int>v=Helper(n);
        for(int i=0;i<31;i++){
            if(v==Helper(1<<i)){
                return true;
            }
        }
        return false;
    }
};
```
# **Please share and Upvote it keeps me motivated**