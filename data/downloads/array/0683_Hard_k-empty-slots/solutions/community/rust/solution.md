# Rust binary-search-based solution

**Author:** my4ng
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-empty-slots/solutions/3559224/](https://leetcode.com/problems/k-empty-slots/solutions/3559224/)

---

```
impl Solution {
    pub fn k_empty_slots(bulbs: Vec<i32>, k: i32) -> i32 {
        let len = (bulbs.len() + 1) as i32;
        let mut gaps = vec![(0, len)];
        for (bulb, day) in bulbs.iter().zip(1..len) {
            let index = gaps.partition_point(|&(_, end)| end < *bulb);
            let (start, end) = gaps[index];
            gaps[index].0 = *bulb;
            gaps.insert(index, (start, *bulb));
            if (*bulb - start - 1 == k && start != 0) || (end - *bulb - 1 == k && end != len) {
                return day;
            }
        }
        -1
    }
}
```