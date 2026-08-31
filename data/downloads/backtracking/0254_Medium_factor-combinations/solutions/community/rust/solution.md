# Rust solution recursive beats 100%

**Author:** segv
**Votes:** 0
**Link:** [https://leetcode.com/problems/factor-combinations/solutions/2769011/](https://leetcode.com/problems/factor-combinations/solutions/2769011/)

---

```
fn get_factors_rec(start: i32, n: i32) -> Vec<Vec<i32>> {
    let mut result: Vec<Vec<i32>> = Vec::new();
    for x in start..(isqrt(n) + 1) {
        if n % x == 0 {
            let temp = get_factors_rec(x, n / x);
            for mut t in temp {
                t.push(x);
                result.push(t);
            }
        }
    }
    result.push(vec![n]);
    result
}
fn isqrt(n: i32) -> i32 {
    (n as f64).sqrt() as i32
}
impl Solution{
pub fn get_factors(n: i32) -> Vec<Vec<i32>> {
    let mut result: Vec<Vec<i32>> = Vec::new();
    for x in 2..(isqrt(n) + 1) {
        if n % x == 0 {
            let temp = get_factors_rec(x, n / x);
            for mut t in temp {
                t.push(x);
                result.push(t);
            }
        }
    }
    result
}
}
```