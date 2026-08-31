# [Rust / lang agnostic] O(1) solution explained (quadratic)

**Author:** tmtappr
**Votes:** 3
**Link:** [https://leetcode.com/problems/arranging-coins/solutions/1561642/](https://leetcode.com/problems/arranging-coins/solutions/1561642/)

---

Did some searching and found this problem deals with something called a [triangular number sequence](https://www.mathsisfun.com/algebra/triangular-numbers.html).  The following formula is well explained in that link:  
`Dots in triangle = x(x+1)/2`.

In a nutshell, if you consider a rectangle made out of coins, the number of coins within it can be found by multiplying the number of rows by the number of columns.  Think of a triangle as 1/2 of such a rectangle where there are `x` rows, and `x + 1` columns. To get the number of coins in that rectangle is `x * (x + 1)` - rows x columns. The formula to get the number of coins in a triangle is simply 1/2 of the rectangle: `n = (x * (x + 1)) / 2`.

Conveniently, for the challenge, we are given the number of dots/coins (`n`); however, we want to find the value of `x` (number of complete rows, or "steps").

This formula is quadratic, which means we can apply the [quadratic formula](https://en.wikipedia.org/wiki/Quadratic_formula) to solve for `x`:

`n = x(x+1)/2` ... reformatted as quadratic: `0 = (1/2)*x^2 + (1/2)*x - n`

Quadratic formula, for reference: ![image](./images/0.png)

Quadratic equation general form: ![image](./images/1.png)

Plugging numbers into the quadratic formula gives: 
`x = ( -1/2 + (1/2 * 1/2 - 4 * 1/2 * -N).sqrt() ) / (2 * 1/2)`

From this we can work out the partial solutions to simplify the formula to the following code. The floor value will chop off any of the dangling coins that don't complete a full step. Important to note that the coded formula requires 64 bit precision (`f64`) and not 32. In the code below, the returned value is `i32`, but the value for `n` is cast to `f64` to perform the calculation.

```rust
impl Solution {
    pub fn arrange_coins(n: i32) -> i32 {
        let x = ((0.25 + 2.0 * (n as f64)).sqrt() - 0.5).floor() as i32;
		return x;
    }
}
```