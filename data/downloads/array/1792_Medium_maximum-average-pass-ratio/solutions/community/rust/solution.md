# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-pass-ratio/solutions/3213446/](https://leetcode.com/problems/maximum-average-pass-ratio/solutions/3213446/)

---

# Code
```
impl Solution {
    pub fn max_average_ratio(classes: Vec<Vec<i32>>, extra_students: i32) -> f64 {
        fn profit(pass: i32, total: i32) -> f64 {
            (pass + 1) as f64 / (total + 1) as f64 - pass as f64 / total as f64
        }

        let mut total = 0.0;
        let mut pq = std::collections::BinaryHeap::new();
        for c in classes.iter() {
            total += c[0] as f64 / c[1] as f64;
            let v = profit(c[0], c[1]);
            pq.push((OrderedF64(v), c.clone()));
        }
        for _ in 0..extra_students {
            let (added_profit, c) = pq.pop().unwrap();
            total += added_profit.0;
            let v = profit(c[0] + 1, c[1] + 1);
            pq.push((OrderedF64(v), vec![c[0] + 1, c[1] + 1]));
        }
        total / classes.len() as f64
    }
}

#[derive(Debug, Clone)]
struct OrderedF64(f64);

impl PartialEq for OrderedF64 {
    fn eq(&self, other: &Self) -> bool {
        self.0 == other.0
    }
}

impl PartialOrd for OrderedF64 {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        self.0.partial_cmp(&other.0)
    }
}

impl Eq for OrderedF64 {}

impl Ord for OrderedF64 {
    fn cmp(&self, other: &Self) -> std::cmp::Ordering {
        self.partial_cmp(other).unwrap_or(std::cmp::Ordering::Equal)
    }
}
```