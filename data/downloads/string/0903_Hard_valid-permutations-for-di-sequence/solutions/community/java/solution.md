# ✅Easiest Approach || RECURSIVE -> MEMOIZATION || Jai Shree Ram🚩🚩

**Author:** vermayugam_29
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/5085134/](https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/5085134/)

---

# Approach and Intuition
- Visualising all the possible permuations and returning only valid ones
- Taking a prev value which checks the prev value taken , now if prev is -1 this means we can taking any integer .
- If `s[i] == 'I'` then we need to take only that element which is not visited yet and is `> than prev` one and vice versa for `s[i] == 'D'`.
- Our base case tells whether valid permutation is formed or not.
- We have taken bool vis array because while one recursive call we do not want to repeat same elements and so we are marking vis elements and `backtracking` vis elements as not visited.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(N^3)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N^2)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# RECURSIVE (TLE)
```JAVA []
class Solution {
    boolean[] vis;
    int mod = (int)1e9+7;
    public int numPermsDISequence(String s) {
        vis = new boolean[s.length()+2];
        return solve(s,0,-1);
    }
    private int solve(String s,int idx,int prev){
        if(idx >= s.length()){
            return 1;
        }

        int cnt = 0;
        for(int i=0;i<=s.length();i++){
            if(!vis[i]){
                vis[i] = true;
                if(prev == -1){
                    cnt = (cnt + solve(s,idx,i)) % mod;
                } else if((s.charAt(idx) == 'D' && i < prev) 
                    || s.charAt(idx) == 'I' && i > prev){
                    cnt = (cnt + solve(s,idx+1,i)) % mod;
                }
                vis[i] = false;
            }
        }

        return cnt;
    }
}
```
```C++ []
class Solution {
public:
    vector<bool> vis;
    int mod = (int)1e9+7;
    int n;
    int solve(string s,int idx,int prev){
        if(idx >= n){
            return 1;
        }

        int cnt = 0;
        for(int i=0;i<=n;i++){
            if(!vis[i]){
                vis[i] = true;
                if(prev == -1){
                    cnt = (cnt + solve(s,idx,i)) % mod;
                } else if((s[idx] == 'D' && i < prev) 
                    || s[idx] == 'I' && i > prev){
                        
                    cnt = (cnt + solve(s,idx+1,i)) % mod;
                }
                vis[i] = false;
            }
        }

        return cnt;
    }
    int numPermsDISequence(string s) {
        n = s.size();
        vis = vector<bool> (n + 2 , false);
        return solve(s,0,-1);
    }
};
```
```Python []
class Solution:
    def __init__(self):
        self.vis = []
        self.mod = int(1e9 + 7)
        self.n = 0

    def solve(self, s, idx, prev):
        if idx >= self.n:
            return 1

        cnt = 0
        for i in range(self.n + 1):
            if not self.vis[i]:
                self.vis[i] = True
                if prev == -1 or (s[idx] == 'D' and i < prev) or (s[idx] == 'I' and i > prev):
                    cnt = (cnt + self.solve(s, idx + 1, i)) % self.mod
                self.vis[i] = False

        return cnt

    def numPermsDISequence(self, s: str) -> int:
        self.n = len(s)
        self.vis = [False] * (self.n + 2)
        return self.solve(s, 0, -1)

```

# MEMOIZATION
```JAVA []
class Solution {
    boolean[] vis;
    Integer[][] memo;
    int mod = (int)1e9+7;
    public int numPermsDISequence(String s) {
        vis = new boolean[s.length()+2];
        memo = new Integer[s.length()][s.length()+3];
        return solve(s,0,-1);
    }
    private int solve(String s,int idx,int prev){
        if(idx >= s.length()){
            return 1;
        } else if(memo[idx][prev+1] != null){
            return memo[idx][prev+1];
        }

        int cnt = 0;
        for(int i=0;i<=s.length();i++){
            if(!vis[i]){
                vis[i] = true;
                if(prev == -1){
                    cnt = (cnt + solve(s,idx,i)) % mod;
                } else if((s.charAt(idx) == 'D' && i < prev) 
                    || s.charAt(idx) == 'I' && i > prev){
                        
                    cnt = (cnt + solve(s,idx+1,i)) % mod;
                }
                vis[i] = false;
            }
        }

        return memo[idx][prev+1] = cnt;
    }
}
```
```C++ []
class Solution {
public:
    vector<bool> vis;
    vector<vector<int>> dp;
    int mod = (int)1e9+7;
    int n;
    int solve(string s,int idx,int prev){
        if(idx >= n){
            return 1;
        } if(dp[idx][prev+1] != -1){
            return dp[idx][prev+1];
        }

        int cnt = 0;
        for(int i=0;i<=n;i++){
            if(!vis[i]){
                vis[i] = true;
                if(prev == -1){
                    cnt = (cnt + solve(s,idx,i)) % mod;
                } else if((s[idx] == 'D' && i < prev) 
                    || s[idx] == 'I' && i > prev){
                        
                    cnt = (cnt + solve(s,idx+1,i)) % mod;
                }
                vis[i] = false;
            }
        }

        return dp[idx][prev+1] = cnt;
    }
    int numPermsDISequence(string s) {
        n = s.size();
        vis = vector<bool> (n + 2 , false);
        dp = vector<vector<int>> (n + 1 , vector<int>(n + 3, -1));
        return solve(s,0,-1);
    }
};
```
```Python []
class Solution:
    def numPermsDISequence(self, s: str) -> int:
        memo = {}
        vis = [False] * (len(s) + 2)
        mod = 10**9 + 7

        def solve(idx, prev):
            if idx >= len(s):
                return 1
            if (idx, prev) in memo:
                return memo[(idx, prev)]

            cnt = 0
            for i in range(len(s) + 1):
                if not vis[i]:
                    vis[i] = True
                    if prev == -1 or (s[idx] == 'D' and i < prev) or (s[idx] == 'I' and i > prev):
                        cnt = (cnt + solve(idx + 1, i)) % mod
                    vis[i] = False

            memo[(idx, prev)] = cnt
            return cnt

        return solve(0, -1)

```

