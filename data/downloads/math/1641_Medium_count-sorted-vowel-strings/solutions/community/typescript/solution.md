# Beginner-friendly || Simple solution with Dynamic Programming in Python3 / TypeScript

**Author:** subscriber6436
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-sorted-vowel-strings/solutions/4175566/](https://leetcode.com/problems/count-sorted-vowel-strings/solutions/4175566/)

---

# Intuition
Let's briefly explain what the problem is:
- there's an integer `n`
- our goal is to find **how many** distinct and **lexicographically** correct strings exist, which are created from **vowels**

The approach is straightforward: if we represent the final string as a **tree with nodes**, this helps to find the correct strings as long as we visit all of the nodes in this tree.

```
#                             (' ')
#                       /   /   |   \\  \\
#                      (a) (e) (i) (o) (u)
# .....
# and so on

# Two things we only care about are lexicographical correctness
# and count of vowels in a particular string

n = 3
# Valid: [aei, eio, iou, ...]
# Invalid: [a, ie, uoi, ...]  
```

# Approach
1. define `dp` with `s` and `k`, that're a particular string and it's length
2. if `k == n`, we've founded a valid combination, so return `1`
3. otherwise collect a **sum** of valid combinations, that're along in `dp(x, k + 1)` way, if a particular string is **fits** the conditions above
4. return `dp('a', 0)` as a starting point

# Complexity
- Time complexity: **O(N)**, since we're working with `n`- subproblems

- Space complexity: **O(N)**, the same for storing

# Code in Python3
```
class Solution:
    def countVowelStrings(self, n: int) -> int:
        @cache
        def dp(s, k):
            if k == n: return 1

            return sum([dp(x, k + 1) for x in ['a','e','i','o','u'] if s <= x])

        return dp('a', 0)
```

# Code in TypeScript
```
function countVowelStrings(n: number): number {
    const cache = {}

    const keify = (i: string, j: number) => `${i}-${j}`

    const dp = (s: string, k: number) => {
        const key = keify(s, k)

        if (key in cache) return cache[key]
        if (k === n) return 1

        let result = 0

        for (const char of ['a', 'e', 'i', 'o', 'u']) {
            if (s <= char) result += dp(char, k + 1)
        }

        return cache[key] = result
    }

    return dp('a', 0)
};
```