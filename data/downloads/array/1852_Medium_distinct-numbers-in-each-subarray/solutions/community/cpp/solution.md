# C++ | Python | Fixed Sliding Window Size | Hash Table

**Author:** wang_beginner
**Votes:** 1
**Link:** [https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/4766039/](https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/4766039/)

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

# C++ Code
```
class Solution {
public:
    vector<int> distinctNumbers(vector<int>& nums, int k) {
        unordered_map<int, int> mp;
        vector<int> res;
        for (int r = 0, l = 0; r < nums.size(); r++) {
            mp[nums[r]]++;
            if (r - l + 1 == k) {
                res.push_back(mp.size());
                if (--mp[nums[l]] == 0) {
                    mp.erase(nums[l]);
                }
                l++;
            }
        }
        return res;
    }
};
```

# Python Code
```
class Solution:
    def distinctNumbers(self, nums: List[int], k: int) -> List[int]:
        dic, res, l = {}, [], 0
        for r in range(len(nums)):
            dic[nums[r]] = dic.get(nums[r], 0) + 1
            if r - l + 1 == k:
                res.append(len(dic))
                dic[nums[l]] -= 1
                if dic[nums[l]] == 0:
                    del dic[nums[l]]
                l += 1
        return res
```