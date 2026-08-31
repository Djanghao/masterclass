# ✅ [c++] || stack based solution

**Author:** xor09
**Votes:** 86
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/1995282/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/1995282/)

---

```
class Solution {
public:
    string removeDuplicates(string s, int k) {
        int n = s.size();
        if(n<k) return s;
        
        stack<pair<char,int>> stk;
        for(int i=0; i<n; ++i){
            if(stk.empty() || stk.top().first != s[i]) stk.push({s[i],1});
            else{
                auto prev = stk.top();
                stk.pop();
                stk.push({s[i], prev.second+1});
            }
            if(stk.top().second==k) stk.pop();
        }
        
        string ans = "";
        while(!stk.empty()){
            auto cur = stk.top();
            stk.pop();
            while(cur.second--){
                ans.push_back(cur.first);
            }
        }
        reverse(ans.begin(), ans.end());
        return ans;
    }
};
```
Please **UPVOTE**