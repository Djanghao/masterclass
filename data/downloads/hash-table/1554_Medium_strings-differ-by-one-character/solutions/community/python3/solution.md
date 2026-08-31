# [Python3] 2 approaches

**Author:** ye15
**Votes:** 10
**Link:** [https://leetcode.com/problems/strings-differ-by-one-character/solutions/1412379/](https://leetcode.com/problems/strings-differ-by-one-character/solutions/1412379/)

---


**Approach 1 -- O(M^2 N)**
```
class Solution:
    def differByOne(self, dict: List[str]) -> bool:
        seen = set()
        for word in dict: 
            for i in range(len(word)): 
                key = word[:i] + "*" + word[i+1:]
                if key in seen: return True 
                seen.add(key)
        return False
```

**Approach 2 -- rolling hash O(MN)** 
```
class Solution:
    def differByOne(self, dict: List[str]) -> bool:
        MOD = 1_000_000_007
        hs = []
        for word in dict: 
            val = 0
            for ch in word: val = (26*val + ord(ch) - 97) % MOD
            hs.append(val)
        
        mult = 1
        for j in reversed(range(len(dict[0]))): 
            seen = {}
            for i, w in enumerate(dict): 
                val = (hs[i] - (ord(w[j]) - 97) * mult) % MOD
                if val in seen: 
                    for ww in seen[val]: 
                        if sum(x != xx for x, xx in zip(w, ww)) == 1: return True 
                seen.setdefault(val, []).append(w)
            mult = 26 * mult % MOD
        return False
```

Implemented in C++ 
```
class Solution {
public:
    bool differByOne(vector<string>& dict) {
        const int MOD = 1'000'000'007; 
        vector<int> hs; 
        for (auto& word : dict) {
            long val = 0; 
            for (auto& ch : word) val = (26*val + ch - 'a') % MOD; 
            hs.push_back(val); 
        }
        
        int m = dict.size(), n = dict[0].size(); 
        long mult = 1l; 
        for (int j = n-1; j >= 0; --j) {
            unordered_map<int, vector<int>> seen; 
            for (int i = 0; i < m; ++i) {
                int val = (hs[i] - (dict[i][j] - 'a')*mult + 26l*MOD) % MOD; 
                if (seen.count(val)) 
                    for (auto& ii : seen[val]) 
                        if (dict[ii].substr(0, j) == dict[i].substr(0, j) && dict[ii].substr(j+1, n-j-1) == dict[i].substr(j+1, n-j-1)) return true; 
                seen[val].push_back(i); 
            }
            mult = (26 * mult) % MOD; 
        }
        return false; 
    }
};
```