# Sweep Line+Prefix Sums

**Author:** itshimashis
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/3778158/](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/3778158/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
BY reading the Question only it is easy to deduce that we have to find such a permutation in which the given request sequence sum is maximized. So why not calculate which indexes are appearing most number of times and just put the highest values in that indexes. As simple as that

# Approach
<!-- Describe your approach to solving the problem. -->
We are using Line Sweep algorithm to find out which indexes are appearing the most number of times. and then for the highest number of appearance we are taking the highest number to put there. Basically instead of calculating from the requests we are directly calculating the corresponding contributions and summing them up.
But we have to take care of the INTEGER OVERFLOW cause that can cause an issue. so it is better to start of with long long variables to avoid problems later.$$O(n)$$

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class Solution {
public:
    int maxSumRangeQuery(vector<int>& nums, vector<vector<int>>& req) {
        vector<int>v(nums.size(),0);
        //try calculating which indexes contribute the most to the ans
        for(int i=0;i<req.size();i++){
            v[req[i][0]]++;
           if(req[i][1]+1<nums.size()) v[req[i][1]+1]--;
        }
        for(int i=0;i<v.size()-1;i++){
            v[i+1]+=v[i];
        }
        //now we have got which index is appearing how many times
        vector<pair<long long int,int>>vp;
        int p=0;
        for(auto &it:v){
            vp.push_back({it,p});
            p++;
        }
        sort(vp.begin(),vp.end());
        sort(nums.begin(),nums.end());
        vector<int>newv(nums.size());
        long long int ans=0;
        long long int ans1=0;
        for(int i=vp.size()-1;i>=0;--i){
            newv[vp[i].second]=nums[i];
            long long int temp=vp[i].first*nums[i];
            ans1=(ans1+temp)%1000000007;
        }
    
        return ans1;

    }
};
```