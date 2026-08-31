# Rust | 114ms | beats 100%

**Author:** user7454af
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-k-mirror-numbers/solutions/5406891/](https://leetcode.com/problems/sum-of-k-mirror-numbers/solutions/5406891/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn is_k_palindrome(k: i64, mut x: i64) -> bool {
        let mut x_vec = Vec::with_capacity(64);
        while x > 0 {
            x_vec.push(x % k);
            x /= k;
        }
        let l = x_vec.len();
        for i in 0..=l/2 {
            if x_vec[i] != x_vec[l-i-1] {
                return false;
            }
        }
        true
    }
    pub fn k_mirror(k: i32, mut n: i32) -> i64 {
        let k = k as i64;
        let mut palindrome_len = 2;
        let mut ans = 0;
        for i in 1..10_i64 {
            if Self::is_k_palindrome(k, i) {
                ans += i;
                n -= 1;
                if n == 0 {
                    break;
                }
            }
        }
        while n > 0 {
            for palindrome in PalindromeGen::new(palindrome_len) {
                if Self::is_k_palindrome(k, palindrome) {
                    ans += palindrome;
                    n -= 1;
                    if n == 0 {
                        break;
                    }
                }
            }
            palindrome_len += 1;
        }
        ans
    }
}


#[derive(Debug)]
pub struct PalindromeGen {
    start: i64,
    end: i64,
    middle: i64,
    even_len: bool
}

impl PalindromeGen {
    fn new(n: i64) -> Self {
        let length = (n/2) as u32;
        Self {
            start: 10_i64.pow(length-1),
            end: 10_i64.pow(length),
            middle: 0,
            even_len: (n & 1 == 0),
        }
    }

    fn get_palindrome(&self, mut x: i64, y: i64) -> Option<i64> {
        let mut palindrome = x;
        let mut rev = 0;
        if !self.even_len {
            palindrome = palindrome * 10 + y;
        }
        while x > 0 {
            palindrome *= 10;
            rev = rev * 10 + x % 10;
            x /= 10;
        }
        Some(palindrome + rev)
    }

}

impl Iterator for PalindromeGen {
    type Item = i64;

    fn next(&mut self) -> Option<i64> {
        if self.start >= self.end {
            None
        } else {
            let result = self.get_palindrome(self.start, self.middle);
            if self.even_len || self.middle == 9 {
                self.middle = 0;
                self.start += 1;
            } else {
                self.middle += 1;
            }
            result
        }
    }
}

```