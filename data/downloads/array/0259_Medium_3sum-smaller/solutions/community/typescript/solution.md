# O(n^2) in TypeScript - 64ms beats 84%

**Author:** alxhghs
**Votes:** 0
**Link:** [https://leetcode.com/problems/3sum-smaller/solutions/5055374/](https://leetcode.com/problems/3sum-smaller/solutions/5055374/)

---

# Intuition
Generally with an array and searching we should think about sorting the array and using binary search if we can, in order to get a better performance. The brute force solution here could be $$O(n^3)$$, but with sorting ($$O(n*log(n))$$), binary search ($$O(n*log(n))$$) and nested loops ($$O(n)$$) we might be able to get closer to $$O(n^2)$$.

# Approach
First we sort the array. Then we loop over each element in the array for the first value, and use binary search on the other elements in the array for the second and third values.

The key part to understand is that when we find a triplet less than the target, we can quickly increase our result by the difference between right and left. That's because every value from right to left is valid, and we are going to increment `i` so we don't check those values again otherwise.

# Complexity
- Time complexity: $$O(n^2)$$ due to the nested loops

- Space complexity: $$O(n)$$ for the sort, everything else would be $$O(1)$$

# Code
```
function threeSumSmaller(nums: number[], target: number): number {
    let n = nums.length;
    let result = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] < target) {
                result += right - left;
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}
```