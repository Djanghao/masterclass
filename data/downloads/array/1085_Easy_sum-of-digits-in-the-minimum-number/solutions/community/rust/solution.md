# Rust 1 liner

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/4280218/](https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/4280218/)

---

# Intuition
pretty straightfoward implementation

# Code
```
pub fn sum_of_digits(nums: Vec<i32>) -> i32 {
    (format!("{}", nums.into_iter()
        .min().unwrap()).as_bytes().into_iter()
        .map(|x| (x - b'0') as i32).sum::<i32>() % 2 - 1
    ).abs()
}

// another solution
pub fn sum_of_digits(nums: Vec<i32>) -> i32 {
    let mut min = i32::MAX;
    for n in nums {
        if n < min {
            min = n;
        }
    }
    let mut sum = 0;
    while min > 0 {
        sum += min % 10;
        min /= 10;
    }
    sum & 1 ^ 1
}
```