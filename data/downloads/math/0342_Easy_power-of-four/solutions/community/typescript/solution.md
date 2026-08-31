# Typescript 100% solution

**Author:** Me7mod
**Votes:** 3
**Link:** [https://leetcode.com/problems/power-of-four/solutions/2463709/](https://leetcode.com/problems/power-of-four/solutions/2463709/)

---

The first time you look at this problem you will feel the urge to tackle it as any problem and start writing ton of code.

But when you look at it from Mathimatic prespective at the end of the day power is the opposit of logarithm.

That said if we want to get the "x" all we need is to get log4(n) and make sure it is integer

here is a simple code using javascript Math to do this 

```
function isPowerOfFour(n: number): boolean {
    return Number.isInteger( Math.log(n) /Math.log(4) );
};
```