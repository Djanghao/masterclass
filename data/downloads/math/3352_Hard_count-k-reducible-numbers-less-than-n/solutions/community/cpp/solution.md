# DP || MEMOIZATION || Explained || Clean Code

**Author:** Mohit_2k_kukreja
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-k-reducible-numbers-less-than-n/solutions/6028679/](https://leetcode.com/problems/count-k-reducible-numbers-less-than-n/solutions/6028679/)

---

# Intuition
String length is atmost 800, so the total number of setBits can also be atmost 800, so why not preCompute the 'k' for each number upto 800 they would need.
`int setBits = __builtin_popcount(i);`
`cnt[i] = 1 + cnt[setBits];`

As now we have preComputed this, use digit Dp, to find out the number of solution.
`tight`: means that we have not gone below our inital string uptil now.
`setBits`: stores the count of setBits seen uptil now.
and return, 
`if (i == s.size()) return (tight || setBits == 0) ? 0 : cnt[setBits] < k;`



# Complexity
- Time complexity: O (n * 2 * n) `n = lenght of string` 


# Code
```cpp []
class Solution {
    vector<int> cnt;
    int k;
    const int mod = 1e9 + 7;
    int dp[801][2][801];

public:
    int solve(const string& s, int i, bool tight, int setBits) {
        if (i == s.size()) return (tight || setBits == 0) ? 0 : cnt[setBits] < k;
        if(dp[i][tight][setBits] != -1) return dp[i][tight][setBits];
        
        if (tight) {
            if (s[i] == '0') return solve(s, i + 1, true, setBits);
            
            int res = solve(s, i + 1, true, setBits + 1);
            res = (res + solve(s, i + 1, false, setBits)) % mod;
            return dp[i][tight][setBits] = res;
        }
        
        int res = solve(s, i + 1, false, setBits + 1);
        res = (res + solve(s, i + 1, false, setBits)) % mod;
        return dp[i][tight][setBits] = res;
    }

    int countKReducibleNumbers(std::string s, int k) {
        this->k = k;
        this->cnt = std::vector<int>(801, 0);
        memset(dp, -1, sizeof(dp));
        for (int i = 2; i <= 800; i++) {
            int setBits = __builtin_popcount(i);
            cnt[i] = 1 + cnt[setBits];
        }        
        return solve(s, 0, true, 0);        
    }
};

```