# Segment Tree + DP | C++

**Author:** lukewu28
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/2649041/](https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/2649041/)

---

# Intuition
First, we see that this is a simple max dp. However, the hard part is doing string comparison faster than O(n).

# Approach
First, we initialize `dp` and $n/2$ segment trees for each substring length.
Then, notice:
1. In order to delete substring $$s[i...i+d-1]$$ for some length $d$, we need to have $$s[j] = s[j+d]$$ for all $$j$$ in $$\\{i,i+1, ...,i+d-1\\}$$
2. We can precompute for all pairs $$(i,d)$$ if $$s[i]=s[i+d]$$ in $$O(n^2)$$
3. Then we can use a segment tree to query if all indexes from $$i$$ to $$j$$ are valid in $$log(n)$$.

Finally, do a normal dp with segtree query.
# Complexity
- Time complexity:
$$O(n^2log(n))$$

- Space complexity:
$$O(n^2)$$

# Code
```
class Solution {
public:
    int n;
    bool query(bool* t, int l, int r){
        bool res = 1;
		for(l+=n, r+=n; l < r; l>>=1, r>>=1){
			if(l&1) res &= t[l++];
			if(r&1) res &= t[--r];
		}
		return res;
    }
    int deleteString(string s) {
        n = s.size();
        int dp[4001];
        bool valid[2001][8000] = {};
        for(int i = 0; i < n +1 ;i ++) dp[i] = 0;
        for(int d = 1; d <= n/2; d++){
            for(int i =0; i < 2*n; i++){
                valid[d][i] = 0;
            }
        }
        for(int d = 1; d <= n/2; d++){
            for(int i =0; i < n-d; i++){
                if(s[i] == s[i+d]) valid[d][i+n] = 1;
            }
        }
        for(int d = 1; d <= n/2; d++){
            for(int i = n-1; i > 0; i--){
                valid[d][i] = valid[d][i<<1] & valid[d][i<<1|1];
            }
        }
        
        for(int i = 1; i < n+1; i++){ 
            for(int j = 0; j < i; j++){
                if(i-j > n/2) continue;
                if((dp[j] != 0 || j == 0) && query(valid[i-j], j, i)) dp[i] = max(dp[i], dp[j] + 1);
            }
        }
        int re = 0;
        for(int i = 0; i < n; i++){
            re = max(re, dp[i] + 1);
        }
        return max(dp[n], re);
    }
};
```