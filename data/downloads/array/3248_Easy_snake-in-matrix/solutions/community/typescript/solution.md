# Simple and straightforward TS solution

**Author:** SandroLuder
**Votes:** 0
**Link:** [https://leetcode.com/problems/snake-in-matrix/solutions/5935971/](https://leetcode.com/problems/snake-in-matrix/solutions/5935971/)

---

# Approach
Simple and straightforward solution.


# Code
```typescript []
function finalPositionOfSnake(n: number, commands: string[]): number {
    // RIGHT = j += 1
    // LEFT =   j -= 1
    // UP = i -= 1
    // DOWN = i += 1
    let i: number = 0;
    let j: number = 0;
    commands.forEach((command) => {
        if (command === "RIGHT") {
            j += 1;
        } else if (command === "LEFT") {
            j -= 1;
        } else if (command === "UP") {
            i -= 1;
        } else {
            i += 1;
        }
    });
    return (i * n) + j;
};
```