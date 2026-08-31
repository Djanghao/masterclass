# Fermat's Little Theorem || Count Subtree || Math

**Author:** samahakal04
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/3412797/](https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/solutions/3412797/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
cnt = (n!)/(subtree(0) * subtree(1) * ... * subtree(n-1))\r
\r
ex : 1\r
for 0->1->2\r
subtree cnt = {3,2,1}\r
answer = (3!)/(3 * 2 * 1) = 6 / 6 = 1\r
\r
ex : 2\r
subtree cnt = {5,2,2,1,1}\r
answer = (5!)/(5*2*2*1*1) = 6\r
\r
\r
1/a = inv(a)%mod = (a^(mod-2))mod\r
\r
# Code\r
```\r
class Solution {\r
public:\r
    typedef long long ll;\r
    ll mod = 1e9+7;\r
    //  count of subtree\r
    ll dfs(vector<ll>&dp,vector<ll>adj[],ll ind){\r
        dp[ind] = 1;\r
        for(auto it : adj[ind]){\r
            dp[ind] += dfs(dp,adj,it);\r
        }\r
        return dp[ind];\r
    }\r
\r
    int waysToBuildRooms(vector<int>& arr) {\r
        ll n = arr.size();\r
        vector<ll>adj[n];\r
        for(ll i=0;i<n;i++){\r
            if(arr[i]==-1) continue;\r
            adj[arr[i]].push_back(i);\r
        }\r
\r
        vector<ll>dp(n,0);\r
        dfs(dp,adj,0);\r
\r
\r
        // calculation (fermat's little theorem)\r
\r
        auto powmod = [&](ll a, ll x){\r
            ll res = 1;\r
            while(x>0){\r
                if(x%2==1){\r
                    res = res*a;\r
                    res %= mod;\r
                    x--;\r
                }\r
                a = a*a;\r
                a %= mod;\r
                x/=2;\r
            }\r
            return res;\r
        };\r
\r
        auto inv = [&](ll a){\r
            return powmod(a,mod-2)%mod;\r
        };\r
\r
        auto fact = [&](ll a){\r
            ll res = 1;\r
            for(ll i=2;i<=a;i++){\r
                res *= i;\r
                res %= mod;\r
            }\r
            return res;\r
        };\r
\r
        ll res = fact(n);\r
        for(auto it : dp){\r
            res = res*inv(it);\r
            res %= mod;\r
        }\r
        return res;\r
    }\r
};\r
```\r
# upvote if it's help you HAPPY CODING :)