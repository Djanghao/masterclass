# Easy Solution || Using map and max count

**Author:** prathamesh45_
**Votes:** 2
**Link:** [https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4742268/](https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4742268/)

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
    string lastNonEmptyString(string s) {
        unordered_map<int,int>mp;
        for(auto i:s)mp[i]++;
        
        int maxi = INT_MIN;
        for(auto i:mp){
            maxi = max(maxi,i.second);
        }
        string ans ="";
        unordered_map<int,int>m;
        vector<int>v(s.size());
        for(int i=0;i<s.size();i++){
            m[s[i]]++;
            v[i]=(m[s[i]]);
        }
        for(int i=0;i<v.size();i++){
            if(v[i]==maxi)ans.push_back(s[i]);
        }
        if(maxi ==1)return s;
        return ans; 
    }
};
```