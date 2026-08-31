# C++ | Accepted ✅

**Author:** ash_gt7
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/1747002/](https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/1747002/)

---

```
class Solution {
public:
    int minCostSetTime(int startAt, int moveCost, int pushCost, int target) {
        vector<string> v;
        if(target < 100){
            v.push_back(to_string(target));
            int m = target / 60, sc = target % 60;
            string ssc = "";
            if(sc < 10){
                ssc += '0';
                ssc += to_string(sc);
            }else{
                ssc = to_string(sc);
            }
            v.push_back(to_string(m)+ssc);
        }else{
            int m = target / 60, sc = target % 60;
            if(m < 100){
                string ssc = "";
                if(sc < 10){
                    ssc += '0';
                    ssc += to_string(sc);
                }else{
                    ssc = to_string(sc);
                }
                v.push_back(to_string(m)+ssc);
            }
            if(60 + sc < 100){
                v.push_back(to_string(m-1)+ to_string(sc+60));
            }
        }
        int res = INT_MAX;
        for(int i=0; i<v.size(); i++){
            int cost = 0, cur = startAt;
            for(int j=0; j<v[i].size(); j++){
                if(v[i][j]-'0' != cur){
                    cost += moveCost;
                    cur = v[i][j]-'0';
                }
                cost += pushCost;
            }
            res = min(res, cost);
        }
        return res;
    }
};
```