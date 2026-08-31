# [C++|Java|Python3] simple DP

**Author:** ye15
**Votes:** 13
**Link:** [https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/2883979/](https://leetcode.com/problems/number-of-subarrays-having-even-product/solutions/2883979/)

---

**Intuition**
The key insight is that a subarray with even product must contain at least one even number. So we simply count the number of subarrays with even numbers. Here, I organize the counting in this way. Given an array represented by the binary `11110111101111`, at index 4 where I see an even number (represented by `0`) I update a variable to 5 indicating 5 numbers have been seen so far. Until next even number (at index 9) each number (regardless of even or odd) contributes a 5 to the final answer. In this way, the algo is summarized as 
1) define a variable `val` starting at 0; 
2) at an even number at index `i`, update the variable to `i+1`; 
3) at each index, increment the answer `ans` by `val`. 

**Implementation**
**C++**
```
class Solution {
public:
    long long evenProduct(vector<int>& nums) {
        long long ans = 0; 
        for (int i = 0, val = 0; i < nums.size(); ++i) {
            if (nums[i] % 2 == 0) val = i+1; 
            ans += val; 
        }
        return ans; 
    }
};
```
**Java**
```
class Solution {
    public long evenProduct(int[] nums) {
        long ans = 0; 
        for (int i = 0, val = 0; i < nums.length; ++i) {
            if (nums[i] % 2 == 0) val = i+1; 
            ans += val; 
        }
        return ans; 
    }
} 
```
**Python3**
```
class Solution:
    def evenProduct(self, nums: List[int]) -> int:
        ans = val = 0
        for i, x in enumerate(nums): 
            if not x&1: val = i+1
            ans += val 
        return ans 
```
**Complexity**
Time `O(N)`
Space `O(1)`