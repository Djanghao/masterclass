# [Python3] bitmask dp

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/game-of-nim/solutions/1412432/](https://leetcode.com/problems/game-of-nim/solutions/1412432/)

---

**Approach 1 -- bitmask dp**
```
class Solution:
    def nimGame(self, piles: List[int]) -> bool:
        mask = 0
        for i, x in enumerate(piles): mask |= x << 3*i
        
        @cache
        def fn(mask): 
            """Return True if current player can win by playing optimally."""
            for i in range(len(piles)): 
                val = (mask >> 3*i) & 7
                for k in range(1, val+1): 
                    mask0 = mask - (k << 3*i)
                    if not fn(mask0): return True 
            return False 
        
        return fn(mask)
```

```
class Solution {
public:
    bool nimGame(vector<int>& piles) {
        unordered_map<int, bool> memo; 
        
        function<bool(int)> fn = [&](int mask) {
            if (!memo.count(mask)) {
                memo[mask] = false; 
                for (int i = 0; i < piles.size(); ++i) {
                    int val = (mask >> 3*i) & 7; 
                    for (int x = 1; x <= val; ++x) 
                        if (!fn(mask - (x << 3*i))) return memo[mask] = true; 
                }
            }
            return memo[mask]; 
        }; 
        
        int mask = 0; 
        for (int i = 0; i < piles.size(); ++i) mask |= piles[i] << 3*i; 
        return fn(mask); 
    }
};
```

**Approach 2 -- Sprague-Grundy Theorem**

```
class Solution {
public:
    bool nimGame(vector<int>& piles) {
        int ans = 0; 
        for (auto& x : piles) ans ^= x; 
        return ans; 
    }
};
```