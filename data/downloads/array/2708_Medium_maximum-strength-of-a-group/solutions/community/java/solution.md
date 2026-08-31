# Very Simple Brute Force | Knapsack | x No Greedy x | Python and C++

**Author:** Chanpreet3000
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3569327/](https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3569327/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Looking at the constraints we can realize that solution can have complexity upto `2^n`.
Simple Knapsack solution can be applied.

Either we can consider an element at ith position or not consider it.

# Approach
<!-- Describe your approach to solving the problem. -->
`Helper(nums, ind, prod, took)`In this function
- `ind` indicates that we have to decide whether to take element at position ith or not take it.
- `prod` is the product after reaching the `ind` index.
- `took` is a variable to consider the fact that the subsequence that we choose has at least 1 element.
- If we take the element at `ind` we call `helper(nums, ind + 1, prod, took);` Taking the elements makes took = true cause now we can say that the subsequence must have atleast 1 element. 
- If we donot take the element at `ind` we call `helper(nums, ind + 1, prod, took);`. We pass on the took value if we previously took an elment it will be true else false.
- **BASE CASE** : 
    ```
    if(nums.size() == ind){
        // Considering the answer only if the at
        // least one element is taken.
        if(took)
            ans = max(ans, prod);
        return;
    }
    ```




# Complexity
- Time complexity:`2^n`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `2^n Stack space`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` Python []
class Solution:
    ans = -1e18
    def helper(self, nums, ind, prod, took):
        if ind == len(nums):
            global ans
            if took:
                self.ans = max(self.ans, prod)
            return
        self.helper(nums, ind + 1, prod * nums[ind], True)
        self.helper(nums, ind + 1, prod, took)
    def maxStrength(self, nums: List[int]) -> int:
        self.helper(nums, 0, 1, False)
        return int(self.ans)
```
``` C++ []
class Solution {
public:
    long long ans = -1e18;
    void helper(vector<int> &nums, int ind, long long prod, bool took){
        if(nums.size() == ind){
            if(took)
            ans = max(ans, prod);
            return;
        }
        helper(nums, ind + 1, prod, took);
        helper(nums, ind + 1, nums[ind] * prod, true);
    }
    long long maxStrength(vector<int>& nums) {
        helper(nums, 0, 1, false);
        return ans;
    }
};
```