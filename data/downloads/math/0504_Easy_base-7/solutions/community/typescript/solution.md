# Convert to Base | Time: O(log(N)) | Space: O(log(N))

**Author:** rojas
**Votes:** 1
**Link:** [https://leetcode.com/problems/base-7/solutions/4211246/](https://leetcode.com/problems/base-7/solutions/4211246/)

---

# Complexity
- Time complexity: $O(\\log{N})$
- Space complexity: $O(\\log{N})$

# Code 1: Number.toString
Uses the built-in base conversion feature of [Number.toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString). It can convert a number to a string in any base from 2 to 36.

```Typescript
function convertToBase7(num: number): string {
   return num.toString(7);
};
```
 
# Code 2: Custom
Manually converts the number to base 7. Works for bases from 2 to 10.
```Typescript
function convertToBase7(num: number): string {
   return toBase(num, 7);
};

function toBase(num: number, base: number): string {
    const res: number[] = [];
    const sign = Math.sign(num);
    num *= sign;
    while (num >= base) {
        const digit = num % base;
        num = (num - digit) / base;
        res.push(digit);
    }
    res.push(sign * num);
    return res.reverse().join("");
}
```

# Code 3: Custom Extended
Manually converts the number to base 7. Works for bases from 2 to 36. It can be easily extended for higher bases and/or for custom mappings.

```Typescript
const SYMBOLS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function convertToBase7(num: number): string {
   return toBase(num, 7);
};

function toBase(num: number, base: number, symbols = SYMBOLS): string {
    const res: string[] = [];
    const sign = Math.sign(num);
    num *= sign;
    do {
        const digit = num % base;
        num = (num - digit) / base;
        res.push(symbols[digit]);
    } while (num > 0);
    (sign < 0) && res.push("-");
    return res.reverse().join("");
}
```