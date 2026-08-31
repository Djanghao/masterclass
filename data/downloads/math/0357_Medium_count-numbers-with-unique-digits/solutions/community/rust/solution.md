# Simple recursive solution

**Author:** burkh4rt
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/4651713/](https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/4651713/)

---

# Approach
For fully $$n$$-digit numbers, there are 9 choices for the leading digit (zero is not allowed) and then $${}_9P_{n-1} = \\frac{9!}{(10-n)!}$$ choices for the remaining $$n-1$$ digits (zero can appear in the trailing digits). We must also count numbers having fewer than $$n$$ digits (recursively).

# Code
```Python []
class Solution:
    def countNumbersWithUniqueDigits(self, n: int) -> int:
        return (
            9 * perm(9, n - 1) + self.countNumbersWithUniqueDigits(n - 1)
            if n > 0
            else 1
        )
```
```C++ []
class Solution {
public:
    int countNumbersWithUniqueDigits(int n) {
        return n > 0 ? 9 * fac(9)/fac(10-n) 
                + countNumbersWithUniqueDigits(n-1) : 1;
    }
    int fac(int n) {
        return n > 1 ? n * fac(n-1) : 1;
    }
};
```
```Rust []
impl Solution {
    pub fn count_numbers_with_unique_digits(n: i32) -> i32 {
        if n > 0 { 9 * Self::fac(9)/Self::fac(10-n) 
                   + Self::count_numbers_with_unique_digits(n-1) } else { 1 }
    }
    pub fn fac(n: i32) -> i32 {
        if n > 1 { n * Self::fac(n-1) } else { 1 }
    }
}
```
