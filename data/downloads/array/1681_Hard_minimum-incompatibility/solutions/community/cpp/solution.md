# C++ ||  Complete Explanation, with comments

**Author:** slower-master
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-incompatibility/solutions/4651325/](https://leetcode.com/problems/minimum-incompatibility/solutions/4651325/)

---


```
class Solution {
public:
    int func(int mask, vector<int> &ValidPermutations, map<int,int> &ValidPValues,vector<int>&dp){
        if(mask == 0){. // if all elements of numbers is covered
            return 0; 
        }
        if(dp[mask] != -1){
            return dp[mask]; // this is dp step
        }
        int ans = INT_MAX/2;
        for(auto it : ValidPermutations){
            if((mask & it) == it){ // wether we can take this permutation
                int ans1 = func(mask^it,ValidPermutations,ValidPValues,dp); // here we removed this mask such that other permutation can't take common elements
                ans = min(ans,ans1 + ValidPValues[it]);
            }
        }
        return dp[mask] = ans; // dp step
    }
    int minimumIncompatibility(vector<int>& nums, int k) {
        // first will check simple condition for not possible cases
        int n  = nums.size();
        if(n%k != 0){
            return -1;
        }
        int cnt = n/k;

        vector<int> ValidPermutations; // to keep track of valid permutations
        map<int,int> ValidPValues; // to keep track of valid permutation value

        // there can be 2^n permutations as every element has two options
        // now we are going to check which permutations are valid according to given codition
        for(int i = 1;i < (1<<n);i++){
            int count = 0;
            int mn = INT_MAX; // minimum element which is in this permutation
            int mx = INT_MIN; // maximum element which is in this permutation

            set<int> st; // to keep track of repeated elements
            bool isRepeat = false;
            for(int j = 0;j < n;j++){// itrate on all array elements
                int mask = 1 << j; // here we are checking this number is in mask or not
                if(mask & i){
                    if(st.find(nums[j])  != st.end()){// in this permutation there is element which is repeating
                        isRepeat = true;
                        break;
                    }
                    count ++;
                    if(count > cnt){
                        break;
                    }
                    mn = min(mn,nums[j]);
                    mx = max(mx,nums[j]);
                    st.insert(nums[j]);
                }
            }
            if(count != cnt){ // if it don't pass the count condition
                continue;
            }
            if(isRepeat == false){ // if pass the repatation condtion then will save permutation in validPermutations
                if(mx == INT_MIN || mn == INT_MAX){
                    continue;
                }
                ValidPermutations.push_back(i);
                ValidPValues[i] = mx-mn;
            }

        }
        vector<int>dp(1<<n,-1);
        int ans = func((1<<n) -1,ValidPermutations,ValidPValues,dp);
        if(ans >= INT_MAX/2){
            return -1;
        }
        return ans;

    }
};
```