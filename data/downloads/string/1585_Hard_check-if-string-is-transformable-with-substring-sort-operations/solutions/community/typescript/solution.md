# 💥💥Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/5854347/](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/5854347/)

---

# Intuition
The goal is to determine if we can transform string s into string t by sorting substrings. Since sorting a substring can rearrange elements, we need to ensure that the order of digits in t can be matched by the indices of those digits in s without violating the rules of sorting.

# Approach
Track the positions of each digit in s, then for each digit in t, check if the digit can be placed by ensuring that no smaller digit appears later in s than the current digit in t.

# Complexity
- Time complexity:
O(n), where n is the length of the strings, because we go through each character in s and t once.


- Space complexity:
O(1), since we only use a fixed-size array to store indices for digits (0-9), regardless of the input size.


# Code
```typescript []
/**
 * Checks if string `s` can be transformed into string `t` by sorting substrings.
 * @param {string} s - The original string.
 * @param {string} t - The target string to transform into.
 * @param {number} n - The length of the strings (defaults to length of s).
 * @return {boolean} - Returns true if transformation is possible, otherwise false.
 */
function isTransformable(s: string, t: string, n: number = s.length): boolean {
    // Create an array to hold the indices of each digit (0-9)
    const indices: number[][] = Array.from({ length: 10 }, () => []);

    // Populate indices with the positions of each digit in string s
    for (let i = n - 1; i >= 0; i--) {
        indices[Number(s[i])].push(i);
    }

    // Iterate through each character in string t
    for (let i = 0; i < n; i++) {
        const num = Number(t[i]);

        // If there are no indices for the current digit in t, transformation is impossible
        if (!indices[num].length) {
            return false;
        }

        // Pop the last index of the current digit
        const index = indices[num].pop()!;

        // Check if there are any digits less than the current digit that appear after it
        for (let j = 0; j < num; j++) {
            // If any smaller digit has an index that appears after the current index, return false
            if (indices[j].length && indices[j][indices[j].length - 1] < index) {
                return false;
            }
        }
    }

    // If all checks passed, transformation is possible
    return true;
}



```