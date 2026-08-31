# Generate RegEx

**Author:** k-fr0ggy
**Votes:** 0
**Link:** [https://leetcode.com/problems/match-substring-after-replacement/solutions/6098314/](https://leetcode.com/problems/match-substring-after-replacement/solutions/6098314/)

---

# Intuition
Just use RegEx rather than reinventing the wheel

# Code
```typescript []
function matchReplacement(s: string, sub: string, mappings: string[][]): boolean {
    const pattern = sub.split('').map((c) => {
        const alternateLetters = mappings.filter(([e]) => e === c).map(([_, l]) => l);
        return `[${c}${alternateLetters.join('')}]`
    }).join('')
    return new RegExp(pattern).test(s)
};
```