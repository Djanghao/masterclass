# [C++] Beats 100% Subs in Time :)

**Author:** applefanboi
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/783391/](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/783391/)

---

```
int maxNonOverlapping(vector<int>& nums, int target) {
        int res = 0;
        int endIndex = -1;
        int sum = 0;
        unordered_map<int,int> map;
        map[0] = 0;
        for(int i = 1; i <= nums.size(); i++){
            sum += nums[i - 1];
            if(map.count(sum - target)){
                int index = map[sum - target];
                if(index >= endIndex){
                    res++;
                    endIndex = i;
                }
            }
            map[sum] = i;
        }
        return res;
    }
```