# Rust log(n) using Math

**Author:** davidp918
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-good-base/solutions/1392797/](https://leetcode.com/problems/smallest-good-base/solutions/1392797/)

---

```
impl Solution {
    pub fn smallest_good_base(n: String) -> String {
        // for a number n in base k to be consisted of m 1s
        // n = k^0 + k^1 + k^2 + ... + k^(m-1)
        // n = (1 - k^m) / (1 - k)
        // The larger the base, the smaller the m (less digits of 1s)
        //                   -> m is max when n is in binary(base of 2)
        // Thus, go from max(m) towards 1, check if k can be a valid integer

        // For the checking part,
        // since k^(m-1) < k^0 + k^1 + ... + k^(m-1) < k^m
        // k can be estimated:
        // n = (1 - k^m) / (1 - k)
        //   ~= k^m / k
        //   ~= k^(m-1)
        // k ~= n^[1/(m-1)]

        let n: i64 = n.parse::<i64>().unwrap();
        let longest: u32 = (n as f64).log(2.0) as u32 + 1;

        for m in (2..=longest).rev() {
            let k: i64 = f64::powf(n as f64, 1.0 / (m as f64 - 1.0)) as i64;
            if n * (1 - k) == 1 - k.pow(m) {
                return k.to_string();
            }
        }

        // since the estimation got rid of the (1 -),
        // there can be corner cases that the estimated value
        // is an integer but does not evaluate correctly
        // For example: n = 1_000_000_000_000_000_000
        // when m = 2, the estimation is not 999_999_999_999_999_999

        (n - 1).to_string()
    }
}
```