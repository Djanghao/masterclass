# Rust Solution

**Author:** Winterreise
**Votes:** 0
**Link:** [https://leetcode.com/problems/numbers-with-repeated-digits/solutions/3331923/](https://leetcode.com/problems/numbers-with-repeated-digits/solutions/3331923/)

---


```
impl Solution {
    pub fn num_dup_digits_at_most_n(n: i32) -> i32 {
        n - Self::num_not_dup_digits_at_most_n(n)
    }

    fn num_not_dup_digits_at_most_n(n: i32) -> i32 {
        let mut n = n;
        let mut digits = Vec::new();

        while n > 0 {
            digits.push(n % 10);
            n /= 10;
        }

        let k = digits.len();

        let mut used: [i32; 10] = [0; 10];
        let mut total = 0;

        for i in 1..k {
            total += 9 * Self::permutation(9, i as i32 - 1);
        }

        for i in 0..k {
            let i = k - 1 - i;
            let num = digits[i];

            for j in (if i == k - 1 { 1 } else { 0 })..num {
                if used[j as usize] != 0 {
                    continue;
                }
                total += Self::permutation((10 - k + i) as i32, i as i32);
            }

            used[num as usize] += 1;
            if used[num as usize] > 1 {
                break;
            }

            if i == 0 {
                total += 1;
            }
        }

        total
    }

    fn permutation(n: i32, k: i32) -> i32 {
        Self::factorial(n) / Self::factorial(n - k)
    }

    fn factorial(n: i32) -> i32 {
        match n {
            0 | 1 => 1,
            n @ _ => n * Self::factorial(n - 1),
        }
    }
}
```