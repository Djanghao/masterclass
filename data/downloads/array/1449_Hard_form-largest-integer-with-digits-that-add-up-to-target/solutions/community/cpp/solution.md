# DP Solution C++

**Author:** peeyushbh1998
**Votes:** 4
**Link:** [https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/646959/](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/646959/)

---

```
class Solution {
public:
    string maxi(string a,string b){
        if(a.size()>b.size()){
            return a;
        }
        else if(a.size()<b.size()){
            return b;
        }
        else{
            if(a>b){
                return a;
            }
            return b;
        }
        return "";
    }
    string largestNumber(vector<int>& cost, int target) {
        unordered_map<int,map<int,string> > dp;
        for(int i=0;i<=target;i++){
            for(int j=0;j<=9;j++){
                if(i==0){
                    dp[i][j]="";
                }
                else if(j==0){
                    dp[i][j]="0";
                }
                else if(cost[j-1]<=i && dp[i-cost[j-1]][j]!="0"){
                    dp[i][j]=maxi(to_string(j)+dp[i-cost[j-1]][j],dp[i][j-1]);
                }
                else{
                    dp[i][j]=dp[i][j-1];
                }
            }
        }
        return dp[target][9];
    }
};
```