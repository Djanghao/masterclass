# [Rust] Recursive digits to vector, then fold and compare.

**Author:** miecz
**Votes:** 1
**Link:** [https://leetcode.com/problems/armstrong-number/solutions/977078/](https://leetcode.com/problems/armstrong-number/solutions/977078/)

---

```
impl Solution {
    pub fn is_armstrong(n: i32) -> bool {
        fn to_digits(x: i32, vec: &mut Vec<i32>) {
            if x >= 10 {
                to_digits(x/10, vec);
            }
            vec.push(x%10);
        }
        let mut digits = Vec::new();
        to_digits(n, &mut digits);
        
        let dig_count = digits.len();
        n == digits.iter().fold(0, |acc, digit| acc + digit.pow(dig_count as u32) )    }
}
```