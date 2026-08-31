# C++ Simple and Short Solution, With Explanation

**Author:** YehudisK
**Votes:** 19
**Link:** [https://leetcode.com/problems/make-sum-divisible-by-p/solutions/1458060/](https://leetcode.com/problems/make-sum-divisible-by-p/solutions/1458060/)

---

**Idea:**
We need the sum % p to be zero. So we have to remove the remainder of sum / p.
In `need_to_remove` we calculte the amount we need to remove from the array.
Now, we keep a map which holds a remainder as a key and the latest index for that remainder in a prefix sum as a value. `{remainder -> index of latest}`.
To find a contiguous subarray using prefix sum, at each point we save our current prefix sum in `tmp` and look if we previously saw a prefix sum that if we subtract from our current one we will get our desired sum - `tmp - need_to_remove`. (we add `p` to avoid problems with negative results).

**Why does it work?**
For example, on regular subarray sum: 
array = [1,2,3,4,5], desired subarray sum = 7
in each iterstion we keep in map the current running sum, so we have: 
1 -> 0, 3 -> 1, 6 -> 2, 10 -> 3
when we get to this point, and we look in the map for `curr - desired` = `10 - 7 = 3`, we will find it in index 1 and we have a result.

**Time Complexity:** O(n)
**Space Complexity:** O(n)
```
class Solution {
public:
    int minSubarray(vector<int>& nums, int p) {
        int tmp = 0, res = nums.size(), need_to_remove = 0;
        for (auto num : nums) need_to_remove = (need_to_remove + num) % p;
        if (need_to_remove == 0) return 0;
        
        unordered_map<int, int> pre_sum;
        pre_sum[0] = -1;
        
        for (int i = 0; i < nums.size(); i++) {
            tmp = (tmp + nums[i]) % p;
            pre_sum[tmp] = i;
            int rest = (tmp - need_to_remove + p) % p;
            
            if (pre_sum.find(rest) != pre_sum.end()) res = min(res, i - pre_sum[rest]);
        }
        return res >= nums.size() ? -1 : res;
    }
};
```
**Like it? please upvote!**