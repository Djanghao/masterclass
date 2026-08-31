# Rust - DP(1D)

**Author:** idiotleon
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-split-an-array/solutions/3084508/](https://leetcode.com/problems/minimum-cost-to-split-an-array/solutions/3084508/)

---

Solution - [github](https://github.com/An7One/lc_soln_rust_leon/tree/main/src/leetcode/lvl4/lc2547)

<b>By Tag</b>
#PartitionOrSplit - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/array/by_topic/partition_or_split.txt)
#Subarray - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/array/by_data_structure/subarray.txt)

```
/// @author: Leon
/// https://leetcode.com/problems/minimum-cost-to-split-an-array/
/// Time Complexity:    O(`len_ns` ^ 2)
/// Space Complexity:   O(`len_ns` ^ 2)
/// Reference:
/// https://leetcode.com/problems/minimum-cost-to-split-an-array/solutions/3083781/java-dp/
impl Solution {
    pub fn min_cost(nums: Vec<i32>, k: i32) -> i32 {
        let len_ns: usize = nums.len();
        let trimmed: Vec<Vec<i32>> = {
            let mut trimmed: Vec<Vec<i32>> = vec![vec![0; len_ns]; len_ns];
            for lo in 0..len_ns {
                // to calculate the trimmed length !on the run!
                let mut cnt: i32 = 0;
                let mut freqs: Vec<i32> = vec![0; len_ns];
                for hi in lo..len_ns {
                    let idx: usize = nums[hi] as usize;
                    freqs[idx as usize] += 1;
                    if freqs[idx] == 2 {
                        cnt += 2;
                    } else if freqs[idx] > 2 {
                        cnt += 1;
                    }
                    trimmed[lo][hi] = cnt;
                }
            }
            trimmed
        };
        // double caution with indices
        let upper_bound: i32 = trimmed[0][len_ns - 1] + k;
        // double caution with indices
        let mut dp: Vec<i32> = vec![0; len_ns + 1];
        for hi in 1..=len_ns {
            let mut min: i32 = upper_bound;
            for lo in 0..hi {
                min = std::cmp::min(min, dp[lo] + k + trimmed[lo][hi - 1]);
            }
            dp[hi] = min;
        }
        return dp[len_ns];
    }
}
```

Please be reminded that a dedicated method to calculate the trimmed length might lead to TLE.

Solution - TLEed - [github](https://github.com/An7One/lc_soln_rust_leon/blob/main/src/leetcode/lvl4/lc2547/soln_tle_dp.rs)
