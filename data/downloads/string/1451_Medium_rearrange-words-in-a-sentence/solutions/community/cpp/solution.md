# using map || easy and O(N)

**Author:** shishirRsiam
**Votes:** 2
**Link:** [https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/4587548/](https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/4587548/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    string arrangeWords(string t) 
    {
        t[0]=t[0]-'A'+'a';
        map<int,vector<string>>mp;
        stringstream ss(t);
        string s;
        while(ss>>s)
            mp[s.size()].push_back(s);
        
        string ans;
        for(auto x:mp)
        {
            for(string v:x.second)
                ans+=v+" ";
        }
        ans.pop_back();
        ans[0]=toupper(ans[0]);
        return ans;
    }
};
```