# DP

**Author:** 3aarongan
**Votes:** 0
**Link:** [https://leetcode.com/problems/toss-strange-coins/solutions/5555726/](https://leetcode.com/problems/toss-strange-coins/solutions/5555726/)

---


```
class Solution {
public:
    double probabilityOfHeads(vector<double>& prob, int target) {
        vector<double> v(prob.size()+1,0);
        v[0] = 1.0;
        for(int i = 0; i < prob.size(); i++){
            for(int j = i+1; j > 0; j--){
                v[j]=v[j-1]*prob[i]+v[j]*(1.0-prob[i]);
            }
            v[0]*=(1.0-prob[i]);
        }
        return v[target];
    }
};
```