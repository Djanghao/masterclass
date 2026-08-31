# C++ || Easy Without Map/Set || SC: O(1) , TC: O(nlogn)

**Author:** theomkumar
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/2530016/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/2530016/)

---

```
bool findSubarrays(vector<int>& nums) {
        int n = nums.size();
        
        if (nums.size() <= 2)
            return false;
        
        for (int i = 1; i < n; i++)
        {
            int sum = nums[i-1] + nums[i];
            nums[i-1] = sum;
        }
        nums.pop_back();
        sort (nums.begin(), nums.end());
        
        for (int i = 1; i < nums.size(); i++)
        {
            if (nums[i-1] == nums[i])
                return true;
        }
        return false;
    }
```