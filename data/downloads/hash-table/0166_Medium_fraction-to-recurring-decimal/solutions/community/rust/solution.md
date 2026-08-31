# [Rust] Tortoise & Hare | 0ms

**Author:** tmtappr
**Votes:** 0
**Link:** [https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/5349441/](https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/5349441/)

---

# Intuition
Mimicking long division by hand, we can search the results of intermediate steps for a cycle. The remainders of each intermediate division operation can serve as the the series of results.

The series of remainders are simple to calculate. The function below gets the remainder of the current step and adjusts it by an order of `10` so it can be used as the input to the same function as many times as needed:

``` rust
fn sequence_gen(n: i64) -> i64 { 
    (n % d) * 10 
}
```

With this we have a technique that will produce a sequence of values that are parallel to the results of step-by-step division. If a cycle can be found in these values, they will correspond to the result as well.

# Approach

The `floyd()` function below uses **[Floyd's tortoise and hare algorithm](https://en.wikipedia.org/wiki/Cycle_detection#Floyd's_tortoise_and_hare)** - a variant of the *fast and slow pointers* technique of cycle detection. The function returns the start of the cycle it found and its period.

With the cycle already identified, the loop that follows assembles the string representation of the result. It's code is similar to the sequence generating function where the results of division get added to the output string.

At the beginning index where the repeating cycle begins, a `'('` character is inserted. Looping continues until `n` is `0` or a cycle has completed. If there was a cycle in the result, then `')'` is appended.

# Complexity
- Time complexity: $O(\\log_{10} \\frac{n}{d} + d)$ This is the performance of the print loop. This is essentially the worst-case number of characters that would need to be printed. Certain primes as denominator will give cycle lengths of $prime - 1$; however, most prime denominators will give very short periods despite their magnitude. The `floyd()` function processing occurs entirely in the CPU, so the print loop dominates the time concerns.
- Space complexity: $O(\\log_{10} \\frac{n}{d} + d)$ The memory used is for the string that gets returned. The same notes on TC apply here.

# Code
``` rust []
impl Solution {
    pub fn fraction_to_decimal(numerator: i32, denominator: i32) -> String {
        if numerator == 0 || denominator == 0 {
            "0".into()
        } else {
            let mut s = String::new();
            if numerator.signum() * denominator.signum() < 0 {
                s.push('-');
            }
            let mut n = (numerator as i64).abs();
            let     d = (denominator as i64).abs();
            let mut i = 0;

            // Find the start of the cycle and its period.
            let cyc = floyd(|n| (n % d) * 10, n);
            let lam = cyc.0;
            let mu  = if cyc.1 != 0 { cyc.1 } else { cyc.1 + 1 };

            // Build the output string.
            while n != 0 && i < lam + mu {
                if i == 1 {
                    s.push('.');
                }
                if i == mu {
                    s.push('(');
                }
                s.push_str(&(n / d).to_string());
                n %= d;
                n *= 10;
                i += 1;
                if i == mu + lam {
                    s.push(')');
                }
            }
            s
        }
    }
}

/// Find the start of a cycle `mu` and its period `lam`.
/// Function returns `(lam, mu)` - period and start.
///
fn floyd<F>(f: F, x0: i64) -> (usize, usize) 
where
    F: Fn(i64) -> i64
{   
    let mut tort = f(x0);
    let mut hare = f(f(x0));
    let mut mu   = 0;
    let mut lam  = 1;

    while tort != hare {
        tort = f(tort);
        hare = f(f(hare));
    }
    tort = x0;
    while tort != hare {
        tort = f(tort);
        hare = f(hare);
        mu += 1;
    }
    hare = f(tort);
    while tort != hare {
        hare = f(hare);
        lam += 1;
    }
    (lam, mu)
}
```
``` Python []
class Solution:
    def fractionToDecimal(self, numerator: int, denominator: int) -> str:
        if numerator == 0 or denominator == 0:
            return "0"
        else:
            s = []
            if numerator * denominator < 0:
                s.append('-')
            n = abs(numerator)
            d = abs(denominator)
            i = 0

            lam, mu = floyd(lambda n: (n % d) * 10, n)

            if mu == 0:
                mu += 1

            while n != 0 and i < lam + mu:
                if i == 1:
                    s.append('.')
                if i == mu:
                    s.append('(')
                s.append(str(n // d))

                n %= d
                n *= 10
                i += 1
                if i == mu + lam:
                    s.append(')')

            return ''.join(s)


def floyd(func, x0):
    tort = func(x0)
    hare = func(func(x0))
    mu   = 0
    lam  = 1
    while tort != hare:
        tort = func(tort)
        hare = func(func(hare))
    tort = x0
    while tort != hare:
        tort = func(tort)
        hare = func(hare)
        mu += 1
    hare = func(tort)
    while tort != hare:
        hare = func(hare)
        lam += 1
    return (lam, mu)
```