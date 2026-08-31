# C++ Two solutions (with hash map & without)

**Author:** IgorB
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/537700/](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/537700/)

---

Using ```std::unordered_set``` - 16 ms (%75/%64)
```
class Solution {
public:
    int lengthOfLongestSubstringKDistinct(string s, int k) 
    {
        int res = 0;
        unordered_map<char, int> count; // track number occurances of each char between 'l' & 'r'
        for(int l = 0, r = 0; r < s.length(); ++r) 
        {
            ++count[s[r]];
            while(count.size() > k)
            {
                if(--count[s[l]] == 0) count.erase(s[l]);
                ++l;
            }
            res = max(res, r-l+1);
        }
        return res;
    }
};
```

Using ```std::vector``` for ```ASCII``` mapping - 4 ms (%99.68/%100)
```
class Solution {
public:
    int lengthOfLongestSubstringKDistinct(string s, int k) 
    {
        int res = 0;
        vector<int> count(CHAR_MAX+1); // 128
        int unique = 0;
        for(int l = 0, r = 0; r < s.length(); ++r)
        {
            if(count[s[r]]++ == 0) ++unique;
            while(unique > k)
            {
                if(--count[s[l]] == 0) --unique;
                ++l;
            }
            res = max(res, r-l+1);
        }
        return res;
    }
};

```
