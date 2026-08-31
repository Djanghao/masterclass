# C++|easy to understand

**Author:** spyole97
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/1751178/](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/1751178/)

---

```
class Solution {
public:
    int findTheLongestSubstring(string s) {
        unordered_set<char>vowel = {'a','e','i','o','u'};
        unordered_map<int,int>M;
        M[0] = -1;
        int mask = 0;
        int n = s.length();
        int max_len = 0;
        for(int i = 0; i < n; i++)
        {
            if(vowel.find(s[i]) != vowel.end())
            {
                mask ^= 1 << (s[i] - 'a');
                if(M.find(mask) == M.end())
                    M[mask] = i;
            }
            max_len = max(max_len,i - M[mask]);
            
        }
        return max_len;
        
        
    }
};
```