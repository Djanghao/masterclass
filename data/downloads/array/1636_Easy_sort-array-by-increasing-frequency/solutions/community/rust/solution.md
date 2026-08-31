# Rust solution with HashMap

**Author:** BigMih
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/1181204/](https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/1181204/)

---

```
impl Solution {
    pub fn frequency_sort(mut nums: Vec<i32>) -> Vec<i32> {
        let mut h = std::collections::HashMap::new();
        nums.iter().for_each(|&x| *(h.entry(x).or_insert(0)) += 1);
        nums.sort_unstable_by_key(|x| (h[x], -(*x)));
        nums
    }
}
```