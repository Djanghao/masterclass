# Rust Solution | Very Simple

**Author:** JammyJ0
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-prime-difference/solutions/5024560/](https://leetcode.com/problems/maximum-prime-difference/solutions/5024560/)

---


```
impl Solution {
    pub fn maximum_prime_difference(nums: Vec<i32>) -> i32 {
        let left = nums.iter().position(|&x| is_prime(x)).unwrap();
        let right = nums.iter().rposition(|&x| is_prime(x)).unwrap();
        (right - left) as _
    }
}

fn is_prime(x: i32) -> bool {
    x > 1 && (2..=(x as f64).sqrt() as i32).all(|n| x % n != 0)
}
```