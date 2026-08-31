# Smooth solution | Typescript (4006 ms faster than 100.00%, 98.3 MB less than 100.00%)

**Author:** toniton
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2557389/](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2557389/)

---

```
function numberOfWeakCharacters(properties: number[][]): number {
    let result = 0;
    const queue = [...properties].sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    let maximum = 0;
    
    while (queue.length) {
        const current = queue.shift();
        if (current[1] < maximum) {
            result++;
        }
        maximum = Math.max(maximum, current[1]);
    }
    return result;
};
```