# C++ hashmap, easy to understand

**Author:** titov
**Votes:** 4
**Link:** [https://leetcode.com/problems/palindrome-permutation-ii/solutions/2246928/](https://leetcode.com/problems/palindrome-permutation-ii/solutions/2246928/)

---

It is an older problem, but i did not find concise C++ solution in top voted.

Fill string from start and end, if we get start and end meet then we have a palindrome.
For every `start != end` position we need 2 chars, for `start == end`  1.

```
class Solution {
public:
    unordered_map<char, int> m;
    vector<string> res;

    void solve(string& s, int i, int j)
    {   
        if (i > j)
        {
            res.push_back(s);
            return;
        }
		
		auto use = i == j ? 1 : 2;
        
        for (auto& [ch, count] : m )
        {
            if (count < use)
                continue;
            
            count -= use;
            s[i] = s[j] = ch;
            solve(s, i+1, j-1);
            count += use;
        }    
    }
    
    vector<string> generatePalindromes(string s) {
        for (auto c : s) ++m[c];
        solve(s, 0, s.size()-1);
        return res;
    }
};
```