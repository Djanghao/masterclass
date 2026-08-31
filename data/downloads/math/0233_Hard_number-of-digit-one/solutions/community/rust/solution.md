# Fastest of the fastest Rust solution | 0ms | O(log(n)) | Only maths solution

**Author:** qazalbash
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/4346579/](https://leetcode.com/problems/number-of-digit-one/solutions/4346579/)

---

# Intuition
I spent alot of time figuring out the pattern in the given number and the ouput. Lets define $f:\\mathbb{N}\\rightarrow\\mathbb{N}$ to function that return the total number of 1s in the digits uptill the provided number. The pattern I saw was,

$f(10^{k})=k\\cdot 10^{k-1}+1$
$f(a\\cdot 10^{n})=(a\\cdot k + 10)\\cdot 10^{k-1}, a\
eq 1$

Using these two I was able to figure out the formula as, we can write $n=a\\cdot 10^{n}+b$, where $a$ is the leading power of $10$ and b is the rest of the number. Right now I am unable to explain it, but you can figure it out by example. Let $n=1210$, then $a=1$, $n=3$ and $b=210$. Then the recursive formula for the function is,

$$f(a\\cdot 10^{n}+b)=\\begin{cases}k\\cdot 10^{k-1}+1+f(b) & a=1\\\\(a\\cdot k + 10)\\cdot 10^{k-1}+b+f(b)& a\
eq 1\\end{cases}$$

# Complexity
- Time complexity:
$$O(log(n))$$

- Space complexity:
$$O(1)$$

# Code
```rust
impl Solution {
    pub fn count_digit_one(N: i32) -> i32 {
        if N == 0 {
            return 0;
        }
        if N < 10 {
            return 1;
        }
        Solution::f(N as u32) as i32
    }

    fn f(n: u32) -> u32 {
        if n < 10 {
            if n == 0 {
                return 0;
            } else {
                return 1;
            }
        }
        
        let k: u32 = Solution::total_number_of_digits(n) - 1;
        let a: u32 = n / u32::pow(10, k);
        let b: u32 = n % u32::pow(10, k);
        
        if a == 1 {
            k * u32::pow(10, k - 1) + 1 + b + Solution::f(b)
        } else {
            (a * k + 10) * u32::pow(10, k - 1) + Solution::f(b)
        }
    }

    fn total_number_of_digits(mut N: u32) -> u32 {
        let mut n: u32 = 0 as u32;
        while (N != 0) {
            n += 1 as u32;
            N /= 10 as u32;
        }
        n
    }
}
```