# Easy understanding Ts solution

**Author:** xiefa
**Votes:** 2
**Link:** [https://leetcode.com/problems/basic-calculator-ii/solutions/1628426/](https://leetcode.com/problems/basic-calculator-ii/solutions/1628426/)

---

```typeScript
function calculate(s: string): number {
  const stack: number[] = [];
  let preSign = '+';
  let num = 0;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    const char = s[i];
    if (!isNaN(Number(char)) && char !== ' ') {
      num = num * 10 + Number(char);
    }
    if (isNaN(Number(char)) || i === n - 1) {
      switch (preSign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push(stack.pop() / num | 0);
      }
      num = 0;
      preSign = char;
    }
  }
  let res = 0;
  for (const num of stack) {
    res += num;
  }
  return res;
};
```