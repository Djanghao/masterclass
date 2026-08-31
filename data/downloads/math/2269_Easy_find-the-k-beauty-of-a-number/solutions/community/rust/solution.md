# [Rust] Without converting to String.

**Author:** skendar
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/3260633/](https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/3260633/)

---

Could be better, but the point is to not convert `num` to a string.
```
impl Solution {
    pub fn divisor_substrings(num: i32, k: i32) -> i32 {
        let mut n = num;
        let window = 10_i32.pow(k as u32);
        let mut ans = 0;

        while n >= (window / 10) {
            let t = n % window;
            if t != 0 && num % t == 0 {
                ans += 1;
            }
            n /= 10
        }

        ans
    }
}
```