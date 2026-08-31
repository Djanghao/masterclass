# 🟡🔵 TS/JS easy to understand solution WITHOUT KMP/LPS🔥🔥🔥

**Author:** arveske
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4710948/](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i/solutions/4710948/)

---

# Intuition
My initial idea was to implement a simple brute-force solution. **Although it may not be as fast as the KMP solution**, but it meets the requirements for a middle level solution to this problem.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Initialize a set of `rules` to interpret the relationships specified in the pattern.
2. Iterate over each possible subarray of length pattern.length + 1 within the nums array.
3. Check if each adjacent pair of elements in the subarray satisfies the corresponding relationship specified in the pattern using the predefined rules. Otherwise it breaks the `while` loop
4. If all relationships are satisfied, increment the count of matching subarrays.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O((n - m) * m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countMatchingSubarrays(nums: number[], pattern: number[]): number {
    const rules = {
        [1]: (i: number, j: number) => j > i,
        [0]: (i: number, j: number) => j == i,
        [-1]: (i: number, j: number) => j < i
    }
    const patterRequiredNumbers = pattern.length + 1
    let res = 0
    for (let i = 0; i < nums.length - patterRequiredNumbers + 1; i++) {
        const sub = nums.slice(i, i + patterRequiredNumbers)
        let fitsPattern = true
        let index = 0
        while (fitsPattern && index < patterRequiredNumbers - 1) {
            if (!rules[pattern[index]](sub[index], sub[index + 1])) {
                fitsPattern = false
            }
            index++
        }
        if (fitsPattern) res++
    }
    return res
};
```