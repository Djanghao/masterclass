# Beginner-friendly || Simple solution with HashSet DS in TypeScript

**Author:** subscriber6436
**Votes:** 1
**Link:** [https://leetcode.com/problems/optimal-partition-of-string/solutions/4086324/](https://leetcode.com/problems/optimal-partition-of-string/solutions/4086324/)

---

# Intuition
The problem description is the following:
- there's a `s` string with alphabetical English lowercase chars
- our goal is to optimally split a string into **optimal** chunks, all of them **must contain** only unique chars

```
# Example
s = 'abacaba'

# We want to focus your attention at fact,
# that all of the chars in EACH substring should be UNIQUE.
# So, how can we check it?

# We could use Two Pointers, to form a Sliding Window,
# or HashTable/HashSet DS to know, how many unique chars we have
# at each step.

# n = (ab)(ac)(ab)(a) => this is only one way to split this string.

```

# Approach
1. declare an empty `set` to store the chars inside **Sliding Window**, note that we **don't have** a `left` pointer to form the window
2. declare an `ans` variable to store unique substrings
3. iterate over `s`
4. check, if the window condition is **broken**, i.e. the current char isn't **unique**, and store the prev substring as a valid one by adding `ans++`
5. add current char to the `set`
6. return `ans`

# Complexity
- Time complexity: **O(n)** to iterate over `s`

- Space complexity: **O(n)**, in worst-case scenario all of the chars will be unique

# Code
```
function partitionString(s: string): number {
    const set = new Set()
    let ans = 1

    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            set.clear()
            ans += 1
        }

        set.add(s[i])
    }

    return ans
};
```