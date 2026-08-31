# C++ || PREFIX SUM

**Author:** ganeshkumawat8740
**Votes:** 2
**Link:** [https://leetcode.com/problems/super-washing-machines/solutions/3616037/](https://leetcode.com/problems/super-washing-machines/solutions/3616037/)

---

# Code
```
class Solution {
public:
    int findMinMoves(vector<int>& v) {
        int sum = 0, n = v.size();
        for(auto &i: v)sum += i;
        if(sum%n)return -1;
        sum /= n;
        int k = 0;
        int ans = 0;
        for(auto &i: v){
            k += i-sum;
            ans = max({(i-sum),ans,abs(k)});
        }
        return ans;
    }
};
```