# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/3254052/](https://leetcode.com/problems/abbreviating-the-product-of-a-range/solutions/3254052/)

---

# Code
```
impl Solution {
    pub fn abbreviate_product(left: i32, right: i32) -> String {
        let (mut suff, mut c, mut total, max_suff) = (1, 0, 0, 100_000_000_000);
        let mut pref = 1.0;
        for i in left..=right {
            pref *= i as f64;
            suff *= i as i64;
            while pref >= 100_000.0 {
                pref /= 10.0;
                total = if total == 0 { 6 } else { total + 1 };
            }
            while suff % 10 == 0 {
                suff /= 10;
                c += 1;
            }
            suff %= max_suff;
        }
        let s = suff.to_string();
        format!(
            "{}{}{}e{}",
            pref as i32,
            if total - c <= 10 { "" } else { "..." },
            if total - c < 5 {
                ""
            } else {
                &s[s.len() - (total - c - 5).min(5) as usize..]
            },
            c
        )
    }
}
```