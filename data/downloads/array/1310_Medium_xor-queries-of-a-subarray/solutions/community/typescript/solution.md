# 3 lines Prefix Sum solution

**Author:** dimasiandro
**Votes:** 2
**Link:** [https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/5780448/](https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/5780448/)

---

# Approach
Firstly, we populate prefix sum:
$$ prefixXor[i] $$ will contain result of xor operation for [0, i] nums.
Given the fact, that y = x ^ y ^ x, prefixXor[l - 1] ^ prefixXor[r] will contain exactly the xor result for [l, r] nums, as all nums before l will be used twice.

# Complexity

- Time complexity: $$O(n + m)$$

- Space complexity: $$O(n + m)$$

# Code
```typescript []
function xorQueries(arr: number[], queries: number[][]): number[] {
    const prefixXor = [0];
    arr.forEach(num => prefixXor.push(prefixXor.at(-1) ^ num));
    return queries.map(([l, r]) => prefixXor[l] ^ prefixXor[r + 1]);
};
```