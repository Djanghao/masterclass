# Rust with binary search

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/4869129/](https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/4869129/)

---

# Complexity
- Time complexity: $$O(stations.len() * log(k))$$

- Space complexity: $$O(stations.len())$$

# Code
```
impl Solution {
    pub fn max_power(stations: Vec<i32>, r: i32, k: i32) -> i64 {
        let r = r as usize;
        let k = k as i64;
        let mut acc = stations.iter().take(r).map(|&x| x as i64).sum();
        let mut power = vec![0i64; stations.len()];
        for i in 0..stations.len() {
            if i + r < stations.len() {
                acc += stations[i + r] as i64;
            }
            if i >= r + 1 {
                acc -= stations[i - r - 1] as i64;
            }
            power[i] = acc;
        }

        let mut install = vec![0i64; power.len()];
        let min_power = *power.iter().min().unwrap() as i64;
        let mut lo = min_power + k / power.len() as i64;
        let mut hi = min_power + k;
        while lo < hi {
            let mid = (lo + hi + 1) >> 1;
            acc = 0;
            for i in 0..power.len() {
                if power[i] + acc < mid {
                    let diff = mid - power[i] - acc;
                    acc += diff;
                    install[i] = diff;
                }
                else {
                    install[i] = 0;
                }
                if i >= r * 2 {
                    acc -= install[i - r * 2];
                }
            }

            let total = install.iter().sum::<i64>();
            if total == k {
                return mid;
            }
            else if total > k {
                hi = mid - 1;
            }
            else {
                lo = mid;
            }
        }
        lo
    }
}
```