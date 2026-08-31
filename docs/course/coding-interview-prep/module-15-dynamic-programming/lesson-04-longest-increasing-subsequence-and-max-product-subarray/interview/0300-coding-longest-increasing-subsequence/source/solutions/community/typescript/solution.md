# Naive DP algorithm

**Author:** tranxuanluong98
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence/solutions/4144928/](https://leetcode.com/problems/longest-increasing-subsequence/solutions/4144928/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:$$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function lengthOfLIS(nums: number[]): number {
    let values : Array<number> = [];
    let result = -1;
    for(let i = 0; i < nums.length; i++) {
        values[i] = 1;
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]){
                values[i] = Math.max(values[i], values[j]+1);
            }
        }
        result = Math.max(result, values[i]);
    }
    console.log(values);
    return result;
};
```