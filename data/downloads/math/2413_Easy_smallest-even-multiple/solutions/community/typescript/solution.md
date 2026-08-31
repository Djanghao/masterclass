# TypeScript/JavaScript simple one-line solution with comments/discussion

**Author:** jamauss
**Votes:** 5
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/3053382/](https://leetcode.com/problems/smallest-even-multiple/solutions/3053382/)

---

# Intuition
As long as you know the `mod` operator `%` this one should be pretty easy for you.

# Approach
Since there is the same solution available, regardless of the input, this is pretty easy to code a solution for. Just return the number `n` if it divides evenly by 2, otherwise return the number multiplied by 2.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
const smallestEvenMultiple = (n: number): number => {

    return n % 2 == 0 ? n : n * 2;

};
```
See more `TypeScript`/`JavaScript` (and other language) LeetCode solutions at https://github.com/jasonmauss/LeetCode