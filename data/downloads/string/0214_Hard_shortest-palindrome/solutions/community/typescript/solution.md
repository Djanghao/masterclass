# Typescript solution

**Author:** emiliodeg
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-palindrome/solutions/5811893/](https://leetcode.com/problems/shortest-palindrome/solutions/5811893/)

---

# Complexity
- Time complexity: $$O(n^2)$$
- Space complexity: $$O(n)$$

# Code
```typescript []
function shortestPalindrome(s: string): string {
    const { length } = s

    const reverse = s.split('').reverse().join('')

    for(let i = 0; i < length; i++) {
        if (s.slice(0, length - i) === reverse.slice(i)) return reverse.slice(0, i) + s
    }

    return ''
};
```