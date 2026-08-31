# c++ greedy O(nlogn) | easy to understand faster than 75%, space 95%

**Author:** leetcoder10086
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/1550965/](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/1550965/)

---

```
class Solution {
public:
    string minimizeError(vector<string>& prices, int target) {
        int Min = 0, Max = 0;
        vector<double> V;
        for(string num: prices){
            double d = stod(num);
            Min += floor(d);
            Max += ceil(d);
            d = ceil(d) - d;
            if(d > 0 && d < 1)
                V.push_back(d);
        }
        if(target < Min || target > Max)
            return "-1";
        Min = abs(target - Min);
        sort(V.begin(), V.end());
        double ans = 0;
        for(int i = 0; i < Min; i++) ans += V[i];
        for(int i = Min; i < V.size(); i++) ans += 1.0 - V[i];
        string s = to_string(ans);
        s = s.substr(0, s.find('.')+4);
        return s;
    }
};
```