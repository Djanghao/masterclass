# Functional approach 1-line clean solution

**Author:** pirastrino
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/2109914/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/2109914/)

---

```
const numberOfSteps = (num: number, steps: number = 0): number => {
  return num === 0 ? steps : numberOfSteps(num % 2 === 1 ? num - 1 : num/2, steps + 1);
};
```