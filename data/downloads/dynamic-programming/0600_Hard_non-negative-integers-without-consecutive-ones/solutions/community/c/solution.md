# Easy to understand || Digit Dp || Recursion + Memoization

**Author:** Sahil_khatri
**Votes:** 7
**Link:** [https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/2208229/](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/solutions/2208229/)

---

```
//recursive (TLE)
class Solution {
    int get(string &s, int idx, bool small, int prev){
        if(idx == s.size())return 1;
        
        int limit;
        if(small) limit = 1;
        else limit = s[idx]-'0';
        
        int ans = 0;
        for(int i = 0; i <= limit; i++){
          bool nsmall = small;
          if(i < limit) nsmall = true;
          if(prev != 1 || i != 1){
              ans += get(s, idx + 1, nsmall, i);
          }
        }
        return ans;
    }
public:
    int findIntegers(int n) {
        string s;
        while(n != 0){
            int rem = n % 2;
            s += rem + '0';
            n = n / 2;
        }
        reverse(s.begin(),s.end());
        return get(s,0,false,0);
    }
};

//memo (Accepted)
class Solution {
    int dp[32][2][2];
    int get(string &s, int idx, bool small, int prev){
        if(idx == s.size())return 1;
        if(dp[idx][small][prev] != -1)return dp[idx][small][prev];
        
        int limit;
        if(small) limit = 1;
        else limit = s[idx]-'0';
        
        int ans = 0;
        for(int i = 0; i <= limit; i++){
            bool nsmall = small;
            if(i < limit) nsmall = true;
            
            if(prev != 1 || i != 1){
                ans += get(s, idx + 1, nsmall, i);
            }
        }
        return dp[idx][small][prev] = ans;
    }
public:
    int findIntegers(int n) {
        string s;
        while(n != 0){
            int rem = n % 2;
            s += rem + '0';
            n = n / 2;
        }
        
        memset(dp, -1, sizeof dp);
        reverse(s.begin(),s.end());
        return get(s,0,false,0);
    }
};
```