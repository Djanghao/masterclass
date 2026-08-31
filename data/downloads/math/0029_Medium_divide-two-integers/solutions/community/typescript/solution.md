# ✅ Good and easy JS/TS Solution for simple understanding

**Author:** biswabijaya
**Votes:** 2
**Link:** [https://leetcode.com/problems/divide-two-integers/solutions/2874377/](https://leetcode.com/problems/divide-two-integers/solutions/2874377/)

---

```
function divide(dividend: number, divisor: number): number {
    let sign = ((dividend < 0) !== (divisor < 0)) ? -1 : 1;
    if (divisor == 1)
        return ((sign == 0) ? -dividend : dividend);
    if (divisor == -1 && dividend>-1)
        return ((sign == 0) ? dividend : -dividend);
    if (dividend == divisor)
        return 1;
    
    let quotient = 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    while (dividend >= divisor) {
        dividend -= divisor;
        ++quotient;
    }
    if(sign==-1) 
        quotient=-quotient;
    
    if (quotient < -2147483648) return -2147483648;
	if (quotient > 2147483647) return 2147483647;
    
    return quotient;

};
```