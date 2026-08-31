# c++ || self explanatory

**Author:** rajat_gupta_
**Votes:** 18
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/1238685/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/1238685/)

---

```
class Solution {
public:
    int countGoodSubstrings(string s) {
        int cnt=0,n=s.size();
        unordered_map<char,int> map;
        for(int i=0;i<n;i++){
            if(i>2 and --map[s[i-3]] == 0) map.erase(s[i-3]);
            map[s[i]]++;
            if(map.size() == 3) cnt++;
        }
        return cnt;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
