# Rust

**Author:** wallicent
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/2494353/](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/2494353/)

---

This is my unaltered submission to the 2022-08-28 Weekly Contest 308. We have to know how many 'P's, 'M's and 'G's there are in total (1 minute to process each letter). We also want to know the position of the last of each letter, since then the truck doesn't have to travel further. We need to know the sum of travel times to each stop, because the truck has to travel to each stop in turn. So we'll compute the prefix sum of travel times ((O(n)) as well as the sum of number of letters (O(n * k), where k is the maximum length of `garbage[i]`, and the last positions of the respective letters (O(n * k)). The total time is then the sum of the number of letters plus the sum of the corresponding prefix sum for the last stop for each letter.

Time: O(n * k)
Space: O(n) for vector of prefix sums

Comment: I could have made things simpler by not splitting the sums of letters and just having something like `total_len += s.len()`, not that it would make any difference to big-O time complexity.

```
impl Solution {
    pub fn garbage_collection(garbage: Vec<String>, travel: Vec<i32>) -> i32 {
        let mut acc = 0;
        let travel: Vec<i32> = std::iter::once(0).chain(travel.into_iter().map(|t| { acc += t; acc })).collect();
        let (p, m, g, last_p, last_m, last_g) = garbage.into_iter().enumerate().fold((0, 0, 0, 0, 0, 0), |(mut p, mut m, mut g, mut last_p, mut last_m, mut last_g), (i, s)| {
            for &b in s.as_bytes() {
                match b {
                    b'P' => { p += 1; last_p = i; },
                    b'M' => { m += 1; last_m = i; },
                    _ => { g += 1; last_g = i; },
                }
            }
            (p, m, g, last_p, last_m, last_g)
        });
        p + m + g + travel[last_p] + travel[last_m] + travel[last_g]
    }
}
```