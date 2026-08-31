# C++ || self explanatory

**Author:** rajat_gupta_
**Votes:** 13
**Link:** [https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1141569/](https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1141569/)

---

```
class Solution {
public:
    vector<int> findingUsersActiveMinutes(vector<vector<int>>& logs, int k) {
        unordered_map<int,set<int>> map;
        vector<int> res(k,0);
        for(auto &log : logs){
            map[log[0]].insert(log[1]);
        }
        for(auto i : map){
            res[i.second.size()-1]++;
        }
        return res;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
