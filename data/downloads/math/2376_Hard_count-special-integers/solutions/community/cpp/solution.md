# DIGIT DP || BITMASK || C++ || EASY SOLUTION

**Author:** Jaskaran07
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-special-integers/solutions/3985028/](https://leetcode.com/problems/count-special-integers/solutions/3985028/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
private:
    int solve(int i,bool tight,int mask,bool leadingzero,string &temp,vector<vector<vector<vector<int>>>> &dp){
        if(i==temp.length()) return 1;
        if(dp[i][tight][mask][leadingzero]!=-1) return dp[i][tight][mask][leadingzero];
        int ans = 0;
        int limit = tight?(temp[i]-'0'):9;
        for(int ind = 0 ; ind <= limit ; ind++){
            if(mask&(1<<ind)){
                bool newtight = (ind==limit)?tight:false;
                bool newleadingzero = false;
                if(leadingzero && ind==0) newleadingzero = true;
                int newmask = mask;
                if(!newleadingzero){
                    newmask = mask^(1<<ind);
                }
                ans+=solve(i+1,newtight,newmask,newleadingzero,temp,dp);
            }
        }
        return dp[i][tight][mask][leadingzero]=ans;
    }
public:
    int countSpecialNumbers(int n) {
        int mask = (1<<10)-1;
        string temp = to_string(n);
        vector<vector<vector<vector<int>>>> dp(temp.length()+1,vector<vector<vector<int>>>(2,vector<vector<int>>(mask+1,vector<int>(2,-1))));
        return solve(0,true,mask,true,temp,dp)-1;
    }
};
```