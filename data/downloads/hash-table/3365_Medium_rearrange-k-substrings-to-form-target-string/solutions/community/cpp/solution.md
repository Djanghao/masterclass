# c++ solution using map

**Author:** dilipsuthar60
**Votes:** 8
**Link:** [https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6077243/](https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6077243/)

---

```
class Solution {
public:
    bool isPossibleToRearrange(string s, string t, int k) {
        int n = s.size();
        unordered_map<string, int> mp;
        int size = n / k;
        for (int i = 0; i < n; i += size) mp[s.substr(i, size)]++;
        for (int i = 0; i < n; i += size) mp[t.substr(i, size)]--;
        
        for (auto &[key,value] : mp) if (value != 0) return false;
        
        return true;
    }
};
```