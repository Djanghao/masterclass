# Rust 0ms solution - exponentiation by squaring/binary exponentiation - no recursive calls

**Author:** totsukawaii
**Votes:** 2
**Link:** [https://leetcode.com/problems/powx-n/solutions/3871230/](https://leetcode.com/problems/powx-n/solutions/3871230/)

---

# Explanation
1. The code first checks if the exponent n is zero. If it is, it returns 1.0 immediately since any number to the power of 0 is 1.

2. Next, it initializes the result variable to 1.0, which will store the final result of the power calculation. The base variable is set to the input number x, and the exp variable is set to the exponent n as an i64 value to handle negative exponents.

3. If the exponent n is negative, it updates the base to be the reciprocal of x (i.e., 1.0 / base) and makes the exp positive by taking its absolute value (-exp). This handles the case of negative exponents.

4. The code then enters a while loop that continues until the exp becomes zero. This loop performs the exponentiation by squaring algorithm.

5. Inside the loop, it checks if the current exp is odd (i.e., exp % 2 == 1). If it is, it multiplies the result by the base.

6. After that, it squares the base by multiplying it with itself (base *= base).

7. Finally, it divides the exp by 2 (exp /= 2) to reduce it for the next iteration.
# Code
```
impl Solution {
    pub fn my_pow(x: f64, n: i32) -> f64 {
        if n == 0 {
            return 1.0;
        }

        let mut result = 1.0;
        let mut base = x;
        let mut exp = n as i64;

        if exp < 0 {
            base = 1.0 / base;
            exp = -exp;
        }

        while exp > 0 {
            if exp % 2 == 1 {
                result *= base;
            }
            base *= base;
            exp /= 2;
        }

        result
    }
}
```