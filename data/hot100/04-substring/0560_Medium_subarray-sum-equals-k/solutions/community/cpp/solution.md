# C++ Easy solution prefix sum map easy-understanding hashmap

**Author:** 123_tripathi
**Votes:** 562
**Link:** [https://leetcode.com/problems/subarray-sum-equals-k/solutions/1760146/](https://leetcode.com/problems/subarray-sum-equals-k/solutions/1760146/)

---

```
//PLEASE UPVOTE IF YOU LIKE MY SOLUTION  :)
int subarraySum(vector<int>& nums, int k) {
        unordered_map<int,int> mp;
        int sum=0,ans=0;
        mp[sum] = 1;
        for(auto it:nums){
            sum += it;
            int find = sum - k;
            if(mp.find(find) != mp.end()){
                ans += mp[find];
            }
            mp[sum]++;
        }
        return ans;
//PLEASE UPVOTE IF YOU LIKE MY SOLUTION  :)
    }
```