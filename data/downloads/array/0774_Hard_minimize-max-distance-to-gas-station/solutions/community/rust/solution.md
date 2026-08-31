# Rust solution using binary search

**Author:** Andriamanitra
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/5708702/](https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/5708702/)

---

# Approach
Use binary search to find the smallest possible remaining gap size after adding the stations. It is relatively cheap to calculate how many stations need to be added between the stations to make the gaps small enough.

# Complexity
- Time complexity: $$O(N \\log G)$$ where $$N$$ is the number of stations and $$G$$ is the length of the longest gap between stations.

- Space complexity: $$O(1)$$

# Code
```rust [Rust]
impl Solution {
    pub fn minmax_gas_dist(stations: Vec<i32>, k: i32) -> f64 {
        let mut lo = 1e-7;
        let mut hi = 1e-7;
        for w in stations.windows(2) {
            let gap = (w[1] - w[0]) as f64;
            if gap > hi {
                hi = gap;
            }
        }

        // binary search for the smallest possible penalty
        while hi - lo > 1e-7 {
            let mid = (lo + hi) / 2.0;
            if Self::is_possible(&stations, mid, k) {
                hi = mid;
            } else {
                lo = mid;
            }
        }
        lo
    }

    fn is_possible(stations: &[i32], max_gap: f64, k: i32) -> bool {
        let mut stations_required = 0;
        for w in stations.windows(2) {
            let gap = (w[1] - w[0]) as f64;
            stations_required += (gap / max_gap).ceil() as i32 - 1;
            if stations_required > k {
                return false
            }
        }
        true
    }
}
```