# Prefix sum easy solution

**Author:** dimadidyk0
**Votes:** 1
**Link:** [https://leetcode.com/problems/special-array-ii/solutions/6128335/](https://leetcode.com/problems/special-array-ii/solutions/6128335/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Brute force will be $$O(n2)$$. I don't wont that. It really looked like there is prefix sum. 

# Approach
We need to create prefix sum, whrere prefixSum[i] will be how many adjacent elements have same parity. Then we check if query[start] equal query[end]. If not \u2013 query invalid.

Example: nums: [4,3,1,6], queries: [[0,2],[2,3]]. Prefix sum will be [0,0,1,1]. prefixSum[0] = 0, prefixSum[2] = 1 and this query is invalid, because 3 and 1 has same parity. Second query have same values in prefix sum and that query is valid.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
    const prefixSum = [0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] % 2 !== nums[i - 1] % 2) {
            prefixSum.push(prefixSum[prefixSum.length - 1]);
        } else {
            prefixSum.push(prefixSum[prefixSum.length - 1] + 1);
        }
    }

    return queries.map(([from,to]) => prefixSum[from] === prefixSum[to]);
};
```