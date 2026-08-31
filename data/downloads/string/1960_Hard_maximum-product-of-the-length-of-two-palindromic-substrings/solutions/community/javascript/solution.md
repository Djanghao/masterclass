# Find the Maximum Product of Two Non-Intersecting Palindromic Substrings in JavaScript

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/solutions/3450051/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/solutions/3450051/)

---

# Intuition
The code uses dynamic programming to solve the problem of finding the maximum product of the lengths of two non-intersecting palindromic substrings of odd length in a given string.

The approach is to first calculate the longest palindrome centered at each index of the string using Manacher's algorithm. This is done by maintaining two pointers c and r that keep track of the center and right boundary of the palindrome, respectively. For each index i, we check if it is within the current palindrome (i.e., i <= r). If it is, we can take advantage of the palindrome's symmetry to determine the length of the palindrome centered at i. Otherwise, we start a new palindrome centered at i and expand it until it can no longer be extended.

Once we have computed the length of the longest palindrome centered at each index, we can use this information to calculate the length of the longest palindrome to the left and right of each index. This is done by iterating through the string and keeping track of the maximum length of palindrome seen so far to the left and right of each index.

Finally, we iterate through the string and calculate the product of the lengths of the two non-intersecting palindromic substrings of odd length that can be formed using the palindromes to the left and right of each index. We keep track of the maximum product seen so far and return it as the result.

# Approach
The approach used in the code is to find all the palindromic substrings in the given string and then choose two non-intersecting palindromic substrings of odd length such that their product of lengths is maximized.

The algorithm uses Manacher's algorithm to find all palindromic substrings in the given string. Manacher's algorithm is a linear time algorithm that finds all palindromic substrings in a given string.

The algorithm uses three arrays to keep track of information about each character in the string:

1. dp[i]: the length of the longest palindromic substring centered at i.

2. before[i]: the length of the longest palindromic substring to the left of i.

3. after[i]: the length of the longest palindromic substring to the right of i.

To find the palindromic substrings, the algorithm iterates through the string and uses two pointers, p and q, to expand around each character in the string. It checks if the characters at positions p and q are equal, and if they are, it updates the before and after arrays accordingly. It also updates the dp array to keep track of the longest palindromic substring centered at each character.

Once the algorithm has found all the palindromic substrings in the string, it iterates through the string again and computes the product of the lengths of the two non-intersecting palindromic substrings of odd length that have the maximum product. It does this by computing the maximum product for each position in the string and keeping track of the maximum product seen so far.

Finally, the algorithm returns the maximum product of the lengths of the two non-intersecting palindromic substrings of odd length.

# Complexity
- Time complexity: O(n^2)

- Space complexity: O(n)

# Code
```
/**
 * Title: Maximum Product of the Length of Two Palindromic Substrings
 * Description: You are given a 0-indexed string s and are tasked with finding two non-intersecting palindromic substrings of odd length such that the product of their lengths is maximized. More formally, you want to choose four integers i, j, k, l such that 0 <= i <= j < k <= l < s.length and both the substrings s[i...j] and s[k...l] are palindromes and have odd lengths. s[i...j] denotes a substring from index i to index j inclusive. Return the maximum possible product of the lengths of the two non-intersecting palindromic substrings. A palindrome is a string that is the same forward and backward. A substring is a contiguous sequence of characters in a string.
 * Author: Hasibul Islam
 * Date: 24/04/2023
 */

/**
 * @param {string} s
 * @return {number}
 */
function maxProduct(s) {
    let n = s.length;

    let dp = new Array(n).fill(0);
    let before = new Array(n).fill(0);
    let after = new Array(n).fill(0);

    let c = -1;
    let r = -1;

    for (let i = 0; i < n; i++) {
        let k = i <= r ? Math.min(dp[2 * c - i], r - i) : 0;
        let p = i - k;
        let q = i + k;

        while (p >= 0 && q < n && s[p] === s[q]) {
            before[q] = Math.max(before[q], q - p + 1);
            after[p] = Math.max(after[p], q - p + 1);
            p--;
            q++;
        }

        dp[i] = q - i - 1;

        if (q - 1 > r) {
            c = i;
            r = q - 1;
        }
    }

    for (let i = 1; i < n; i++) {
        before[i] = Math.max(before[i - 1], before[i]);
    }

    for (let i = n - 2; i >= 0; i--) {
        after[i] = Math.max(after[i + 1], after[i]);
    }

    let result = 0;

    for (let i = 1; i < n; i++) {
        result = Math.max(result, before[i - 1] * after[i]);
    }

    return result;
}

```