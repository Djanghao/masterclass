# C++✅ | Prefix-Sum | Easy-to-understand 🤩| Superfast🔥

**Author:** abhi_9v
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3420254/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3420254/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We will use the prefix sum approach to make a `conver` vector and then `ans` vector by applying prefix sum approach on `conver` message.

# Approach
<!-- Describe your approach to solving the problem. -->
- Store `2*nums[0]` in `conver[0]`.
- Then run a loop and assign `conver[i] = nums[i] +0ll+ mx`, where `mx` is variable having the maximum running number.
- Then, at last simply make a prefix sum array `ans` of `conver` vector and return it.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<long long> findPrefixScore(vector<int>& nums) {
        int n=nums.size();
        vector<long long> ans(n);
        vector<long long> conver(n);
        conver[0] = 2*nums[0];
        int mx = nums[0];
        for(int i=1; i<n; i++){
            mx = max(mx, nums[i]);
            conver[i] = nums[i] +0ll+ mx;
        }
        ans[0]=conver[0];
        for(int i=1; i<n; i++){
            ans[i] = ans[i-1] + 0ll+conver[i];
        }
        return ans;
    }
};

//  PLEASE UPVOTE IF YOU LIKE THE SOLUTION

```