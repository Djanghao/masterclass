# Video Explanation

**Author:** niits
**Votes:** 172
**Link:** [https://leetcode.com/problems/powx-n/solutions/5389007/](https://leetcode.com/problems/powx-n/solutions/5389007/)

---

# Solution Video

https://youtu.be/wxQ9ig_Nd8s

##### Subscribe to my channel from here. I have 229 videos as of July 25th
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

---

# Approach
This is based on Python Code. Other language might be different a bit.

1. Define the `myPow` function that takes two parameters: `x` (the base) and `n` (the exponent). The function returns the value of `x` raised to the power of `n`.

2. Define a helper function `calc_power(x, n)` that will be used for the recursive calculation. This function takes two parameters: `x` (the base) and `n` (the exponent).

3. In the `calc_power` function:
   - Check the base case: If `x` is 0, return 0 (as anything raised to the power of 0 is 1).
   - Check another base case: If `n` is 0, return 1 (as anything raised to the power of 0 is 1).
   - If `n` is even, recursively calculate `res` by calling `calc_power(x, n // 2)` and then square `res` (`res = res * res`).
   - If `n` is odd, recursively calculate `res` by calling `calc_power(x, (n - 1) // 2)` and then square `res`, finally multiply it with `x` (`res = res * res * x`).

4. Now, in the `myPow` function:
   - Get the absolute value of `n` using `abs(n)` and store it in a variable `abs_n`.
   - Calculate `ans` by calling `calc_power(x, abs_n)`, which gives us the value of `x` raised to the power of `abs_n`.

5. If `n` is non-negative (`n >= 0`), return `ans`.
   - If `n` is negative (`n < 0`), return `1 / ans` (which gives us the result of `x` raised to the power of `-n`, i.e., the reciprocal).

The algorithm takes advantage of the properties of exponents and the concept that x^(n) can be calculated using x^(n/2) to avoid redundant calculations and improve the efficiency of the power calculation.

```python []
class Solution:
    def myPow(self, x: float, n: int) -> float:

        def calc_power(x, n):
            if x == 0:
                return 0
            if n == 0:
                return 1
            
            res = calc_power(x, n // 2)
            res = res * res

            if n % 2 == 1:
                return res * x
            
            return res

        ans = calc_power(x, abs(n))

        if n >= 0:
            return ans
        
        return 1 / ans 
```
```javascript []
function myPow(x, n) {
    function calc_power(x, n) {
        if (x === 0) {
            return 0;
        }
        if (n === 0) {
            return 1;
        }

        let res = calc_power(x, Math.floor(n / 2));
        res = res * res;

        if (n % 2 === 1) {
            return res * x;
        }

        return res;
    }

    let ans = calc_power(x, Math.abs(n));

    if (n >= 0) {
        return ans;
    }

    return 1 / ans;
}
```
```java []
class Solution {
    public double myPow(double x, int n) {
        return binaryExp(x, (long) n);
    }

    private double binaryExp(double x, long n) {
        if (n == 0) {
            return 1;
        }
       
        if (n < 0) {
            return 1.0 / binaryExp(x, -n);
        }
       
        if (n % 2 == 1) {
            return x * binaryExp(x * x, (n - 1) / 2);
        } else {
            return binaryExp(x * x, n / 2);
        }
    }
}
```
```C++ []
class Solution {
public:
    double myPow(double x, int n) {
        return binaryExp(x, static_cast<long>(n));
    }

private:
    double binaryExp(double x, long n) {
        if (n == 0) {
            return 1;
        }
       
        if (n < 0) {
            return 1.0 / binaryExp(x, -n);
        }
       
        if (n % 2 == 1) {
            return x * binaryExp(x * x, (n - 1) / 2);
        } else {
            return binaryExp(x * x, n / 2);
        }
    }
};
```
