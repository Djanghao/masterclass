# Beginner-friendly || Simple solution with Two Pointer in Python3 / TypeScript

**Author:** subscriber6436
**Votes:** 2
**Link:** [https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/4200514/](https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/4200514/)

---

# Intuition
Let's briefly explain what the problem is:
- there's a string `s` with lowercase English letters
- our goal is to modify `s` to be **the lexicographically smallest palindrome**

**A palindrome** is a string, when an original word is equal to its **reversed version**.
The simplest way to build this palindrome is to set **Two Pointers** opposite to each other, compare particular letters and use **the lexicographically smallest one**.

```
# Example

s = 'aecab'
# i = 0, j = 4 => a < b, (a)eca(a)
# i = 1, j = 3 => e > a, a(a)c(a)a
# The lexicographically smallest palindrome is 'aacaa'
```

# Approach
1. declare `ans` to store letters
2. iterate over **half** of a string with `left` and `right` pointers
3. check ASCII precedence to find **the lexicographically smallest letter** between `s[left]` and `s[right]`
4. return `ans` 

# Complexity
- Time complexity: **O(N)** to iterate over `s`

- Space complexity: **O(N)** to store `ans`

# Code in Python3
```
class Solution:
    def makeSmallestPalindrome(self, s: str) -> str:
        n = len(s)
        ans = [''] * n
        left = 0

        for right in range(n - 1, (n - 1) // 2 - 1, -1):
            if s[left] <= s[right]:
                [ans[left], ans[right]] = [s[left], s[left]]
            else: 
                [ans[left], ans[right]] = [s[right], s[right]] 
            
            left += 1

        return "".join(ans)
```
# Code in TypeScript
```
function makeSmallestPalindrome(s: string): string {
    const n = s.length
    const ans = Array(n).fill('')

    for (let right = n - 1, left = 0; right >= right / 2; right--, left++) {
        if (s[left] <= s[right]) {
            ans[left] = s[left]
            ans[right] = s[left]
        } else {
            ans[left] = s[right]
            ans[right] = s[right]
        }
    }

    return ans.join('')
};
```