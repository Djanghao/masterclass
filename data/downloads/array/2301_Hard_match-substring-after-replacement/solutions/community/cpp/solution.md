# [C++] Simple C++ Code || 90% time || NO HASHMAP

**Author:** _pros_
**Votes:** 5
**Link:** [https://leetcode.com/problems/match-substring-after-replacement/solutions/2330126/](https://leetcode.com/problems/match-substring-after-replacement/solutions/2330126/)

---

# **If you like the implementation then Please help me by increasing my reputation. By clicking the up arrow on the left of my image.**
```
class Solution {
public:
    bool matchReplacement(string s, string sub, vector<vector<char>>& mappings) {
        vector<vector<int>> submap(256, vector<int>(256, 0));
        int n = sub.size(), m = s.size();
        for(vector<char> &v : mappings)
            submap[v[0]][v[1]] = 1;
        int i = 0, j = 0;
        while(i <= m-n)
        {
            if(s[i] == sub[j] || submap[sub[j]][s[i]])
            {
                int t = i;
                i++;
                j++;
                while(j < n)
                {
                    if(s[i] == sub[j] || submap[sub[j]][s[i]])
                    {
                        j++;
                        i++;
                    }
                    else
                        break;
                }
                i = t;
            }
            if(j == n) return true;
            i++;
            j=0;
        }
        return false;
    }
};
```