# Rust Sieve of Eratosthenes

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/4016129/](https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/4016129/)

---

# Code
```
impl Solution {
    pub fn closest_primes(left: i32, right: i32) -> Vec<i32> {
        let max = 1000001.min(right as usize + 1);
        let mut primes = vec![true; max];
        primes[0] = false;
        primes[1] = false;

        let mut i = 2;
        while i < max {
            if primes[i] {
                let mut j = i * i;
                while j < max {
                    primes[j] = false;
                    j += i;
                }
            }
            i += 1;
        }

        let left = left as usize;
        let right = right as usize;

        let mut ans = vec![-1; 2];
        let mut min = usize::MAX;

        let mut i = right;
        while i >= left {
            if primes[i] {
                let mut j = i - 1;
                while j >= left {
                    if primes[j] {
                        if i - j <= min {
                            min = i - j;
                            ans[0] = j as i32;
                            ans[1] = i as i32;
                        }
                        i = j + 1;
                        break;
                    }
                    j -= 1;
                }
            }
            i -= 1;
        }

        ans
    }
}
```