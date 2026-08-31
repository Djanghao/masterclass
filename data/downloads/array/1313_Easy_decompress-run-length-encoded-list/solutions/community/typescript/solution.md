# Easy Solution in TypeScript

**Author:** navyendhummenon
**Votes:** 3
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/5563802/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/5563802/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function decompressRLElist(nums: number[]): number[] {

    let output: number[] = [];

    for (let i = 0; i < nums.length; i += 2) {
        output.push(...Array(nums[i]).fill(nums[i + 1]));
    }

    return output
    
};
```