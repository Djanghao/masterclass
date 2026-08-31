# Beginner-friendly || Simple solution in Python3/TypeScript

**Author:** subscriber6436
**Votes:** 4
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/4090574/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/4090574/)

---

# Intuition
The problem description is the following:
- there's a string `s`, that includes `L` and `R`, the string is `LR` balanced, this means, that count of `L` and `R` equal
- our goal is to find **maximum number** of balanced strings

```
# Example
s = 'LRLLRR'

# The valid balanced strings are
s = '(LR)(LLRR)'

# We can treat L as -1 and R is +1.
# The previous example can be reduced 
# to these pairs of equations 
s = '(-1+1)(-1-1+1+1)'
```

This leads us to **calculate the balance** between strings.

# Approach
1. declare `ans` variable
2. declare `chars` dict/object to store `L` and `R`
3. declare `cur` to calculate balance
4. iterate over `s`
5. manage the balance as `cur += chars[s[right]]`
6. if the balance is reached as `cur == 0`, increment `ans`
7. return `ans`

# Complexity
- Time complexity: **O(n)** to iterate over `s`

- Space complexity: **O(1)**, we don't allocate extra space.

# Code in TypeScript
```
function balancedStringSplit(s: string): number {
    let ans = 0
    const chars = { L: -1, R: 1 }
    let cur = 0

    for (let right = 0; right < s.length; right++) {
        cur += chars[s[right]]

        if (cur === 0) ans++
    }

    return ans
};
```

# Code in Python3
```
class Solution:
    def balancedStringSplit(self, s: str) -> int:
        chars = {'L': -1, 'R': 1}
        ans, cur = 0, 0

        for right in range(len(s)):
            cur += chars[s[right]]

            if cur == 0: ans += 1

        return ans
```