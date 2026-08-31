# Rust Solution

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5799221/](https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5799221/)

---

# Intuition

To solve this problem, we need to:
1. Identify prime numbers up to `sqrt(r)` since any special number in the range `[l, r]` must be a square of such primes.
2. Count how many numbers within `[sqrt(l), sqrt(r)]` are primes.
3. Calculate the difference between the total numbers in the range `[l, r]` and the count of special numbers.

# Approach

1. **Prime Number Sieve:**
   - Use the Sieve of Eratosthenes to find all prime numbers up to `31623` (which is `sqrt(10^9)`).
   
2. **Range Calculation:**
   - Compute the square roots of `l` and `r` to determine the range `[ceil(sqrt(l)), floor(sqrt(r))]`.
   
3. **Count Special Numbers:**
   - Count the prime numbers within this range, as these primes' squares are the special numbers.

4. **Compute Non-Special Count:**
   - Subtract the count of special numbers from the total number of integers in `[l, r]`.

# Complexity

- **Time Complexity:** `O(n log log n)`
 
- **Space Complexity:** `O(n)`
# Code
```rust []
impl Solution {
    pub fn non_special_count(l: i32, r: i32) -> i32 {
        use std::f64;
        const M: usize = 31623;
        let mut primes = vec![true; M + 1];
        primes[0] = false;
        primes[1] = false;
        for i in 2..=M {
            if primes[i] {
                let mut j = i * 2;
                while j <= M {
                    primes[j] = false;
                    j += i;
                }
            }
        }
        let lo = (l as f64).sqrt().ceil() as usize;
        let hi = (r as f64).sqrt().floor() as usize;
        let prime_count = (lo..=hi).filter(|&i| i <= M && primes[i]).count();
        let total_count = (r - l + 1) as i32;
        total_count - prime_count as i32
    }
}

```