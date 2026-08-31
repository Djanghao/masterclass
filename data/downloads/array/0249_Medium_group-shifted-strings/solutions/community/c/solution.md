# Easily-understood Faster than 99% C++ concise (13  lines) solution with explanation

**Author:** veronicatt
**Votes:** 5
**Link:** [https://leetcode.com/problems/group-shifted-strings/solutions/867711/](https://leetcode.com/problems/group-shifted-strings/solutions/867711/)

---

Idea:
We can shift a string such that the first char of the string is some anchor char, e.g., 'a'. We can treat such shifted string as the origin of a string. So if two strings have the same origin, they need to go to the same group.
```c++
class Solution {
public:
    vector<vector<string>> groupStrings(vector<string>& strings) {
        auto fn = [](string s){ // this func converts a string to a new string (the origin) whose first char is 'a'.
            int diff = s[0] - 'a'; // 
            for (int i=0; i< s.size(); ++i) {
                if ( s[i] - diff < 'a') s[i] = s[i] - diff + 26; // Note, may need wrap around when left-shifting a char.    
                else s[i] -= diff;
            }
            return s;
        };
        unordered_map<string,vector<string>> mp;
        for (auto & s: strings)  mp[fn(s)].push_back(s);
        vector<vector<string>> res;
        for (auto& [k,v]: mp) res.emplace_back(v);
        return res;
    }
};
```