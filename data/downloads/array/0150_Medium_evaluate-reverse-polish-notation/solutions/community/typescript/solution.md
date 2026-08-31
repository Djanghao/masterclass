# Typescript Clean Solution

**Author:** 12345qwerty
**Votes:** 14
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/1502143/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/1502143/)

---

*Faster than 100% typescript submissions
Less space than 90.24% typescript submissions*
```
interface IOperatorSets {
    [key: string] : (a: number, b: number) => number;
}

function evalRPN(tokens: string[]): number {
    const operatorSets: IOperatorSets = {
        '+': (a: number, b: number) => a + b,
        '-': (a: number, b: number) => a - b,
        '*': (a: number, b: number) => a * b,
        '/': (a: number, b: number) => a / b | 0, // truncate toward zero
    };
    const stack: number[]= [];
    tokens.forEach(r => {
        if (operatorSets[r] != null) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(operatorSets[r](a, b));
        } else {
            stack.push(Number(r));
        }
    });
    return stack.pop();
};
```