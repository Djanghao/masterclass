# Simple and fast JavaScript/TypeScript solution

**Author:** alexandresheva
**Votes:** 7
**Link:** [https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/2132635/](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/2132635/)

---

My simple and fast JS/TS solution:
```
function digitCount(num: string): boolean {
    const arr = Array(num.length).fill(0);
    for (const char of num) {
        arr[Number(char)]++;
    }
    return arr.join('') === num;
};
```

Result:
Runtime:\xA073 ms, faster than\xA097.44%\xA0of\xA0TypeScript\xA0online submissions for\xA0Check if Number Has Equal Digit Count and Digit Value.
Memory Usage:\xA044.5 MB, less than\xA053.85%\xA0of\xA0TypeScript\xA0online submissions for\xA0Check if Number Has Equal Digit Count and Digit Value.
