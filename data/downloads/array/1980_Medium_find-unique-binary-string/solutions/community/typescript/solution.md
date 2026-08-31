# Beats 100% Typescript 4 Lines

**Author:** araguma
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/3826608/](https://leetcode.com/problems/find-unique-binary-string/solutions/3826608/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since the problem constraints states that `nums[i].length == n`, you can use [Cantor's diagonal argument](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument) to solve the problem. This would not work if `nums[i].length > n`.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize an empty string to store the output
2. Loop through the input string array
    1. If the character at `nums[i][i]` is `0` push a `1` to the output
    2. Otherwise push a `0` to the output
3. Return the output

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function findDifferentBinaryString(nums: string[]): string {
    let output = '';
    for(let i = 0; i < nums.length; i ++)
        output += nums[i][i] === '0' ? '1' : '0';
    return output;
};
```