# TypeScript / JavaScript simple solution

**Author:** a_deev
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/4079378/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/4079378/)

---

# Code
```
function reorderSpaces(text: string): string {
    const spaces = text.replace(/[^\\s]/g, '').length;
    const words = text.trim().split(/ +/);
    const n = words.length - 1;

    if (!n) return words[0] + (' ').repeat(spaces);

    return words.join((' ').repeat(spaces / n)) + (' ').repeat(spaces % n);
};
```