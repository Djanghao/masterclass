# Typescript | Javascript, 90% faster, 90% memory less

**Author:** tohasan
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/2661623/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/2661623/)

---

```
function minTimeToType(word: string): number {
    const base = 'a'.charCodeAt(0);
    const last = 'z'.charCodeAt(0);
    let p = base;
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        const c = word.charCodeAt(i);
        const max = Math.max(p, c);
        const min = Math.min(p, c);
        count += Math.min(last - max + min - base + 1, max - min) + 1;
        p = c;
    }
    return count;
}
```

<img alt="submission" src="https://assets.leetcode.com/users/images/2b43589a-03f3-4e6e-8f3c-e76782c02fb9_1664919229.3344707.png" width="600"/>
