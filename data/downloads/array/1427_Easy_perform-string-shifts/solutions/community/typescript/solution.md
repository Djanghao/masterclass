# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/perform-string-shifts/solutions/5672743/](https://leetcode.com/problems/perform-string-shifts/solutions/5672743/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
public String stringShift(String s, int[][] shift) {
    int totalShift = 0;

    // Calculate the net shift amount
    for (int[] operation : shift) {
        int direction = operation[0];
        int amount = operation[1];

        // Left shift
        if (direction == 0) {
            totalShift -= amount;
        }
        // Right shift
        else {
            totalShift += amount;
        }
    }

    // Reduce totalShift to a value within the string length
    int len = s.length();
    totalShift %= len;

    // Handle negative shifts by converting them to positive shifts
    if (totalShift < 0) {
        totalShift += len;
    }

    // Perform the final shift
    return s.substring(len - totalShift) + s.substring(0, len - totalShift);
}
```
```javascript []
var stringShift = function(s, shift) {
    let totalShift = 0;

    // Calculate the net shift amount
    for (let i = 0; i < shift.length; i++) {
        let direction = shift[i][0];
        let amount = shift[i][1];

        // Left shift
        if (direction === 0) {
            totalShift -= amount;
        }
        // Right shift
        else {
            totalShift += amount;
        }
    }

    // Reduce totalShift to a value within the string length
    const len = s.length;
    totalShift %= len;

    // Handle negative shifts by converting them to positive shifts
    if (totalShift < 0) {
        totalShift += len;
    }

    // Perform the final shift
    return s.slice(-totalShift) + s.slice(0, -totalShift);
};
```
```typescript []
function stringShift(s: string, shift: number[][]): string {
    let totalShift = 0;

    // Calculate the net shift amount
    for (let i = 0; i < shift.length; i++) {
        const direction = shift[i][0];
        const amount = shift[i][1];

        // Left shift
        if (direction === 0) {
            totalShift -= amount;
        }
        // Right shift
        else {
            totalShift += amount;
        }
    }

    // Reduce totalShift to a value within the string length
    const len = s.length;
    totalShift %= len;

    // Handle negative shifts by converting them to positive shifts
    if (totalShift < 0) {
        totalShift += len;
    }

    // Perform the final shift
    return s.slice(-totalShift) + s.slice(0, -totalShift);
};
```