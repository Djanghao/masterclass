# [C++] For everyone who are scared of DP like me.

**Author:** ranjeetbansode
**Votes:** 10
**Link:** [https://leetcode.com/problems/count-number-of-texts/solutions/2018536/](https://leetcode.com/problems/count-number-of-texts/solutions/2018536/)

---

* So I experimented with `2`, `22`, `222` and realised that for `2222` the answer is the sum of previous 3 and this goes on.
* Now after doing this I was stuck thinking all the numbers have 3 letters but for `7` and `9`, the story is different since they have 4 letters.
* So I experimented **again** with `9`, `99`, `999`, `9999` and realised that for `99999` the answer is the sum of previous 4 and this goes on.
* And Boom **AC**.

`//Experiment part`
Why we do `dp[n] = dp[n-1] + dp[n-2] + dp[n-3]` ?
Because we have 3 options,
Lets take example of `22222`.

`22222` = `2|2222` + `22|222` + `222|22`.
Basically we select the first (1-3) numbers and rest are already calculated.
**Note:** we can't have a combination like this `2222|2` since four 2's don't make any combination(in case of 2 but in case of 7 and 9 its does and therefore the summation goes till `dp[n-4]` there).

```
const int mod = 1e9 + 7;
const int mxx = 1e5 + 1;
#define ll long long
class Solution {
public:
    vector<int> a, b;
    
    Solution()
    {
        a.resize(mxx, 0);
        a[1] = 1;
        a[2] = 2;
        a[3] = 4;
        
        for(int i=4; i<=1e5; i++)
        {
            a[i] = ((a[i-1] + a[i-2]) % mod + a[i-3]) % mod;
        }
        
        b.resize(mxx, 0);
        b[1] = 1;
        b[2] = 2;
        b[3] = 4;
        b[4] = 8;
        
        for(int i=5; i<=1e5; i++)
        {
            b[i] = ((((b[i-1] + b[i-2]) % mod + b[i-3]) % mod) + b[i-4]) % mod;
        }
    }
    
    int countTexts(string s) {
        int n = s.size();
        int ans = 1;
        
        int cnt = 1;
        int i = 0;
        while(i+1 < n)
        {
            while(i+1 < n && s[i] == s[i+1]) 
            {
                cnt++;
                i++;
            }
            // cout << a[cnt] << " ";
            if(s[i] != '7' && s[i] != '9')
                ans = ((ll)ans * (ll)a[cnt]) % mod;
            else
                ans = ((ll)ans * (ll)b[cnt]) % mod;
            
            cnt = 1;
            i++;
        }
        return ans;
    }
};
```

Actually the `experimented` part is something which is really hard for me explain. Do some experiment on your own and maybe it will click.