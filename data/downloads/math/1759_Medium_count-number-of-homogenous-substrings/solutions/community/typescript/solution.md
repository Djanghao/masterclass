# Solution with Sliding Window in Python3 / TypeScript

**Author:** subscriber6436
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4269557/](https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4269557/)

---

# Intuition

Here we have:

- a string `s`
- our goal is to count number of **homogenous** substrings

A string is **homogenous** if all the characters of the string are **the same**.

```
# Example
s = 'aab'

# How much a-s and b-s could construct a homogenous substring?
# Only four - 'a', 'a', 'aa' and 'b'
```

At each step we want to know, if a string is a **homogenous**.
We can track **size of a Sliding Window** and if condition is **broken**, then we **shrink the window**.

In order to calculate count of **homogenous** substrings at a particular `[left, right]`, we can use an **arithmetic progression formula** as:

```
count = n * (n + 1) / 1
```

# Approach

1. declare `ans` to store count of homogenous substrings
2. declare **Sliding Window** as with pointers `left` and `right`
3. use `count` method to find in **O(1)** count of these substrings
4. iterate over `s`
5. check, if neighbors in `s` are **equal** and **expand** a window
6. otherwise **count** valid amount of substrings with `count` function
7. return `ans`

# Complexity

- Time complexity: **O(N)**, since we iterate over `s`

- Space complexity: **O(1)**, we don't allocate extra space.

# Code in Python3

```
class Solution:
    def countHomogenous(self, s: str) -> int:
        ans = 0
        left = 0
        right = 1

        def count(n):
            return n * (n + 1) / 2

        while right < len(s):
            if s[right - 1] != s[right]:
                ans += count(right - left)
                left = right

            right += 1
             
        return floor((ans + count(right - left)) % (1e9 + 7))
```
# Code in TypeScript

```
function countHomogenous(s: string): number {
    let ans = 0
    let left = 0
    let right = 1

    const count = (n: number) => n * (n + 1) / 2

    while (right < s.length) {
        if (s[right - 1] != s[right]) {
            ans += count(right - left)
            left = right
        }

        right += 1

    }

    return (ans + count(right - left)) % (1e9 + 7)
};
```
