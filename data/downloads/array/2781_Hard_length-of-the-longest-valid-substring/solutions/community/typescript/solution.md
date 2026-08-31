# Sliding window approach

**Author:** ran_ga85
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/5267410/](https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/5267410/)

---

# Intuition
Smart sliding window, limited to 10 characters according to problem description.

# Approach
Iterate for every character in word and check backward for max of 10 chars.
for each char added, we check if substring is in Set, if not we keep iterating backward and check.
If substring in forbidden - start checking from one place after the start of forbidden substring.

# Complexity
- Time complexity:
Outer loop runs on word.length --> O(n)
Inner loop runs at most O(10), and checks in hash set for forbidden in O(1)
Combining loops: O(n)

- Space complexity:
The Set I defined, in length of all forbidden words, lets say m,
so O(m)

# Code
```
function longestValidSubstring(word: string, forbidden: string[]): number {
    if (word.length === 0) return 0
    if (forbidden.length === 0) return word.length

    const forbiddenSet = new Set(forbidden)

    let ans = 0, start = 0
    for (let end = 0; end < word.length; end++) {

        for (let checkStart = end; checkStart > Math.max(end - 10, start - 1); checkStart--) {

            if (forbiddenSet.has(word.substring(checkStart, end + 1))) {
                start = checkStart + 1
                break
            }

        }
        ans = Math.max(ans, end - start + 1)
    }

    return ans
};
```