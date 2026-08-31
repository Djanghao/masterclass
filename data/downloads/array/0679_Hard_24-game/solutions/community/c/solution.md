# C++ DFS Solution easy-understanding

**Author:** Rohit_raj_1234
**Votes:** 13
**Link:** [https://leetcode.com/problems/24-game/solutions/1315320/](https://leetcode.com/problems/24-game/solutions/1315320/)

---

```
class Solution {
    vector<double> compute(double x, double y)
    {
        return {x + y, x - y, y - x, x * y, x / y, y / x};
    }
    
    bool helper(vector<double> &v){
        if(v.size()==1) return abs(v[0] - 24) < 0.0001;
        
        for(int i=0; i < v.size(); i++){
            for(int j=i+1; j < v.size(); j++){
                double n1 = v[i];
                double n2= v[j];
                vector<double> next;
                
                for(double &num: compute(n1,n2)){
                    next.clear();
                    next.push_back(num);
                    for(int k=0; k < v.size(); k++){
                        if(k!=i && k!=j) next.push_back(v[k]);
                    }
                    if(helper(next)) return true;
                }
            }
        }
        return false;
    }
public:
    bool judgePoint24(vector<int>& cards) {
        vector<double> v(cards.begin(), cards.end());
        return helper(v);
    }
};

```