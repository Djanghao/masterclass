# Easy to understand C++ solution using TOP-DOWN approach with memoization

**Author:** amritanshu7
**Votes:** 6
**Link:** [https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/649471/](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/649471/)

---

```
class Solution {
public:
    string cal(vector<int>&v,int sum,unordered_map<int,string>&dp){
        if(sum<0)       
            return "0";
        
        if(sum==0)
            return "";
        
        if(dp.count(sum)>0)
            return dp[sum];
        
        string curr,res="0";
        for(int d=1;d<=9;d++){
            curr=cal(v,sum-v[d-1],dp);
            if(curr=="0")       // skip if can't solve sub-problem
                continue;
            curr=to_string(d)+curr;
            if(res.length()<=curr.length())
                res=curr;
        }
        dp[sum]=res;
        return res;
    }
    string largestNumber(vector<int>&v,int s){
        unordered_map<int,string>dp;
        return cal(v,s,dp);
    }
};
```