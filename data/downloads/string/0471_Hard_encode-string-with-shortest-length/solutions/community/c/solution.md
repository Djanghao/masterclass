# C++ Solution

**Author:** Anurag1
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-string-with-shortest-length/solutions/1950478/](https://leetcode.com/problems/encode-string-with-shortest-length/solutions/1950478/)

---

When can you reduce the length of string encoding? When there are repetitions on the same substring conscutively in the string.

e.g. aaaaab can be reduced to 5[a]b only because a's were repeated.

So dp should consider this. Going from left to right does not help as you can choose to reduce arr[3..5] or arr[1..3]. You don't know in advance. So you create dp[l][r].

dp[l][r] = encoding string with min length.

to create dp[l][r] we need to see how much can we reduce str[l..r]. We said earlier that we can only reduce a string if there are substrings repeated, but how do we check this condition? What should be the length of substring? It is again not known in advance so we need to iterate over all lengths.

```
for len = 1 to r-l+1:
	k = getCountOfSameSubstringsAsStr[l..l+len-1]()  
	// E.g. in aaaaaa with l=0 and len=1, k would be 5. and with l=1 and len=1 k would be 4
	string str = k + "[" + dp[l][l+len-1] + "]" + dp[m][r]
	// notice we take string str[l..l+len-1]'s dp only as that is repeated k times
	// m is the index where the repitition stops(e.g. aaaaaa l=0, len=1, m=6)
```

C++ Solution:
```
class Solution {
    string toString(int n) {
        string str;
        while (n > 0) {
            str.push_back(n%10 + '0');
            n/=10;
        }
        reverse(str.begin(), str.end());
        return str;
    }
    bool compare(string &s, int i, int j, int len) {
        int n = s.size();
        if (j + len > n) return false;
        int cnt = 0;
        while (cnt < len && s[i+cnt] == s[j+cnt]) {
            ++cnt;
        }
        return cnt == len;
    }
    string calc(vector<vector<string>> &dp, string &s, int l, int r) {
        if (l > r) return "";
        if (l == r) return string(1, s[l]);
        if (dp[l][r] != "-") return dp[l][r];
        int L = r-l+1;
        dp[l][r] = s.substr(l, r-l+1);
        for (int len = 1; len <= L; len++) {
            int m, k = 1;
            for (m = l+len; m <= r && compare(s,l,m,len); m+=len, k++) {
                calcDP(dp,k,l,len,m,r,s);
            }
            calcDP(dp,k,l,len,m,r,s);
        }
        return dp[l][r];
    }
    void calcDP(vector<vector<string>> &dp, int k, int l, int len, int m, int r, string &s) {
        {
            string str = toString(k) + "[" + calc(dp,s,l,l+len-1) + "]" + calc(dp,s,m,r);
            if (dp[l][r].size() > str.size()) {
                dp[l][r] = str;
            }
        }
        {
            string str = s.substr(l,m-l) + calc(dp,s,m,r);
            if (dp[l][r].size() > str.size()) {
                dp[l][r] = str;
            }
        }
    }
public:
    string encode(string s) {
        int n = s.size();
        vector<vector<string>> dp(n, vector<string>(n,"-"));
        return calc(dp, s, 0, n-1);
    }
};
```