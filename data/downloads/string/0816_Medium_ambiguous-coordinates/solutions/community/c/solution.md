# C++ Clean and Simple Solution Faster Than 96%

**Author:** YehudisK
**Votes:** 43
**Link:** [https://leetcode.com/problems/ambiguous-coordinates/solutions/1205855/](https://leetcode.com/problems/ambiguous-coordinates/solutions/1205855/)

---

```
class Solution {
public:
    vector<string> ambiguousCoordinates(string s) {
        vector<string> res;
        string s2 = s.substr(1, s.size()-2);
        int n = s2.size();
        
        for (int i = 1; i < n; i++) {
            vector<string> first = getNumbers(s2.substr(0, i));
            vector<string> second = getNumbers(s2.substr(i));
            
            for (int j = 0; j < first.size(); j++) {
                for (int k = 0; k < second.size(); k++) {
                    res.push_back("(" + first[j] + ", " + second[k] + ")");
                }
            }
        }
        return res;
    }
    
private:
    vector<string> getNumbers(string num) {
        vector<string> res;
        int n = num.size();
        
        if (n == 1) 
            return {num};
        
        if (num[0] != '0') 
            res.push_back(num);
        
        if (num[0] == '0') {
            if (num.back() == '0') return {};
            return {"0." + num.substr(1)};
        }
        
        for (int i = 1; i < n; i++) {
            if (num.substr(i).back() == '0') continue;
            res.push_back(num.substr(0, i) + "." + num.substr(i));
        }
        
        return res;
    }
};
```
**Like it? please upvote!**