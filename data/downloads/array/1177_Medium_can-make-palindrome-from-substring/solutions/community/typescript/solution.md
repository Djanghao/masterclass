# Prefix Sum

**Author:** marcococo
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/4162627/](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/4162627/)

---

# Intuition
Inspired from [this JS solution](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/3396547/easy-to-understand-javascript-solution-prefix-sum/).

# Approach
The brute force approach would have us slice the input string `s` according to the start and end of each query, and count the occurrences of each letter in that slice. This isn't particurlarly bad under specific conditions, but becomes problematic in a worst case scenario with a very long input string, and a large query range.

To avoid rebuilding a word count for each query, we can use a [prefix sum](https://en.wikipedia.org/wiki/Prefix_sum#:~:text=In%20computer%20science%2C%20the%20prefix,y0%20%3D%20x&text=y1%20%3D%20x0%20%2B%20x) of the input `s`. The prefix sum of `s` is a two dimensional array, of length `s` + 1 \u2014 i.e. one child array per character of `s` (with the first child array initialzed with all `0`s). Each child array has a length of 26 (one for each letter in the alphabet), and each number inside the child arrays represents how many times a given letter has occurred up until that character of `s`.

# Complexity
- Time complexity:
For M as the length of the queries input, this approch takes M * 26 time \u2014 or M if we remove the constant.

- Space complexity:
For N as the length of the input string `s`, this approach takes N * 26 (for each letter in the alphabet) space \u2014 or N if we remove the constant.

# Code
```
function canMakePaliQueries(s: string, queries: number[][]): boolean[] {
    // make a historical count of each letter along each index of s
    // use this for lookups in the last step
    const CHAR_CODE_REFERENCE = 'a'.charCodeAt(0);
    const historicalIndex = new Array(s.length + 1);
    historicalIndex[0] = new Array(26).fill(0);
    for (let i = 0; i < s.length; i += 1) {
        const char = s[i];
        historicalIndex[i + 1] = [...historicalIndex[i]];
        historicalIndex[i + 1][char.charCodeAt(0) - CHAR_CODE_REFERENCE]++;
    }

    return queries.map(([left, right, k]) => {
        let mismatches = 0;
        for (let code = 0; code < 26; code += 1) {
            mismatches += (historicalIndex[right + 1][code] - historicalIndex[left][code]) % 2;
        }
        return (mismatches / 2 | 0) <= k;
    });
};
```