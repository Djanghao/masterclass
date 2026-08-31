# javascript 72ms 100%

**Author:** henrychen222
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-to-base-2/solutions/1046761/](https://leetcode.com/problems/convert-to-base-2/solutions/1046761/)

---

Similar Question: https://leetcode.com/problems/adding-two-negabinary-numbers/
My Solution: https://leetcode.com/problems/adding-two-negabinary-numbers/discuss/1044015/javascript-use-BigInt-96ms
reference\uFF1A https://en.wikipedia.org/wiki/Negative_base#Calculation

```
const baseNeg2 = (N) => {
    return ToNegabinary(BigInt(N));
};

const ToNegabinary = (num) => {
    let res = '';
    while (num != 0n) {
        let remainder = num % -2n;
        num /= -2n;
        if (remainder < 0n) {
            remainder += 2n;
            num++;
        }
        res = remainder.toString() + res;
    }
    return res.length == 0n ? '0' : res;
};
```