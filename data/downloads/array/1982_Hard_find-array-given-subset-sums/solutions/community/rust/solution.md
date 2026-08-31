# Rust 100% solution

**Author:** Martician
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-array-given-subset-sums/solutions/4021757/](https://leetcode.com/problems/find-array-given-subset-sums/solutions/4021757/)

---

This is a idiomatic Rust port of this Java solution: https://leetcode.com/problems/find-array-given-subset-sums/solutions/1421426/java-short-best-solution-o-nlogn-n-2-n-with-explanation-41-ms-beats-100/

# Code
```

impl Solution {
    pub fn recover_array(n: i32, mut sums: Vec<i32>) -> Vec<i32> {
        sums.sort_unstable();
        let mut sums = &mut sums[..];

        let mut zero_shift = 0;
        let mut rez = Vec::with_capacity(n as usize);
        for _ in 0..n {
            let m = sums.len();
            let diff = sums[1] - sums[0];

            let (mut j, mut k) = (0, 0);
            for i in 0..m {
                if k < j && sums[i] == sums[k] {
                    k += 1;
                    continue;
                }
                sums[j] = sums[i] + diff;
                j += 1;
            }

            match sums[..m >> 1].binary_search(&zero_shift) {
                Ok(_) => rez.push(-diff),
                _ => {
                    zero_shift += diff;
                    rez.push(diff)
                }
            }
            sums = &mut sums[..m >> 1];
        }

        rez
    }
}

```