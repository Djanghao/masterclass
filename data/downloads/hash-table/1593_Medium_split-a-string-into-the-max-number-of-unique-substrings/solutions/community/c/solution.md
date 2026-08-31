# [ C++ ] Simple Backtracking Solution

**Author:** jinTaeJin
**Votes:** 12
**Link:** [https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/857169/](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/solutions/857169/)

---

```
class Solution {
public:
    unordered_set<string>st;
    int ans=0;
    void dfs(string &s, int idx)
    {
        if(st.size()>ans) ans=st.size();
        if(idx>=s.length()) return;
        string str="";
        for(int i=idx ; i<s.length() ; i++)
        {
            str += s[i];
            if(st.find(str)==st.end())
            {
                st.insert(str);
                dfs(s,i+1);
                st.erase(str);
            }
        }
    }
    
    int maxUniqueSplit(string s) {
        dfs(s,0);
        return ans;
    }
};
```