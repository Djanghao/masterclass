# Rust 1ms 🔥Solution 🦀

**Author:** rony0000013
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-numbers/solutions/4130802/](https://leetcode.com/problems/count-good-numbers/solutions/4130802/)

---

# Complexity
- Time complexity: $$O(log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

impl Solution {
    const MOD:i64 = 1_000_000_007;
    pub fn count_good_numbers(n: i64) -> i32 {
        let mut ans = 1i64;
        if ((n&1) == 1) {ans = 5i64;}

        (ans * Self::pow(20, n/2) % Self::MOD ) as i32
    }
    fn pow(x:i64, n:i64) -> i64 {
        if (n==0)   {return 1i64;}

        if ((n&1) == 1) {return (x * Self::pow((x*x) % Self::MOD, (n-1)/2) % Self::MOD) % Self::MOD;}
        Self::pow((x*x) % Self::MOD, n/2) % Self::MOD
    }
}
```