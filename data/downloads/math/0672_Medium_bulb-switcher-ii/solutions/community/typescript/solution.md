# Simple Solution in TypeScript with code Explanation 🥇💯✔

**Author:** ranganathv415
**Votes:** 0
**Link:** [https://leetcode.com/problems/bulb-switcher-ii/solutions/5362081/](https://leetcode.com/problems/bulb-switcher-ii/solutions/5362081/)

---

# Intuition

The problem involves toggling the states of bulbs based on certain rules and counting the distinct final states after a specified number of button presses. Given the complexity and the constraints (with `n` and `presses` potentially going up to 1000), we need to identify patterns and simplifications to solve the problem efficiently.

# Approach

1. **Small n**:
   - For small values of `n` (specifically 1, 2, or 3), there are limited combinations and the problem can be solved by exhaustively considering all possible button presses.

2. **Large n**:
   - When `n` is greater than 3, the first three bulbs dictate the pattern for the rest. This is because the toggles for the first few bulbs will create a repeating pattern for the rest.

3. **Effect of Buttons**:
   - Button 1: Toggles all bulbs.
   - Button 2: Toggles even-indexed bulbs.
   - Button 3: Toggles odd-indexed bulbs.
   - Button 4: Toggles bulbs at positions `3k+1`.

4. **Redundancy**:
   - After 4 presses, the sequence of toggles begins to repeat. This means the state of the bulbs is determined by the number of presses modulo 4.

# Approach

1. **Handle Edge Cases**:
   - If `presses` is 0, there is only one state (all bulbs on).
   - For `n = 1`, `n = 2`, and `n >= 3`, analyze how the bulbs' states can change based on the presses.

2. **Calculate Distinct States**:
   - For different values of `n` and considering up to 4 presses, identify all possible distinct states of the first few bulbs and generalize for larger `n`.

# Code
```typescript
function flipLights(n: number, presses: number): number {
    if (presses === 0) return 1;

    if (n === 1) {
        return 2;
    } else if (n === 2) {
        return presses === 1 ? 3 : 4;
    } else {
        if (presses === 1) return 4;
        if (presses === 2) return 7;
        return 8;
    }
};

```

### Explanation

1. **Base Case**:
   - If `presses` is 0, the bulbs remain in their initial state (all on).

2. **Small n**:
   - For `n = 1`, toggling any button will either turn the single bulb on or off, giving 2 states.
   - For `n = 2`, one press can result in 3 states and more presses result in a maximum of 4 unique states.

3. **Larger n (n \u2265 3)**:
   - For `n = 3` or larger:
     - With 1 press, there can be up to 4 distinct states.
     - With 2 presses, there can be up to 7 distinct states.
     - With more than 2 presses, a maximum of 8 distinct states can be achieved due to the cyclical nature of the toggling pattern.