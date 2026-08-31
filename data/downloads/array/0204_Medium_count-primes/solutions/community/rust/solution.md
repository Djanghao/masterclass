# Rust 4ms solution

**Author:** wddwycc
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-primes/solutions/549492/](https://leetcode.com/problems/count-primes/solutions/549492/)

---

```rust
pub fn count_primes(n: i32) -> i32 {
    let n = n as usize;
    if n <= 2 {
        return 0;
    }
    let sqrted_n = (n as f64).sqrt() as usize;
    let mut validations: Vec<bool> = vec![true; n];
    validations[0] = false;
    validations[1] = false;
    for i in 2..=sqrted_n {
        if !validations[i] {
            continue;
        } else {
            validations[i] = true;
            let mut j = i * i;
            while j < n {
                validations[j] = false;
                j += i;
            }
        }
    }
    validations.into_iter().filter(|&a| a).count() as i32
}
```