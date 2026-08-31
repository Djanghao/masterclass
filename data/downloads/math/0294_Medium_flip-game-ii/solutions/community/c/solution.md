# C++ | 记忆化搜索 + 回溯 | Memorization + Backtracking

**Author:** vwo50
**Votes:** 4
**Link:** [https://leetcode.com/problems/flip-game-ii/solutions/1056778/](https://leetcode.com/problems/flip-game-ii/solutions/1056778/)

---

```
class Solution {
public:
    bool canWin(string s) {
        unordered_map<string, bool> memo; 
        
        helper(s, memo); 
        
        // for (const auto& a : memo) cout << a.first << " " << a.second << endl;
        
        return memo[s];
    }
    
    bool helper(string s, unordered_map<string, bool>& memo) {
        if (memo.count(s)) return memo[s];
        
        bool res = false;
        
        for (int i = 0; i < s.size(); i++) {
            if (i >= 1 && s[i] == '+' && s[i - 1] == '+') {
                string ss = s; ss[i - 1] = ss[i] = '-';
 
                if (!helper(ss, memo)) res = true; break;         
            }
        }
        
        memo[s] = res; 
        
        return res;
    }
};
```