# Sliding Window - Typescript

**Author:** yudhishterk
**Votes:** 2
**Link:** [https://leetcode.com/problems/subarray-product-less-than-k/solutions/3420827/](https://leetcode.com/problems/subarray-product-less-than-k/solutions/3420827/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Sliding Window

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$Constant$$

# Code
```
function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k <= 1) {
        return 0;
    }

    let prod = 1;
    let i = -1;
    let j = 0;
    let result = 0;

    while(i < nums.length){
        while(prod < k) {
            i++;
            result += i-j;
            prod *= nums[i];
        }

        while(prod >= k) {
            prod /= nums[j];
            j++;
        }
    }

    return result;
};
```