# TS 43ms

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/4554789/](https://leetcode.com/problems/solve-the-equation/solutions/4554789/)

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
```
function solveEquation(equation: string): string {
  let tmp: number = 0,
    lr: number = 1,
    a: number = 0,
    b: number = 0,
    sign: number = 1,
    calc: number = 0;

  for (let i = 0; i < equation.length; i++) {
    if (equation[i] >= "0" && equation[i] <= "9") {
      tmp = tmp * 10 + +equation[i];
      calc++;
    }
    if (equation[i] === "x") {
      if (tmp === 0 && calc === 0) a += sign * lr;
      a += sign * lr * tmp;
      calc = tmp = 0;
    }
    if (
      equation[i] === "-" ||
      equation[i] === "+" ||
      equation[i] === "=" ||
      equation[i + 1] === undefined
    ) {
      b += sign * lr * tmp;
      calc = tmp = 0;
      if (equation[i] === "-") {
        sign = -1;
      } else if (equation[i] === "+") {
        sign = 1;
      } else if (equation[i] === "=") {
        lr = -1;
        sign = 1;
      }
    }
  }
  if (a !== 0) return `x=${-b / a}`;

  if (a === 0) {
    if (b === 0) return "Infinite solutions";
    else return "No solution";
  }
}

```