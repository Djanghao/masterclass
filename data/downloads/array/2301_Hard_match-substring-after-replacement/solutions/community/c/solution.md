# Easy C++ code | Hash map | Brute Force

**Author:** venkatasaitanish
**Votes:** 30
**Link:** [https://leetcode.com/problems/match-substring-after-replacement/solutions/2138834/](https://leetcode.com/problems/match-substring-after-replacement/solutions/2138834/)

---

Let n = length of s, k = length of sub
Just iterate string s over every substring of length k and check,
* If character matches, just continue.
* If not matched, check we can change into character using unordered map, if we can change continue, else it is not possible for that substring.
For checking, store the mappings in an unordered map of char mapped with unordered set, to get the mapping in O(1).
**Time complexity : O(n*k)**

```
class Solution {
public:
    bool matchReplacement(string s, string sub, vector<vector<char>>& m) {
        int n = s.length(), k = sub.length();
        unordered_map<char,unordered_set<char>> mp;
        for(int i=0;i<m.size();i++){
            mp[m[i][0]].insert(m[i][1]);
        }

        for(int i=0;i<=n-k;i++){
            int flag = 0;
            for(int j=0;j<k;j++){
                char x = s[i+j], y = sub[j];
                if(y==x || mp[y].find(x)!=mp[y].end()) continue;
                else{
                    flag = 1;
                    break;
                }
            }
            if(flag==0) return true;
        }
        return false;
    }
};
```
**Upvote if it helps!**