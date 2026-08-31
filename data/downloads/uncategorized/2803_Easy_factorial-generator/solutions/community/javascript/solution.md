# Solution with while loop

**Author:** ewomaukah
**Votes:** 1
**Link:** [https://leetcode.com/problems/factorial-generator/solutions/3918852/](https://leetcode.com/problems/factorial-generator/solutions/3918852/)

---

# Intuition
Yield the current output, which starts at 1, and calculate the output of the next count, while incrementing the count

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
/**
 * @param {number} n
 * @yields {number}
 */
function* factorial(n) {
    let output = 1
    let count = Math.min(n, 1)

    while(count <= n) {
        yield output
        output *= ++count
    }
    
};


/**
 * const gen = factorial(2);
 * gen.next().value; // 1
 * gen.next().value; // 2
 */
```