# Rust | Negative Division | i32 Only

**Author:** silradius
**Votes:** 7
**Link:** [https://leetcode.com/problems/divide-two-integers/solutions/2090591/](https://leetcode.com/problems/divide-two-integers/solutions/2090591/)

---

Since we are permitted to operate within the range of `i32` only, avoiding overflow with `i64` or `u32` should be considered illegal.

The problem is trivial when the dividend and the divisor are both positive. So it's tempting for us to use `i32::abs()` to convert them into positive numbers and negate the result if necessary. But in this approach `i32::MIN.abs()` becomes a grave problem. According to the doc, it either panics or returns `i32::MIN` itself, which isn't what we expect. So let's do it the opposite way: convert both operands into their *negative* absolute values. 

```
impl Solution {
    pub fn divide(dividend: i32, divisor: i32) -> i32 {

        let is_neg = (dividend < 0) ^ (divisor < 0);
		
        let mut p = if dividend > 0 { -dividend } else { dividend };
        let q = if divisor > 0 { -divisor } else { divisor };

        // res is the *negative* absolute value of the quotient, in case the quotient is i32::MIN.
        let mut res = 0;
		
		// Here is the magic: the negative divisor(aka q) can left-shift atmost q.leading_ones() - 1 bits before it overflows.
        for shift in (0..q.leading_ones()).rev() {
			// Don't apply "p -= (q << shift)" before overflow checking. Consider p = 0, q << shift = i32::MIN.
            if (p <= (q << shift)) {
                p -= q << shift;
                res += -1 << shift; // Not "res -= 1 << shift;" which may cause overflow.
            }
        }
        
        if is_neg {
            res
        } else if res == i32::MIN {
            i32::MAX
        } else {
            -res
        }
		
    }
}
```
