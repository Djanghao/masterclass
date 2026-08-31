# Rust Binary Search

**Author:** davidp918
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/1361953/](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/1361953/)

---

Search from top right to bottom left
```
impl Solution {
    pub fn find_kth_number(m: i32, n: i32, k: i32) -> i32 {
        let k = k as usize;
        let mut low: i32 = 1;
        let mut high: i32 = m * n;

        while low < high {
            let mut count: usize = 0;
            let middle: i32 = (low + high) / 2;

            let mut j = n;
            for i in 0..m {
                while j > 0 && (i + 1) * j > middle {
                    j -= 1;
                }
                if j == 0 {
                    break;
                }
                count += j as usize;
            }

            if count < k {
                low = middle + 1;
            } else {
                high = middle;
            }
        }

        low
    }
}
```

Or use integer division
```
impl Solution {
    pub fn find_kth_number(m: i32, n: i32, k: i32) -> i32 {
        let k = k as usize;
        let mut low: i32 = 1;
        let mut high: i32 = m * n;

        while low < high {
            let mut count: usize = 0;
            let middle: i32 = (low + high) / 2;

            for i in 1..=m {
                // 5, 10, 15, 20
                // 17
                // 17 // 5 = 3
                let cur = std::cmp::min(middle / i, n) as usize;
                if cur == 0 {
                    break;
                }
                count += cur;
            }

            if count < k {
                low = middle + 1;
            } else {
                high = middle;
            }
        }

        low
    }
}
```