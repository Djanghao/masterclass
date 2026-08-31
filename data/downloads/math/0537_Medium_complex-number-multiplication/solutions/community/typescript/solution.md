# Simple solution

**Author:** Hanuman-Ghawade
**Votes:** 0
**Link:** [https://leetcode.com/problems/complex-number-multiplication/solutions/4824662/](https://leetcode.com/problems/complex-number-multiplication/solutions/4824662/)

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
function complexNumberMultiply(num1: string, num2: string): string {
    const n1 = num1.split('+');
    const a = n1[0];
    const b = n1[1].slice(0, n1[1].length - 1);
    const n2 = num2.split('+');
    const c = n2[0];
    const d = n2[1].slice(0, n2[1].length - 1);
    const real = Number(a) * Number(c) - Number(b) * Number(d);
    const complex = +a * +d + +b * +c;
    const complexNumber = real + "+" + complex + 'i'
    return complexNumber
};
```