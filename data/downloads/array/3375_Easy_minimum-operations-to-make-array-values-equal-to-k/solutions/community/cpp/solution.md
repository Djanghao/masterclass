# O(N) | Clean Code | unordered_map

**Author:** fake_name
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6123295/](https://leetcode.com/problems/minimum-operations-to-make-array-values-equal-to-k/solutions/6123295/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Key Points:
- If any value in nums is **less than k, then answer is -1.**
- Otherwise, answer will be total number of distinct values in nums. 
- There is catch, we k is present is nums, then we n**eed not** to convert it, hence we can ignore it. 

# Complexity
- Time complexity: **O(N)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(N)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        int mn = *min_element(nums.begin(), nums.end()); 
        if (mn < k) {
            return -1; 
        }
        unordered_map<int,int> mp; 
        for (auto &it: nums) {
            mp[it] = 1; 
        }
        int ans = mp.size(); 
        if (mp[k]) {
            ans--; 
        }
        return ans; 
    }
};
```