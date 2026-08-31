# time: O(n), space: O(N)

**Author:** brudnovskyi
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-row-keyboard/solutions/6106120/](https://leetcode.com/problems/single-row-keyboard/solutions/6106120/)

---

```typescript []
function calculateTime(keyboard: string, word: string): number {
    const map: Record<string, number> = {};
    let current = 0;
    let counter = 0;

    for (let i = 0; i < keyboard.length; i++) {
        map[keyboard[i]] = i;
    }

    for (let i = 0; i < word.length; i++) {
        const next = map[word[i]];
        counter += Math.abs(next - current);
        current = next;
    }

    return counter;
};
```