# ✔ C++ | Brute Force | Clean and Concise

**Author:** jk20
**Votes:** 25
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/1824082/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/1824082/)

---

```
class Solution {
public:
    vector<string> cellsInRange(string s) {
        
        vector<string>ans;
        
        for(char ch=s[0];ch<=s[3];ch++)
        {
            for(int i=s[1]-'0';i<=s[4]-'0';i++)
            {
                string res="";
                res+=ch;
                res+=to_string(i);
                ans.push_back(res);
               
            }
        }
        return ans;
    }
};
```

**Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding : )**
