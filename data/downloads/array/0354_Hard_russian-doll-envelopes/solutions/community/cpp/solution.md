# The best answer your'e looking for. RECURSION|MEMOIZATION|TABULATION|1D OPTIMIZATION| BINARY SEARCH

**Author:** Akashsb
**Votes:** 42
**Link:** [https://leetcode.com/problems/russian-doll-envelopes/solutions/3218424/](https://leetcode.com/problems/russian-doll-envelopes/solutions/3218424/)

---

# Recursion (gives TLE at test 57)
```
class Solution {
public:
    int f(int curr,int prev,vector<vector<int>>& envelopes){
        if(curr==envelopes.size()){
            return 0;
        }
        int notTake=0+f(curr+1,prev,envelopes);
        int take=-1e9;
        if(prev==-1 or (envelopes[prev][0]<envelopes[curr][0] and envelopes[prev][1]     <envelopes[curr][1])){
                take=1+f(curr+1,curr,envelopes);
        }
        return max(take,notTake);
    }
    int maxEnvelopes(vector<vector<int>>& envelopes) {
        sort(envelopes.begin(),envelopes.end());
        return f(0,-1,envelopes);
    }
};
```

# Memoization (gives TLE at test 83)
```
class Solution {
public:
    int f(int curr,int prev,vector<vector<int>>& envelopes,vector<vector<int>> &dp){
        if(curr==envelopes.size()){
            return 0;
        }
        if(dp[curr][prev+1]!=-1){
            return dp[curr][prev+1];
        }
        int notTake=0+f(curr+1,prev,envelopes,dp);
        int take=-1e9;
        if(prev==-1 or (envelopes[prev][0]<envelopes[curr][0] and envelopes[prev][1]     <envelopes[curr][1])){
                take=1+f(curr+1,curr,envelopes,dp);
        }
        return dp[curr][prev+1]=max(take,notTake);
    }
    int maxEnvelopes(vector<vector<int>>& envelopes) {
        sort(envelopes.begin(),envelopes.end());
        int n=envelopes.size();
        vector<vector<int>> dp(n+1,vector<int>(n+1,-1));
        return f(0,-1,envelopes,dp);
    }
};
```

# Tabulation (gives TLE at test 85)
```
class Solution {
public:
    int maxEnvelopes(vector<vector<int>>& envelopes) {
        sort(envelopes.begin(),envelopes.end());
        int n=envelopes.size();
        vector<vector<int>> dp(n+1,vector<int>(n+1,0));
        for(int curr=n-1;curr>=0;curr--){
            for(int prev=curr-1;prev>=-1;prev--){
                int notTake=0+dp[curr+1][prev+1];
                int take=-1e9;
                if(prev==-1 or (envelopes[prev][0]<envelopes[curr][0] and envelopes[prev][1]<envelopes[curr][1])){
                        take=1+dp[curr+1][curr+1];
                }
             dp[curr][prev+1]=max(take,notTake); 
            }
        }
        return dp[0][0];
          
    }
};
```

# 1D array optimization (gives TLE at test 85)
```
class Solution {
public:
    int maxEnvelopes(vector<vector<int>>& envelopes) {
        sort(envelopes.begin(),envelopes.end());
        int n=envelopes.size();
        vector<int>next(n+1,0),currr(n+1,0);
        for(int curr=n-1;curr>=0;curr--){
            for(int prev=curr-1;prev>=-1;prev--){
                int notTake=0+next[prev+1];
                int take=-1e9;
                if(prev==-1 or (envelopes[prev][0]<envelopes[curr][0] and envelopes[prev][1]<envelopes[curr][1])){
                        take=1+next[curr+1];
                }
             currr[prev+1]=max(take,notTake); 
            }
            next=currr;
        }
        return currr[-1+1];
    }
};
```

# Binary Search (Final asnwer)
```
class Solution {
public:
    static bool comp(vector<int> &a,vector<int>&b){
        if(a[0]==b[0]){
            return a[1]>b[1];
        }
        else{
            return a[0]<b[0];
        }
    }
    int maxEnvelopes(vector<vector<int>>& envelopes) {
        sort(envelopes.begin(),envelopes.end(),comp);
        vector<int> temp;
        temp.push_back(envelopes[0][1]);
        for(int i=1;i<envelopes.size();i++){
            if(temp.back()<envelopes[i][1]){
                temp.push_back(envelopes[i][1]);
            }
            else{
                auto ind=lower_bound(temp.begin(),temp.end(),envelopes[i][1])-temp.begin();
                temp[ind]=envelopes[i][1];
            }
        }
        return temp.size();
    }
};
```