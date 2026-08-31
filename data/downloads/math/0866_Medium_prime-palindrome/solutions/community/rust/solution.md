# Rust | 0ms | beats 100%

**Author:** user7454af
**Votes:** 1
**Link:** [https://leetcode.com/problems/prime-palindrome/solutions/5406703/](https://leetcode.com/problems/prime-palindrome/solutions/5406703/)

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
    pub fn prime_palindrome(n: i32) -> i32 {
        let is_prime = |n: i32| -> bool {
            if n == 1 {return false;}
            if n == 2 {return true;}
            if n & 1 == 0 {return false;}
            let sqn = f64::sqrt(n as f64) as i32 + 1;
            for i in (3..sqn).step_by(2) {
                if n % i == 0 {
                    return false;
                }
            }
            true
        };
        if n < 3 {return 2;}
        if n == 3 {return 3;}
        if n <= 5 {return 5;}
        if n <= 7 {return 7;}
        if n <= 11 {return 11;}
        let mut n = n;
        while true {
            for palindrome in PalindromeOddLenGen::new(n) {
                if palindrome >= n && is_prime(palindrome) {
                    return palindrome;
                }
            }
            n *= 10;
        }
        -1
    }
    
}

pub struct PalindromeOddLenGen {
    start: i32,
    end: i32,
    middle: i32,
}

impl PalindromeOddLenGen {
    // all palindromes of even length are divisible by 11
    fn new(n: i32) -> Self {
        let ns = n.to_string();
        let length = (ns.len()/2) as u32;
        Self {
            start: 10_i32.pow(length-1),
            end: 10_i32.pow(length),
            middle: 0,
        }
    }
}

impl Iterator for PalindromeOddLenGen {
    type Item = i32;

    fn next(&mut self) -> Option<i32> {
        if self.start >= self.end {
            None
        } else {
            let result = get_palindrome(self.start, self.middle);
            if self.middle == 9 {
                self.middle = 0;
                self.start += 1;
            } else {
                self.middle += 1;
            }
            result
        }
    }
}

fn get_palindrome(mut x: i32, y: i32) -> Option<i32> {
    // all palindromes of even length are divisible by 11
    let mut palindrome = x;
    let mut rev = 0;
    palindrome = palindrome * 10 + y;
    while x > 0 {
        palindrome *= 10;
        rev = rev * 10 + x % 10;
        x /= 10;
    }
    Some(palindrome + rev)
}

```