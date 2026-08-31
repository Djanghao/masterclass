# JS 100% with explanation

**Author:** reistr
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/4294670/](https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/4294670/)

---

# Intuition
Solution is based on the problem for two strings.

Please **Upvote** if you find these helpful!

# Approach
In case of two strings a, b longest uncommon subsequence (LUS) would be the longest of two if they are not equal. If two strings are equal there are no uncommon subsequences at all. 
*There is no way we can obtain longer string from shorter one by character deletion so by definition longer string is not subsequence of shorter one and longer string hence is the LUS.*

In case of many strings we should check for equality and if our current candidate is subsequence of some other string. To perform this check isSubsequence function is used. It is the solution to problem **392. Is Subsequence** and uses two pointers approach.

So we sort input strings by length descending order and iterate over them using a dictionary to store strings we already processed and a boolean value indicating if that string is rejected or not.
On each step we check if current string is subsequence of any other string in dictionary and if it is true we reject current string. This also covers equality check.
*On this step we probably could check for early exit: while iterating over the dictionary if we find a string which is not rejected and its length is greater than length of current string we could assume it is the answer. But with this check my code actually perform worse on leetcode's dataset so I didn't include that.*
After all we check dictionary for not rejected strings and if none found return -1.

# Example
Input: `strs = ["aabbcc","aabbcc","cb","abc"]`
`"aabbcc"` would be LUS if it didn't not have dublicate.
`"abc"` would be next LUS if it wasn't subsequence of `"aabbcc"`
`"cb"` is not a subsequence of others and hence is LUS

# Complexity
Not considering lengths of input strings:
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$

# Code
```
function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    for (let j = 0; j < t.length; j++) {
        if (s[i] === t[j]) {
            i++;
        }
    }
    return !(i < s.length)
};

function findLUSlength(strs: string[]): number {
    // sort decending by length
    strs.sort(function (a, b) { return b.length - a.length })

    const dictionary = new Map<string, boolean>();

    for (let i = 0; i < strs.length; i++) {
        const cur = strs[i];

        let checkForSubsec = false;
        for (let [key, val] of dictionary) {
            if (isSubsequence(cur, key)) {
                checkForSubsec = true;
                break;
            }
        }

        dictionary.set(cur, !checkForSubsec)
    }

    // input was sorted and strings were added in order of descending
    // length, so the first not rejected entry would be the LUS
    for (let [key, val] of dictionary) {
        if (val) {
            return key.length;
        }
    }

    return -1;
};
```