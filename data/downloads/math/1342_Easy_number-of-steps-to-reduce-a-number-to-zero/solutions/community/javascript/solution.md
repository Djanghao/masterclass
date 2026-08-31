# JS | 97% | Easy short | Without recursion

**Author:** Karina_Olenina
**Votes:** 45
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/2665155/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/2665155/)

---

I start the loop with the condition that the num is not 0, then I make a ternary operation, if the number is divisible by 2 without a remainder (paired) - num / 2, else (not paired) we subtract 1, at the end of the loop increase step by 1.

```
let numberOfSteps = function (num) {
    let step = 0;

    while (num !== 0) {
        num % 2 === 0 ? num /= 2 : num--;
        step++;
    }
    return step;
};
```