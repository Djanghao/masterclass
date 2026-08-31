# Short and elegant solution (JS/TS)

**Author:** pinkipail
**Votes:** 7
**Link:** [https://leetcode.com/problems/spiral-matrix/solutions/4665318/](https://leetcode.com/problems/spiral-matrix/solutions/4665318/)

---

# Code
```
function spiralOrder(matrix: number[][]): number[] {
    const elementsOrder: number[] = [];
    while (matrix.length > 0 && matrix[0][0] !== undefined) {
        // Steal the first row.
        elementsOrder.push(...matrix.shift());
        // Steal the right items.
        matrix.forEach(row => elementsOrder.push(row.pop()));
        // Turn the matrix over.
        matrix.reverse().map(row => row.reverse());
    }
    return elementsOrder;
};
```