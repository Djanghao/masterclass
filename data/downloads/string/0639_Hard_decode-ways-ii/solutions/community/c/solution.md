# DP is easy | c++ | Memoization is life saver

**Author:** shourabhpayal
**Votes:** 36
**Link:** [https://leetcode.com/problems/decode-ways-ii/solutions/1083417/](https://leetcode.com/problems/decode-ways-ii/solutions/1083417/)

---

**WARNING**: This will not be a tabulated, perfectly optimized DP solution. We have enough of those.

**Inspiration**: (Optional) Go through this to get idea of approach [Target Sum discussion](https://leetcode.com/problems/target-sum/discuss/455024/DP-IS-EASY!-5-Steps-to-Think-Through-DP-Questions)

This solution builds on top of a simpler problem where we don't have '*'. [Leetcode 91](https://leetcode.com/problems/decode-ways/discuss/1082132/dp-is-easy-c-a-good-question-to-understand-memoization). I highly recommend you  solve it first.

**Idea :**
pos is index in the array. We start with 0 index from left side.
Just think about all cases in reccursion and you will be done. Don't stress too much.
```
typedef long long ll;

class Solution {
public:
    ll m = 1e9+7;
    string s;
    
    ll dp[100001];
    
    int numDecodings(string &S) {
        s = S;
        for(int i = 0 ; i <= s.size(); i++){
            dp[i] = -1;
        }
        ll ans = help(0);
        return ans;
    }
    
    ll help(int pos){
        //we have reached the end. It is a possible decoding.
        if(pos >= s.size()){
            return 1;
        }
        
        //check cache
        if(dp[pos] != -1) return dp[pos];
        
        //no decoding is possible if current char is 0
        if(s[pos] == '0'){
            return dp[pos] = 0;
        }
        
        //decode normally considering the current char to be anything 1-9 or *
        ll ans = help(pos+1);
        if(s[pos] == '*'){
            //if current char is * it can take values from 1-9 therefore multiply by 9
            ans *= 9;
            
            //consider current * as 1
            //next char is 0-9
            if(pos+1 < s.size() && s[pos+1] >= '0' && s[pos+1] <= '9'){
                ans += help(pos+2);
            }
            //next char is *
            if(pos+1 < s.size() && s[pos+1] == '*'){
                ans += 9*help(pos+2);
            }
            
            //consider current * as 2
            //next char is 0-6
            if(pos+1 < s.size() && s[pos+1] >= '0' && s[pos+1] <= '6'){
                ans += help(pos+2);
            }
            
            //next char is *
            if(pos+1 < s.size() && s[pos+1] == '*'){
                ans = ans + (6*help(pos+2));
            }
        }
        else if(s[pos] == '1' && pos+1 < s.size()){
            //next char is 0-9
            if(s[pos+1] >= '0' && s[pos+1] <= '9'){
                ans += help(pos+2);
            }
            //next char is *
            else if(s[pos+1] == '*'){
                ans += 9*help(pos+2);
            }
        }
        else if(s[pos] == '2' && pos+1 < s.size()){
            //next char is 0-6
            if(s[pos+1] >= '0' && s[pos+1] <= '6'){
                ans += help(pos+2);
            }
            //next char is *
            else if(s[pos+1] == '*'){
                ans += 6*help(pos+2);
            }
        }
        
        //perform mod as and can be large (as given in question)
        ans = ans % m;
        
        //I will remember this result and return the result
        return dp[pos] = ans;
    }
};
```

Please stop posting 4-5 lines of tabulated solutions **without explanations**.
Thanks