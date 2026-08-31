# ✅✅ | C++ | MAP as DP | Knapsack Solution With Crisp Explanation

**Author:** bhaskar_op
**Votes:** 20
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/3158993/](https://leetcode.com/problems/shopping-offers/solutions/3158993/)

---

# Intuition
Intuition is pretty simple. We will try to pick each offer or skip it.

# Approach
Start with `0th` index. At each index of offers we have two choice. Either we use that offer or we don't use that.

- `Choice: 1` First check if we can use that offer if we can then pick that offer present on that index and stay on that index because we can use a offer any number of times.

- `Choice: 2` Don't use that offer and move to next offer to do the same. 

# UPVOTE PLEASEEEEEEEEE :)

# Code
```
class Solution {
private:
    int ex(int ind, vector<int> ds, vector<int> &price, vector<vector<int>> &offer, vector<int> &need,  map<int,map<vector<int>,int>> &dp){
        if(ind==offer.size()){
            int tot=0;
            for(int i=0; i<need.size(); i++){
                tot+=(need[i]-ds[i])*price[i];
            }
            return tot;
        }
        
        if(dp.find(ind)!=dp.end() && dp[ind].find(ds)!=dp[ind].end()){
            return dp[ind][ds];
        }

        int offer_notTake=ex(ind+1,ds,price,offer,need,dp);

        int offer_take=1e9;
        vector<int> copyDS=ds;

        for(int i=0; i<need.size(); i++){
            if(copyDS[i]+offer[ind][i]<=need[i]){
                copyDS[i]+=offer[ind][i];
            }else{
                return dp[ind][ds]=min(offer_notTake,offer_take);
            }
        }
        offer_take=offer[ind][price.size()]+ex(ind,copyDS,price,offer,need,dp);

        return dp[ind][ds]=min(offer_notTake,offer_take); 
    }

public:
    int shoppingOffers(vector<int>& price, vector<vector<int>>& offer, vector<int>& need) {
        map<int,map<vector<int>,int>> dp;
        vector<int> ds(need.size(),0);
        return ex(0,ds,price,offer,need,dp);
    }
};
```