# Rust Imperative Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-symmetric-integers/solutions/5363077/](https://leetcode.com/problems/count-symmetric-integers/solutions/5363077/)

---

# Code
```
impl Solution {
    pub fn count_symmetric_integers(low: i32, high: i32) -> i32 {
        let mut result = 0;
        for i in low..high + 1 {
            if Solution::is_symmetric(i) {
                result += 1;
            }
        }
        return result;
    }

    pub fn is_symmetric(n: i32) -> bool {
        let digits = n.to_string();
        let (len, mut lsum, mut rsum) = (digits.len(), 0, 0);

        if len % 2 == 1 {
            return false;
        }

        for i in 0..len / 2 {
            let ld = match digits.chars().nth(i) {
                Some(d) => d,
                None => 'x',
            };
            let rd = match digits.chars().nth(len - i - 1) {
                Some(d) => d,
                None => 'x',
            };
            lsum += match ld.to_digit(10) {
                Some(d) => d,
                None => 0,
            };
            rsum += match rd.to_digit(10) {
                Some(d) => d,
                None => 0,
            };
        }

        return lsum == rsum;
    }
}

```